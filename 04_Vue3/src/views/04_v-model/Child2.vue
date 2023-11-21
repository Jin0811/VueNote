<template>
  <div class="child">
    <h2>子组件2</h2>
    <button @click="handler1">修改pageNo</button>
    <div class="space"></div>
    <button @click="handler2">修改pageSize</button>
  </div>
</template>

<script setup>
const props = defineProps(["pageNo", "pageSize"]);
const emit = defineEmits(["update:pageNo", "update:pageSize"]);

const handler1 = () => {
  emit("update:pageNo", props.pageNo + 1);
};
const handler2 = () => {
  emit("update:pageSize", props.pageSize + 1);
};
</script>
