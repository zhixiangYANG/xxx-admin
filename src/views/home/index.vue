<template>
  <StatisticsBlock></StatisticsBlock>
</template>

<script setup lang="ts" name="Home">
import { defineAsyncComponent } from 'vue';
const StatisticsBlock = defineAsyncComponent(() => import('./components/statisticsBlock.vue'))
</script>

<style scoped></style>