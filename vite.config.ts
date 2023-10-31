import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  // 开发环境使用
  // mode = 模式字符串，process.cwd()= 项目根目录
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      port: 8888,
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target:
            // "https://mock.mengxuegu.com/mock/653f5db682cf792009576e5b/mxg-vue3-elementplus",
            env.VITE_APP_SERVICE_URL,
          rewrite: (path) =>
            path.replace(new RegExp(`^${env.VITE_APP_BASE_API}/`), ""),
          changeOrigin: true,
        },
      },
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
