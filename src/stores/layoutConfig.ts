import { defineStore } from "pinia";

export const useLayoutConfigStore = defineStore("layoutCongfig", {
  state: (): LayoutConfigState => {
    return {
      isCollapse: false, // 是否折叠菜单
      globalTitle:'xxx-ADMIN'
    };
  },
});
