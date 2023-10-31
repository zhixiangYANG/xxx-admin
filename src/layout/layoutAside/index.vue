<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const Logo = defineAsyncComponent(() => import('./logo.vue'))
</script>

<template>
  <div class="h100">
    <el-aside class="layout-aside layout-aside-menu-200">
      <Logo></Logo>
    </el-aside>
  </div>
</template>

<style scoped></style>
