<template>
  <div class="container">
    <h2 class="title">父组件</h2>
    <p>父组件的车：{{ car }}</p>
    <p>子给父的玩具：{{ toy }}</p>
    <Son :car="car" :sendToy="onGetToy" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Son from "./son.vue";
defineOptions({ name: "Props" });

const car = ref("奔驰");
const toy = ref("");

const onGetToy = (value: string) => {
  toy.value = value;
};
</script>
