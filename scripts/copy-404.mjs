import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve(process.cwd(), "dist");
const staticRoutes = ["polityka-prywatnosci", "regulamin"];

await copyFile(resolve(distDir, "index.html"), resolve(distDir, "404.html"));

for (const route of staticRoutes) {
  const routeDir = resolve(distDir, route);
  await mkdir(routeDir, { recursive: true });
  await copyFile(resolve(distDir, "index.html"), resolve(routeDir, "index.html"));
}

console.log(
  "Copied dist/index.html to dist/404.html and created static entry points for legal pages.",
);
