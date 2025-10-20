# Coderetreat Docs (Shared)

Shared documentation for coderetreat starter repos (concept guides, pairing tips, and constraints).

Use this repo as a single source of truth and pull it into any language/framework starter (React+TS, Node+JS, Python, Java, etc.).

## One-time Add

```bash
# from your starter repo (e.g., coderetreat-node-js)
git subtree add --prefix=docs https://github.com/theresamclaird/coderetreat-docs.git main --squash
```

## Pull updates later

```bash
git subtree pull --prefix=docs https://github.com/theresamclaird/coderetreat-docs.git main --squash
```

> Tip: add a short npm script in your starter repo:

```json
{ "scripts": { "docs:sync": "git subtree pull --prefix=docs https://github.com/theresamclaird/coderetreat-docs.git main --squash" } }
```

## Building README

You will need to create a README.template.md file in the root of your project, which describes how to build, run, and test your project. Optionally, you can add a link to the "learn more" menu within docs:

```md
<!-- include: docs/learn-more.md levelOffset=1 -->
```

### Minimal build script (example)

Included in the `/scripts/` folder is a file named build-readme.mjs which can be used to build a README.md if it includes links to things like the `learn-more.md` file shown above. Using this script, you can add a couple of convenience scripts to your starter repo’s package.json that can build your README.md for you:

```json
{ "scripts": {
  "readme:build": "node docs/scripts/build-readme.mjs",
  "readme:watch": "node docs/scripts/build-readme.mjs --watch"
}}
```

Run:

```bash
npm run readme:build
```

