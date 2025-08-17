<template>
  <div class="son-container">
    <h2 class="title">子组件2</h2>
    <p>子组件1 给 子组件2 的玩具：{{ toy }}</p>
  </div>
</template>

<script lang="ts" setup>
import emitter from "@/utils/emitter";
import { onMounted, onUnmounted, ref } from "vue";

const toy = ref("");

emitter.on("sendToy", (value) => {
  toy.value = value as string;
});

onUnmounted(() => {
  emitter.off("sendToy");
});
</script>
