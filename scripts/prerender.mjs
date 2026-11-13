// Injects the server-rendered page into dist/index.html (static pre-render, no server needed).
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const outDir = process.argv[2] || "dist";
const { render } = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);
const file = path.join(root, outDir, "index.html");
const html = fs.readFileSync(file, "utf8");
if (!html.includes('<div id="root"></div>')) throw new Error("root placeholder not found");
fs.writeFileSync(file, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`));
console.log(`pre-rendered ${outDir}/index.html`);
