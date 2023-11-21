<template>
  <div class="child">
    <h2>子组件2</h2>
    <button @click="handler1">触发事件</button>
  </div>
</template>

<script setup>
import $bus from "./bus";

const handler1 = () => {
  $bus.emit("testEventName", { a: 1, b: 2 });
};
</script>
