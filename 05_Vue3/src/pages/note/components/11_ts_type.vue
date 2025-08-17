<template>
  <div class="container">
    <h2 class="title">TS中的接口、泛型、自定义类型</h2>
  </div>
</template>

<script lang="ts" setup>
import type { PersonInterface, PersonList } from "@/types";
defineOptions({ name: "TSType" });

const person: PersonInterface = { id: "1", name: "张三", age: 18 };
const personList1: PersonList = [
  { id: "1", name: "张三1", age: 18 },
  { id: "2", name: "李四1", age: 20 },
  { id: "3", name: "王五1", age: 22 },
];
const personList2: PersonInterface[] = [
  { id: "1", name: "张三2", age: 18 },
  { id: "2", name: "李四2", age: 20 },
  { id: "3", name: "王五2", age: 22 },
];
</script>
