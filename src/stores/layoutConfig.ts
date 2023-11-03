import { defineStore } from "pinia";

export const useLayoutConfigStore = defineStore("layoutCongfig", {
  state: (): LayoutConfigState => {
    return {
      isCollapse: false, // 是否折叠菜单
      globalTitle:'xxx-ADMIN',
      isFullScreen:false,//是否全屏状态
      isDrak:false,//是否暗黑模式
    };
  },
});
