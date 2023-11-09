<template>
  <div class="layout-padding">
    <el-form :inline="true" :model="query">
      <el-form-item label="菜单名称">
        <el-input v-model="query.keyword" placeholder="请输入菜单名称" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="ele-Search" @click="queryData()">查询</el-button>
        <el-button type="success" icon="ele-Plus" @click="handleAdd()">新增菜单</el-button>
      </el-form-item>
    </el-form>

    <el-table ref="tableListRef" :data="tableList" stripe style="width: 100%" border v-loading="loading" row-key="id"
      @row-click="toggleRow">
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
      <el-table-column label="操作" align="center" width="240">
        <template #default="{ row }">
          <el-button @click.stop="handleAdd(row.id)" v-if="row.type != 2" icon="ele-Plus" type="primary"
            link>新增下级</el-button>
          <el-button @click.stop="handleEdit(row)" icon="ele-Edit" type="warning" link>修改</el-button>
          <el-popconfirm width="auto" :title="`确定永久删除【${row.meta?.title}】吗？`" @confirm="handleDelete(row.id)">
            <template #reference>
              <el-button @click.stop icon="ele-Delete" type="danger" link>删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <MenuEdit ref="editRef" @refresh="queryData"></MenuEdit>
  </div>
</template>

<script setup lang="ts" name="SystemMenu">
import { deleteById, getList } from '@/api/system/menu';
import { notify } from '@/utils/element';
import { defineAsyncComponent, onMounted, reactive, ref, toRefs } from 'vue';

const MenuEdit = defineAsyncComponent(() => import('@/views/system/menu/components/menu-edit.vue'))

// 列表ref
const tableListRef = ref()

// 修改ref
const editRef = ref()
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

// 展开收起行
function toggleRow(row: SysMenuType) {
  tableListRef.value.toggleRowExpansion(row)
}

function handleAdd(parentId?: string) {
  editRef.value.open('add', '新增', { parentId })
}

function handleEdit(row: SysMenuType) {

}

async function handleDelete(id: string) {
  try {
    state.loading = true
    await deleteById(id)
    notify('删除成功！', { type: 'success' })
    queryData()
  } catch (error) { }
  finally {
    state.loading = false
  }
}
</script>

<style scoped></style>