<script setup lang="ts">
import { useLayoutConfigStore } from '@/stores/layoutConfig';
import { Local } from '@/utils/storage';
import { onMounted } from 'vue';
const layoutConfig = useLayoutConfigStore()
onMounted(() => {
  // 获取localstorage中的布局配置数据
  const layoutConfigState = Local.get('layoutConfig')
  // 更新到pinia状态中去
  if (layoutConfigState) layoutConfig.updateState(layoutConfigState)
})
</script>

<template>
  <router-view></router-view>
</template>

<style></style>
