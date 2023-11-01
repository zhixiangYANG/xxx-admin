<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const Logo = defineAsyncComponent(() => import('./logo.vue'))
const VerticalMenu = defineAsyncComponent (()=>import('./verticalMenu.vue'));
</script>

<template>
  <div class="h100">
    <el-aside class="layout-aside layout-aside-menu-200">
      <Logo></Logo>
      <VerticalMenu></VerticalMenu>
    </el-aside>
  </div>
</template>

<style scoped></style>
