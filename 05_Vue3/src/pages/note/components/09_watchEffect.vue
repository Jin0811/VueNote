<template>
  <div class="container">
    <h2 class="title">watchEffect</h2>
    <p>水温：{{ temperature }}度</p>
    <p>水位：{{ height }}CM</p>
    <button @click="changeTemperature">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script lang="ts" setup>
import { watch, watchEffect, ref } from "vue";

defineOptions({ name: "WatchEffect" });

/**
 * watchEffect 立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时，重新执行此函数
 *
 * watchEffect的执行时机：
 * 1、组件创建完成就会立即执行一次
 * 2、后续函数内部中的响应式数据发生了变化，就执行
 *
 * watch和watchEffect的对比
 * 1、都能监听响应式数据的变化，不同的是监听数据变化的方式不同
 * 2、watch需要明确指出监视的数据
 * 3、watchEffect不用明确指出监视的数据，函数中用到哪些属性，就监视哪些属性
 */

const temperature = ref(10);
const height = ref(0);

const changeTemperature = () => {
  temperature.value = temperature.value + 10;
};
const changeHeight = () => {
  height.value = height.value + 10;
};

// 需求：当水温>=60或者水位>=80时，则发出警告

// 使用watch
// watch([temperature, height], (newVal) => {
//   const [temperatureVal, heightVal] = newVal;
//   if (temperatureVal >= 60 || heightVal >= 80) {
//     console.warn("警告");
//   }
// });

// 使用watchEffect
watchEffect(() => {
  console.log("watchEffect执行了");
  // if (temperature.value >= 60) {
  //   console.warn("水温-警告");
  // }
  // if (height.value >= 80) {
  //   console.warn("水位-警告");
  // }

  // if (temperature.value >= 60 || height.value >= 80) {
  //   console.warn("警告");
  // }

  if (!isNaN(temperature.value) && !isNaN(height.value) && (temperature.value >= 60 || height.value >= 80)) {
    console.warn("警告");
  }
});
</script>
