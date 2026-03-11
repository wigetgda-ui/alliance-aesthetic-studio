import { spawn } from "node:child_process";

const viteCommand = process.platform === "win32" ? "npx vite build" : "npx vite build";

const child = spawn(viteCommand, {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
  },
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
