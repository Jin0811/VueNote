<template>
  <div class="container">
    <h2 class="title">父组件</h2>
    <Son />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Son from "./son.vue";
defineOptions({ name: "Template" });
</script>
