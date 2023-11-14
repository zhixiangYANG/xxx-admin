<template>
  <div class="layout-padding">
    <el-form :inline="true" :model="query">
      <el-form-item label="角色名称">
        <el-input v-model="query.name" maxlength="30" placeholder="请输入角色名称" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="ele-Search" @click="queryData()">查询</el-button>
        <el-button type="success" icon="ele-Plus" @click="handleAdd()">新增角色</el-button>
      </el-form-item>
    </el-form>
    <el-table class="w100" ref="tableListRef" v-loading="loading" :data="tableList" border stripe>
      <el-table-column type="index" width="60" align="center" label="序号"></el-table-column>
      <el-table-column align="center" prop="roleName" label="角色名称"></el-table-column>
      <el-table-column align="center" prop="roleCode" label="角色编码"></el-table-column>
      <el-table-column align="center" prop="status" label="角色状态">
        <template #default="{ row }">
          <el-tag :type="row.status ? 'success' : 'warning'">{{ row.status ? '启用' : '停用' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="remark" label="备注"></el-table-column>
      <el-table-column align="center" label="操作" width="260">
        <template #default="{ row }">
          <el-button @click.stop="handlePermission(row)" icon="ele-Check" type="primary"
            link>分配权限</el-button>
          <el-button @click.stop="handleEdit(row)" icon="ele-Edit" type="warning" link>修改</el-button>
          <el-popconfirm width="auto" :title="`确定永久删除【${row.roleName}】吗？`" @confirm="handleDelete(row.id)">
            <template #reference>
              <el-button @click.stop icon="ele-Delete" type="danger" link>删除</el-button>
            </template>
          </el-popconfirm>
        </template>

      </el-table-column>


    </el-table>
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

function handleAdd(){}

function handleDelete(id:string) {}

//编辑
function handleEdit(row:SysRoleType){

}

// 分配权限
function handlePermission(role:SysRoleType){

}


</script>

<style scoped></style>