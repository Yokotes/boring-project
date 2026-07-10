import { VitePluginNode } from "vite-plugin-node";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@/prisma": path.resolve(__dirname, "./prisma"),
    },
  },
  plugins: [
    VitePluginNode({
      adapter: "express",
      appPath: "./src/main.ts",
    }),
  ],
});
