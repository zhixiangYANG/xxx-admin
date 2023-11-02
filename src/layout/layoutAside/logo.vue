<script setup lang="ts">
import { useLayoutConfigStore } from '@/stores/layoutConfig';
const layouConfig = useLayoutConfigStore()

</script>

<template>
 <div class="layout-logo">
  <img class="layout-logo-img" src="@/assets/logo.png" alt="">
  <span v-if="!layouConfig.isCollapse">{{layouConfig.isCollapse?'':layouConfig.globalTitle}}</span>
 </div>
</template>

<style></style>
