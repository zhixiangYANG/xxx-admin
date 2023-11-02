<template>
  <div class="layout-header-breadcrumb">
    <SvgIcon @click="handleChangeCollapse" :name="layoutConfig.isCollapse ? 'ele-Expand' : 'ele-Fold'"
      class="layout-header-expand-icon" />
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useLayoutConfigStore } from '@/stores/layoutConfig';
const layoutConfig = useLayoutConfigStore()
// 点解展开/收起左侧菜单
function handleChangeCollapse() {
  layoutConfig.isCollapse = !layoutConfig.isCollapse

}
</script>

<style scoped></style>