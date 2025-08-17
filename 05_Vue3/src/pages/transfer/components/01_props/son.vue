<template>
  <div class="son-container">
    <h2 class="title">子组件</h2>
    <p>父给子的车：{{ car }}</p>
    <p>子组件的玩具：{{ toy }}</p>
    <button @click="handleSend">把玩具给父组件</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineOptions({ name: "Props" });

const props = defineProps(["car", "sendToy"]);

const toy = ref("奥特曼");

const handleSend = () => {
  props.sendToy(toy.value);
};
</script>
