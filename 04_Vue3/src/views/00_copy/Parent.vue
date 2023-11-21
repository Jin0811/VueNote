<template>
  <div class="parent">
    <h1>父组件</h1>
    <div class="space"></div>

    <ChildOne />
    <div class="space"></div>

    <ChildTwo />
  </div>
</template>

<script setup>
import ChildOne from "./Child1.vue";
import ChildTwo from "./Child2.vue";
</script>
