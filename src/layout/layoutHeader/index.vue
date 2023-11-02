<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const Breadcrumb = defineAsyncComponent(() => import('@/layout/layoutHeader/breadcrumb.vue'));
const UserDropdown = defineAsyncComponent(() => import('@/layout/layoutHeader/userDropdown.vue'));

</script>

<template>
  <el-header class="layout-header">
    <div class="layout-header-index">
      <Breadcrumb></Breadcrumb>
      <UserDropdown></UserDropdown>
    </div>
  </el-header>
</template>

<style scoped></style>
