import { Local } from "@/utils/storage";
import { defineStore } from "pinia";
import { nextTick } from "vue";
export const useLayoutConfigStore = defineStore("layoutCongfig", {
  state: (): LayoutConfigState => {
    return {
      isCollapse: false, // 是否折叠菜单
      globalTitle: "xxx-ADMIN",
      isFullScreen: false, //是否全屏状态
      isDrak: false, //是否暗黑模式
    };
  },
  actions: {
    // 更新状态
    updateState(state: LayoutConfigState) {
      // 将传递的对象属性值更新到state状态中
      this.$patch(state);
    },
  },
});

nextTick(() => {
  const layoutConfig = useLayoutConfigStore();
  // 监听状态变化，将状态持久化
  layoutConfig.$subscribe((mutation, state) => {
    // 保存到浏览器localStorage
    Local.set("layoutConfig", state);
  });
});
