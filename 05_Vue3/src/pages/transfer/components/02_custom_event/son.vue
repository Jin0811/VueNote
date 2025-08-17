<template>
  <div class="son-container">
    <h2 class="title">子组件</h2>
    <p>子组件的玩具：{{ toy }}</p>
    <button @click="handleSend">把玩具给父组件</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// 声明事件
const emit = defineEmits(["sendToy"]);

const toy = ref("奥特曼");

const handleSend = () => {
  emit("sendToy", toy.value);
};
</script>
