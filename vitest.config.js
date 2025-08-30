import { defineConfig } from "vitest/config";

export default defineConfig({
  projects: [
    {
      root: ".",
      extends: "./vite.config.js",
      test: {
        include: ["src/**/*.node.test.{js,jsx}"],
        name: "happy-dom",
        coverage: {
          provider: "istanbul",
          reporter: ["text", "json", "html"],
        },
        environment: "happy-dom",
      },
    },
    {
      root: ".",
      extends: "./vite.config.js",
      test: {
        setupFiles: ["vitest-browser-react"],
        include: ["src/**/*.browser.test.{js,jsx}"],
        name: "browser",
        coverage: {
          provider: "istanbul",
          reporter: ["text", "json", "html"],
        },
        browser: {
          provider: "playwright",
          enabled: true,
          name: "chromium",
        },
      },
    },
  ],
});
