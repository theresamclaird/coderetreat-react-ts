import fs from "fs";
import path from "path";

const src = path.resolve("baselines/minimal");
const dst = path.resolve("src");

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from)) {
    const s = path.join(from, entry);
    const d = path.join(to, entry);
    const stat = fs.statSync(s);
    if (stat.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

copyDir(src, dst);
console.log("✔ Restored src/ from baselines/minimal");