<template>
  <div class="parent">
    <h1>父组件</h1>
    <button @click="handler1">原生dom事件</button>
    <div class="space"></div>

    <ChildOne @click="handler2" />
    <div class="space"></div>

    <ChildTwo @test="handler3" />
  </div>
</template>

<script setup>
/**
 * vue2
 * 绑定在标签上的都是原生dom事件
 * 绑定在组件上的都会被视为自定义事件，但是可以通过.native修饰符变为原生dom事件
 *
 * vue3
 * 绑定在标签上的都是原生dom事件
 * 绑定在组件上的都会被视为原生dom事件，如果想变为自定义事件，则需要在子组件当中使用defineEmits进行定义和接收
 */

import ChildOne from "./Child1.vue";
import ChildTwo from "./Child2.vue";

// button标签上的原生dom事件
const handler1 = (event) => {
  console.log(event);
};
// 组件上的原生dom事件
const handler2 = (event) => {
  console.log(event);
};
// 组件上的自定义事件
const handler3 = (a, b, c) => {
  console.log("父组件接到了数据：", a, b, c);
};
</script>
