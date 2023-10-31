import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // 开发环境使用
  server: {
    port: 8888,
    open: true,
    proxy: {
      "/dev-api": {
        target:
          "https://mock.mengxuegu.com/mock/653f5db682cf792009576e5b/mxg-vue3-elementplus",
        rewrite: (path) => path.replace(/^\/dev-api/, ""),
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
