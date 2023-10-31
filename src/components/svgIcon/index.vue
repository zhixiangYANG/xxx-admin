<script setup lang="ts">
import { h, resolveComponent } from 'vue';



// const render = () => {
//   return h('div', { class: 'bar', innerHTM: 'hello' })
// }


const props = withDefaults(
  defineProps<{
    name?: string,
    color?: string,
    size?: number | string
  }>(), {
  name: '',
  color: '',
  size: 18
}
)
const render = () => {
  if (props.name?.startsWith('ele-')) {
    return h(
      resolveComponent('el-icon'),
      { color: props.color, size: props.size, },
      () => h(resolveComponent(props.name)))
  } else {
    return h('i')
  }
}




</script>

<template>
  <render></render>
</template>



<style lang="scss" scoped></style>