<template>
  <div class="son-container">
    <h2 class="title">{{ title }}</h2>
    <slot>默认内容</slot>

    <div class="foot">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps(["title"]);
</script>

<style lang="scss" scoped>
  .foot {
    margin-top: 20px;
    color: #8c8c8c;
  }
</style>