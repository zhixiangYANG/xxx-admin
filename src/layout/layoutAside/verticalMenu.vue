<template>
  <el-scrollbar>
    <el-menu router :default-active="route.path" background-color="transparent" :collapse="isCollapse">
      <el-menu-item index="/home">
        <SvgIcon name="ele-HomeFilled"></SvgIcon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="/system">
        <template #title>
          <SvgIcon name="ele-Setting"></SvgIcon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/system/menu">
          <template #title>
            <SvgIcon name="ele-Menu"></SvgIcon>
            <span>菜单管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/system/role">
          <template #title>
            <SvgIcon name="ele-IceCream"></SvgIcon>
            <span>角色管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/system/user">
          <template #title>
            <SvgIcon name="ele-User"></SvgIcon>
            <span>用户管理</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/goods">
        <template #title>
          <SvgIcon name="ele-Goods"></SvgIcon>
          <span>商品管理</span>
        </template>
        <el-menu-item index="/goods/list">
          <template #title>
            <SvgIcon name="ele-GoodsFilled"></SvgIcon>
            <span>商品列表</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/goods/category">
          <template #title>
            <SvgIcon name="ele-Operation"></SvgIcon>
            <span>商品分类</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/mengxuegu">
        <SvgIcon name="ele-Link"></SvgIcon>
        <span>官网</span>
      </el-menu-item>
      <el-menu-item index="/401">
        <SvgIcon name="ele-Link"></SvgIcon>
        <span>401</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { useLayoutConfigStore } from '@/stores/layoutConfig';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
const route = useRoute()
const layouConfig = useLayoutConfigStore()
const { isCollapse } = storeToRefs(layouConfig)
</script>

<style scoped></style>