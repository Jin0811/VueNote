<template>
  <div class="child">
    <h2>子组件1</h2>
  </div>
</template>

<script setup>
import $bus from "./bus";
import { onMounted, onBeforeUnmount } from "vue";

// 组件挂载时，监听事件
onMounted(() => {
  $bus.on("testEventName", (data) => {
    console.log(data);
  });
});

// 组件卸载时，取消监听事件
onBeforeUnmount(() => {
  $bus.off("testEventName");
});
</script>
