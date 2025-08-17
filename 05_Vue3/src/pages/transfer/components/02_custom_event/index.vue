<template>
  <div class="container">
    <h2 class="title">父组件</h2>
    <p>子给父的玩具：{{ toy }}</p>
    <Son @sendToy="onGetToy" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Son from "./son.vue";
defineOptions({ name: "CustomEvent" });

const toy = ref("");

const onGetToy = (value: string) => {
  toy.value = value;
};
</script>
