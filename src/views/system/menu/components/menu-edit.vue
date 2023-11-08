<template>
  <el-drawer v-model="visible" title="新增菜单" :before-close="close" direction="rtl" size="650px">
    <el-form ref="formRef" :model="formData" label-width="85px" label-position="right" status-icon label-suffix=":">
      <el-form-item label="上级菜单" prop="parentId"></el-form-item>
      <el-form-item label="菜单类型" prop="type">
        <el-radio v-model="formData.type" label="1">菜单</el-radio>
        <el-radio v-model="formData.type" label="2">按钮</el-radio>
      </el-form-item>
      <el-form-item label="菜单名称" prop="meta.title" :rules="{ required: true, message: '请输入菜单名称', trigger: 'blur' }">
        <el-input v-model="formData.meta.title" placeholder="请输入菜单名称" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="权限标识" prop="code">
        <el-input v-model="formData.code" placeholder="请输入权限标识" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="路由地址" prop="path">
        <el-input v-model="formData.path" placeholder="请输入权限标识" maxlength="200" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="路由名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入权限标识" maxlength="400" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="菜单图标" prop="meta.icon">
        <el-input v-model="formData.meta.icon" placeholder="请输入图标名 ele- 开头" maxlength="100" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="重定向" prop="redirect">
        <el-input v-model="formData.redirect" placeholder="请输入重定向地址" maxlength="200" show-word-limit></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="是否隐藏" prop="meta.hidden"
            :rules="{ required: true, message: '是否隐藏为必选项', trigger: 'change' }">
            <el-radio-group v-model="formData.meta.hidden">
              <el-radio :label="false">不隐藏</el-radio>
              <el-radio :label="true">隐藏</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否缓存" prop="meta.cache"
            :rules="{ required: true, message: '是否缓存为必选项', trigger: 'change' }">
            <el-radio-group v-model="formData.meta.cache">
              <el-radio :label="false">不缓存</el-radio>
              <el-radio :label="true">缓存</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="显示导航" prop="meta.isBreadcrumd">
        <el-radio-group v-model="formData.meta.isBreadcrumd">
          <el-radio :label="false">不显示</el-radio>
          <el-radio :label="true">显示</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-row>
        <el-col :span="8">
          <el-form-item label="是否外链" prop="isLink">
            <el-radio-group v-model="formData.isLink" @change="changeIsLink">
              <el-radio :label="false">否</el-radio>
              <el-radio :label="true">是</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="16" v-if="formData.isLink">
          <el-form-item label="是否外链" prop="isLink">
            <el-input v-model="formData.meta.linkTo" placeholder="请输入外链地址" maxlength="300" show-word-limit></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="排序" prop="sort">
        <el-input-number v-model="formData.sort" :min="1" :max="10000" style="width: 300px;"></el-input-number>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="formData.remark"  type="textarea" placeholder="请输入备注信息" maxlength="100"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-row justify="center">
        <el-button>取消</el-button>
        <el-button type="primary">保存</el-button>
      </el-row>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';
const visible = ref(true)

const state = reactive({
  formData: {
    meta: {}
  } as SysMenuType
})

const { formData } = { ...toRefs(state) }

// 关闭窗口前触发
function close() {
  visible.value = false
}

function changeIsLink(val: boolean) {
  if (!val) state.formData.meta.linkTo = '';
}
</script>

<style scoped></style>