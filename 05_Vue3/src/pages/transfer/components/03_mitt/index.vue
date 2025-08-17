<template>
  <div class="container">
    <h2 class="title">父组件</h2>
    <Son1 />
    <Son2 />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Son1 from "./son1.vue";
import Son2 from "./son2.vue";
defineOptions({ name: "Mitt" });
</script>
