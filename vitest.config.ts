import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["vitestSetup.ts"],
    globals: true,

    coverage: {
      exclude: [
        "**/app/**",
        "**/*.ts",
        "**/*.mjs",
        "**/*.js",
        "components/ui/**",
      ],
      reporter: ["text", "lcov"],
    },
  },
  define: {
    __CLERK_KEY__: `"${process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}"`,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
