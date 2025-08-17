<template>
  <div class="son-container">
    <h2 class="title">{{ title }}</h2>
    <slot>默认内容</slot>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps(["title"]);
</script>
