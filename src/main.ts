import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "@/styles/index.scss";

import { useElIcon } from "@/utils/setGlobal";
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});

app.use(createPinia());
app.use(router);
useElIcon(app); // 注册elementPlus图标

app.mount("#app");
