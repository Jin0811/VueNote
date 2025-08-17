<template>
  <div class="container">
    <h2 class="title">父组件</h2>
    
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import Child from "@/components/21_child.vue";
import { Suspense } from "vue";
defineOptions({ name: "Suspense" });
</script>
