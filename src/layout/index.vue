<script setup lang="ts">
// 同步导入
// import LayoutAside from './layoutAside/index.vue'
// import LayoutHeader from './layoutHeader/index.vue'
// import LayoutMain from './layoutMain/index.vue'

// 异步导入
import { defineAsyncComponent } from 'vue';
const LayoutAside = defineAsyncComponent(() => import('./layoutAside/index.vue'))
const LayoutHeader = defineAsyncComponent(() => import('./layoutHeader/index.vue'))
const LayoutMain = defineAsyncComponent(() => import('./layoutMain/index.vue'))


</script>

<template>
  <el-container class="layout-container">
    <LayoutAside></LayoutAside>
    <el-container direction="vertical">
      <LayoutHeader></LayoutHeader>
      <LayoutMain></LayoutMain>
    </el-container>
  </el-container>
</template>

<style scoped></style>
