/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefindComponent } from "vue";
  const component: DefindComponent<{}, {}, any>;
  export default component;
}

declare module'element-plus/dist/locale/zh-cn.mjs'