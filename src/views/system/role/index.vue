<template>
  <div>
    角色管理
  </div>
</template>

<script setup lang="ts">
import { getPageList } from '@/api/system/role';
import { nextTick, onMounted, reactive, toRefs } from 'vue';
const state = reactive({
  loading: false,
  page: {
    current: 1,
    size: 20,
    total: 0
  } as PageType,
  query: {
    name: ''
  } as SysRoleQuery,
  tableList: [] as SysRoleType
})

onMounted(() => {
  queryData()
})

const { loading, page, query, tableList } = { ...toRefs(state) }

// 查询列表数据
async function queryData() {
  try {
    state.loading = true
    const { current, size } = state.page
    const { data } = await getPageList(state.query, current, size)
    state.tableList = []
    nextTick(() => {
      state.page.total = data.total
      state.tableList = data.records
    })
  } catch (e) { } finally { state.loading = false }
}
</script>

<style scoped></style>