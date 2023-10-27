import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { type App } from "vue";

export function useElIcon(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`ele-${key}`, component);
  }
}
