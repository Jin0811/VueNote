<template>
  <div class="child">
    <h2>子组件1</h2>
    <p>count: {{ countStore.count }}</p>
    <button @click="handler1">增加</button>
    <button @click="handler2">减少</button>
  </div>
</template>

<script setup>
import useCountStore from "@/piniaStore/modules/count";

const countStore = useCountStore();

const handler1 = () => {
  countStore.increment(1);
};
const handler2 = () => {
  countStore.subtraction(1);
};
</script>
