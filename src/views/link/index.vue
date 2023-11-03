<template>
  <div class="link-container layout-padding flex-column-center">
    <img class="link-img" src="@/assets/link.svg" />
    <div class="link-wrap">
      <h3>即将跳转到外部网站[{{ state.title }}]</h3>
      <div>您即将访问的链接不属于 {{ hostname }}，请关注您的账号安全！</div>
      <div>{{ state.link }}</div>
      <el-button round class="link-btn" @click="handleOpenPage">继续前往</el-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="RouterViewLink">
import { validateURL } from '@/utils/validate';
import { reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const hostname = window.location.hostname

const state = reactive({
  title: '',
  link: ''
})
watch(() => route.path, () => {
  state.title = route.meta?.title || '外链';
  state.link = route.meta?.linkTo || ''
}, { immediate: true })

function handleOpenPage() {
  const { origin, pathname } = window.location
  if (validateURL(state.link)) window.open(state.link)
  else window.open(`${origin}${state.link}`)
}
</script>

<style scoped lang="scss">
.link-container {
  .link-img {
    width: 200px;
  }

  .link-wrap {
    width: 500px;
    border: 1px solid var(--mxg-border-color-light);
    border-radius: 10px;
    padding: 20px;
    line-height: 30px;
    font-size: 15px;
    margin-top: 20px;

    .link-btn {
      float: right;
    }
  }
}
</style>