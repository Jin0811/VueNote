<template>
  <div class="son-container">
    <h2 class="title">子组件1</h2>
    <p>子组件1的玩具：{{ toy }}</p>
    <button @click="handleSend">把玩具给子组件2</button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import emitter from "@/utils/emitter";

const toy = ref("奥特曼");

const handleSend = () => {
  emitter.emit("sendToy", toy.value);
};
</script>
