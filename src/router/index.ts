import { createRouter, createWebHistory } from "vue-router";

import type { RouteRecordRaw } from "vue-router";

export const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: dynamicRoutes,
});

export default router;
