<template>
  <div class="container">
    <p>{{ params }}</p>
    <button @click="onBack">返回</button>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const { params } = toRefs(route);
console.log(route);
console.log(params);

const onBack = () => {
  router.back();
};
</script>
