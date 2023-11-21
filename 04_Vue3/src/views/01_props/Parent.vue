<template>
  <div class="parent">
    <h1>父组件</h1>
    <Child info="父组件给子组件" :money="money" />
  </div>
</template>

<script setup>
import Child from "./Child.vue";
import { ref } from "vue";

const money = ref(100);
</script>
