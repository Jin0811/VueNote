<template>
  <div class="container">
    <h2 class="title">标签的Ref属性</h2>
    <h3 ref="domRef">Dom标签</h3>
    <button @click="fun1">输出domRef</button>

    <Child ref="childRef" />
    <button @click="fun2">输出childRef</button>
    <button @click="fun3">输出Child组件的childData1</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Child from "@/components/10_child.vue";

defineOptions({ name: "RefInTag" });

/**
 * 标签的ref属性
 * 1、用在普通DOM标签上，获取的是DOM节点
 * 2、用在组件标签上，获取的是组件实例对象
 *
 * 在vue2中，父组件通过this.$refs.childRef可以获取子组件的全部内容
 * 在vue3中，父组件通过this.$refs.childRef只能获取子组件暴露的内容，未暴露的内容无法获取
 *
 * 暴露数据或方法
 * defineExpose({ text: "", fun: () => {} })
 */

// 1、用在普通DOM标签上，获取的是DOM节点
const domRef = ref();
const fun1 = () => {
  console.log(domRef.value);
};

// 2、用在组件标签上，获取的是组件实例对象
const childRef = ref();
const fun2 = () => {
  console.log(childRef.value);
};
const fun3 = () => {
  console.log(childRef.value.childData1); // 获取子组件数据
  childRef.value.childFun1(); // 调用子组件方法
};
</script>
