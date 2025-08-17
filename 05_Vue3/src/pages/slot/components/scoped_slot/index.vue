<template>
  <div class="son-container">
    <h2 class="title">{{ title }}</h2>
    <slot :hobbyList="hobbyList" x="111" y="222"></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const props = defineProps(["title"]);
const hobbyList = ref([
  { id: 1, name: "电影" },
  { id: 2, name: "音乐" },
  { id: 3, name: "篮球" },
]);
</script>

<style lang="scss" scoped>
.foot {
  margin-top: 20px;
  color: #8c8c8c;
}
</style>
