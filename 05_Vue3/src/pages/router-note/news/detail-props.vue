<template>
  <div class="container">
    <p>id: {{ id }}</p>
    <p>title: {{ title }}</p>
    <button @click="onBack">返回</button>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
defineProps(["id", "title"]);

const onBack = () => {
  router.back();
};
</script>
