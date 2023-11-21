<template>
  <div class="parent">
    <h1>父组件</h1>
    <button @click="handler">调用子组件ref</button>
    <div class="space"></div>

    <ChildOne ref="childOneRef" />
  </div>
</template>

<script setup>
/**
 * ref 给子组件绑定ref，可以获取子组件的实例
 * $parent 访问父组件实例
 *
 * defineExpose用于将自身的变量和方法暴露出去，使得外部可以通过ref的形式调用
 * 默认是无法通过ref的形式调用任何变量和方法的
 */
import { ref } from "vue";
import ChildOne from "./Child1.vue";

const childOneRef = ref();

const handler = () => {
  console.log(childOneRef.value.name); // 获取子组件数据
  childOneRef.value.sayName(); // 调用子组件方法
};

const funForChild = () => {
  console.log("父组件的方法");
};

defineExpose({
  funForChild,
});
</script>
