import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve(process.cwd(), "dist");

await copyFile(resolve(distDir, "index.html"), resolve(distDir, "404.html"));

console.log("Copied dist/index.html to dist/404.html for GitHub Pages SPA routing.");
