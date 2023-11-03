<template>
  <div>
    {{ state.statisticsData }}
  </div>
</template>

<script setup lang="ts">
import { getStatisticsData } from '@/api/home';
import { onMounted, reactive } from 'vue';

const state = reactive({
  loading: false,
  statisticsData: {
    totalOrderNum: 0,
    totalSaleMoney: 0,
    totalReturnedMoney: 0,
    totalIncomeMoney: 0
  }
})

onMounted(() => {
  loadStatisticsData()
})

async function loadStatisticsData() {
  try {
    state.loading = true
    const { data } = await getStatisticsData()
    state.statisticsData = data
  } catch (error) {

  } finally {
    state.loading = false
  }

}
</script>

<style scoped>

</style>