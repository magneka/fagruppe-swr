import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    env: { API_BASE_URL: "http://localhost:3000" },
    deps: {
      inline: ["@dnb/eufemia"],
    },
  },
});
