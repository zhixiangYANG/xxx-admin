<template>
  <div class="layout-header-user">
    <div class="layout-header-user-icon" @click="handleToggleFullscreen">
      <SvgIcon name="ele-FullScreen" />
    </div>
    <div class="layout-header-user-icon">
      <el-switch v-model="isDark" inline-prompt style="--el-switch-on-color: #333" active-icon="ele-Moon" inactive-icon="ele-Sunny" />
    </div>
    <el-dropdown>
      <span class="user-dropdown-link ml5">
        <el-avatar class="mr3" :size="30" icon="ele-UserFilled"></el-avatar>
        admin
        <SvgIcon class="ml3" name="ele-ArrowDown"></SvgIcon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="router.push('/')">首页</el-dropdown-item>
          <el-dropdown-item divided>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useLayoutConfigStore } from '@/stores/layoutConfig';
import { useDark, useFullscreen } from '@vueuse/core';
import { useRouter } from 'vue-router';
const router = useRouter()

const layoutConfig = useLayoutConfigStore()
// 切换全屏
const { isFullscreen, toggle: toggleFullscreen } = useFullscreen()

async function handleToggleFullscreen() {
  await toggleFullscreen()
  layoutConfig.isFullScreen = isFullscreen.value
}

// 返回值是boolean当前是否为暗黑模式，并且会将这个状态值保存到localstorage当中
const isDark = useDark({
  valueDark: 'dark',
  valueLight: '',
  initialValue: 'dark'
})
</script>

<style scoped></style>