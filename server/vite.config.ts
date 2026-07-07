import { VitePluginNode } from "vite-plugin-node";
import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    VitePluginNode({
      adapter: "express",
      appPath: "./src/main.ts",
    }),
  ],
});
