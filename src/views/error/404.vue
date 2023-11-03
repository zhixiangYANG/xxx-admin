<template>
   <div class="error-container layout-padding flex-column-center">
    <img class="error-img" src="@/assets/404.svg" />
    <div class="error-wrap">
      <div>您所访问的页面不存在！</div>
      <div>请检查您输入的网址是否正确，或点击下面的按钮返回首页。</div>
      <el-button round type="primary" class="error-btn" @click="router.push('/')">返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style scoped lang="scss">
.error-container {
  .error-img {
    width: 200px;
  }

  .error-wrap {
    width: 500px;
    border: 1px solid var(--mxg-border-color-light);
    border-radius: 10px;
    padding: 20px;
    line-height: 30px;
    font-size: 15px;
    margin-top: 20px;

    .error-btn {
      float: right;
    }
  }
}
</style>