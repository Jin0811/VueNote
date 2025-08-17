<template>
  <div class="container">
    <h2 class="title">props</h2>
    <Child :list="personList" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import type { PersonInterface } from "@/types";
import Child from "@/components/12_child.vue";

defineOptions({ name: "Props" });

const personList = reactive<PersonInterface[]>([
  { id: "1", name: "张三", age: 18 },
  { id: "2", name: "李四", age: 20 },
  { id: "3", name: "王五", age: 22, school: "中心小学" },
]);
</script>
