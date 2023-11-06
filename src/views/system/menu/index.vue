<template>
  <div>
    <el-table ref="tableListRef" :data="tableList" stripe style="width: 100%" border v-loading="loading" row-key="id">
      <el-table-column prop="meta.title" label="菜单名称" header-align="center" align="left">
        <template #default="{ row }">
          <SvgIcon :name="row.meta?.icon || ''"></SvgIcon>
          <span class="ml10">{{ row.meta?.title }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="path" label="路由地址" header-align="center" align="left" show-overflow-tooltip />
      <el-table-column prop="component" label="组件名称" header-align="center" align="left" show-overflow-tooltip />
      <el-table-column prop="code" label="权限标识" header-align="center" align="left" show-overflow-tooltip />
      <el-table-column prop="type" label="类型" align="center">
        <template #default="{ row }">
          <el-tag effect="plain" :type="row.type == 1 ? '' : 'success'">{{ row.type == '1' ? '菜单' : '按钮' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" align="center" />
      <el-table-column label="操作" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts" name="SystemMenu">
import { getList } from '@/api/system/menu';
import { onMounted, reactive, toRefs } from 'vue';

const state = reactive({
  loading: false,
  query: {
    keyword: '',
  } as SysMenuQuery,
  tableList: [] as SysMenuType[]
})

const { loading, query, tableList } = { ...toRefs(state) }

onMounted(() => {
  queryData()
})

async function queryData() {
  try {
    state.loading = true
    const { data } = await getList(state.query)
    console.log(data)
    state.tableList = data
  } catch (error) {
  } finally {
    state.loading = false
  }
}
</script>

<style scoped></style>