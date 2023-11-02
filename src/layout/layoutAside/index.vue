<script setup lang="ts">
import { useLayoutConfigStore } from '@/stores/layoutConfig';
import { defineAsyncComponent } from 'vue';
const layouConfig = useLayoutConfigStore()
const Logo = defineAsyncComponent(() => import('./logo.vue'))
const VerticalMenu = defineAsyncComponent(() => import('./verticalMenu.vue'));
</script>

<template>
  <div class="h100">
    <el-aside class="layout-aside " :class="layouConfig.isCollapse ? 'layout-aside-menu-60' : 'layout-aside-menu-200'">
      <Logo></Logo>
      <VerticalMenu></VerticalMenu>
    </el-aside>
  </div>
</template>

<style scoped></style>
