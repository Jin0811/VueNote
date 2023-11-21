<template>
  <div class="child">
    <h2>子组件1</h2>
    <button @click="handler($parent)">调用父组件方法</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("张三");

const sayName = () => {
  console.log("名字为", name.value);
};

const handler = ($parent) => {
  $parent.funForChild();
};

defineExpose({
  name,
  sayName,
});
</script>
