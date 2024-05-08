import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      exclude: ["**/app/**", "**/*.ts", "**/*.mjs", "**/*.js"],
      reporter: ["text", "lcov"],
    },
  },
});
