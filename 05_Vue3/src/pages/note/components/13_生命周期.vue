<template>
  <div class="container">
    <h2 class="title">生命周期函数</h2>
    <p>num的值：{{ num }}度</p>
    <button @click="changeNum">修改num</button>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from "vue";
defineOptions({ name: "LifeCycle" });

const num = ref(1);
const changeNum = () => {
  num.value = num.value + 1;
};

/**
 * vue2的生命周期
 * 创建 beforeCreate    created
 * 挂载 beforeMount     mounted
 * 更新 beforeUpdate    updated
 * 销毁 beforeDestroy   destroyed
 *
 * vue3的生命周期
 * 创建 setup
 * 挂载 onBeforeMount   onMounted
 * 更新 onBeforeUpdate  onUpdated
 * 卸载 onBeforeUnmount onUnmounted
 */

// 创建
console.log("创建-setup");

// 挂载之前
onBeforeMount(() => {
  console.log("挂载之前-onBeforeMount");
});

// 挂载
onMounted(() => {
  console.log("挂载-onMounted");
});

// 更新之前
onBeforeUpdate(() => {
  console.log("更新之前-onBeforeUpdate");
});

// 更新
onUpdated(() => {
  console.log("更新-onUpdated");
});

// 卸载之前
onBeforeUnmount(() => {
  console.log("卸载之前-onBeforeUnmount");
});

// 卸载
onUnmounted(() => {
  console.log("卸载-onUnmounted");
});
</script>
