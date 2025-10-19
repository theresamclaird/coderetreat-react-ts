#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config (tweak if you like)
const TEMPLATE_PATH = path.resolve(process.cwd(), "README.template.md");
const OUTPUT_PATH = path.resolve(process.cwd(), "README.md");

// Matches lines like:
// <!-- include: path/to/file.md -->
// <!-- include: path/to/file.md levelOffset=1 -->
const INCLUDE_RE =
  /^\s*<!--\s*include:\s*([^\s]+)(?:\s+levelOffset=(\-?\d+))?\s*-->\s*$/i;

async function readUtf8(p) {
  return fs.readFile(p, "utf8");
}

function shiftHeadings(markdown, offset = 0) {
  if (!offset) return markdown;
  const lines = markdown.split("\n");
  return lines
    .map((line) => {
      // Only shift ATX header lines starting with '#'
      if (!line.startsWith("#")) return line;
      const m = line.match(/^(#+)(\s.*)?$/);
      if (!m) return line;
      const hashes = m[1].length;
      const text = m[2] ?? "";
      const next = Math.max(1, hashes + offset);
      return "#".repeat(next) + text;
    })
    .join("\n");
}

function normalizeEol(str) {
  // Ensure LF endings to avoid noisy diffs across OSes
  return str.replace(/\r\n/g, "\n");
}

function banner() {
  return `<!--
  NOTE: This file is generated. Do not edit README.md directly.
  Edit README.template.md and shared fragments in vendor/coderetreat-docs/.
-->`;
}

async function buildOnce() {
  const template = await readUtf8(TEMPLATE_PATH);
  const lines = normalizeEol(template).split("\n");
  const includePaths = [];

  // First pass: collect includes (for watch mode)
  for (const line of lines) {
    const m = line.match(INCLUDE_RE);
    if (m) {
      const incPath = m[1];
      includePaths.push(path.resolve(process.cwd(), incPath));
    }
  }

  // Second pass: replace includes
  const outLines = [];
  for (const line of lines) {
    const m = line.match(INCLUDE_RE);
    if (!m) {
      outLines.push(line);
      continue;
    }
    const incRel = m[1];
    const offset = parseInt(m[2] ?? "0", 10);
    const incAbs = path.resolve(process.cwd(), incRel);
    let content;
    try {
      content = await readUtf8(incAbs);
    } catch (err) {
      content = `> ⚠️ **Include not found**: \`${incRel}\`\n\n`;
    }
    content = normalizeEol(content).trimEnd();
    content = shiftHeadings(content, offset);

    // Add helpful markers around includes for future debugging
    outLines.push(
      `<!-- begin-include: ${incRel} -->`,
      content,
      `<!-- end-include: ${incRel} -->`
    );
  }

  const rendered = [banner(), "", outLines.join("\n")].join("\n");
  await fs.writeFile(OUTPUT_PATH, rendered, "utf8");
  console.log(`✔ README built → ${path.relative(process.cwd(), OUTPUT_PATH)}`);

  return includePaths;
}

async function main() {
  const watch = process.argv.includes("--watch");
  const includes = await buildOnce();
  if (!watch) return;

  console.log("👀 Watching README.template.md and include fragments for changes…");

  const watchers = new Map();
  const watchFile = (p) => {
    if (watchers.has(p)) return;
    try {
      const w = fs.watch(p, { persistent: true }, async () => {
        try {
          await buildOnce();
        } catch (err) {
          console.error("Build error:", err?.message ?? err);
        }
      });
      watchers.set(p, w);
    } catch (err) {
      // File may not exist yet; ignore
    }
  };

  // Watch template
  watchFile(TEMPLATE_PATH);
  // Watch includes
  for (const p of includes) watchFile(p);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});