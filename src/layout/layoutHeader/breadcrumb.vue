<template>
  <div class="layout-header-breadcrumb">
    <SvgIcon @click="handleChangeCollapse" :name="layoutConfig.isCollapse ? 'ele-Expand' : 'ele-Fold'"
      class="layout-header-expand-icon" />
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
        <span class="flex-center" v-if="index == breadcrumbList.length - 1">
          <SvgIcon v-if="item.meta.icon" :name="item.meta.icon" :size="14"></SvgIcon>
          {{ item.meta.title }}
        </span>
        <a v-else class="flex-center" @click.prevent="hanldeLink(item)">
          <SvgIcon v-if="item.meta.icon" :name="item.meta.icon" :size="14"></SvgIcon>
          {{ item.meta.title }}
        </a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useLayoutConfigStore } from '@/stores/layoutConfig';
import { onMounted, ref } from 'vue';
import type { RouteLocationNormalized, RouteRecordNormalized } from 'vue-router';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const layoutConfig = useLayoutConfigStore()

// 面包屑渲染数据
const breadcrumbList = ref<RouteRecordNormalized[]>([])

onMounted(() => {
  getBreadcrumb(route)
})

onBeforeRouteUpdate((to) => {
  getBreadcrumb(to)
})

// 点解展开/收起左侧菜单
function handleChangeCollapse() {
  layoutConfig.isCollapse = !layoutConfig.isCollapse
}

// 获取当前路由的面包屑，to:目标路由对象
function getBreadcrumb(to: RouteLocationNormalized) {
  //isBreadcrumb不为false则显示菜单标题，(true或没有值则显示)且meta.title要有值才显示
  const matched = to.matched.filter(item => item.meta && item.meta.title && item.meta.isBreadcrumbs !== false)
  breadcrumbList.value = matched
}

function hanldeLink(_route: RouteRecordNormalized) {
  console.log(_route)
  const { redirect, path } = _route
  if (redirect) router.push(<string>redirect)
  else router.push(path)
}
</script>

<style scoped></style>