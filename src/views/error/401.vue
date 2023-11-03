<template>
  <div class="error-container layout-padding flex-column-center">
   <img class="error-img" src="@/assets/401.svg" />
   <div class="error-wrap">
     <div>您没有操作权限，请联系管理员！</div>
     <div>联系方式：https://www.mengxuegu.com</div>
     <el-button round type="primary" class="error-btn" @click="router.push('/login')">重新登录</el-button>
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