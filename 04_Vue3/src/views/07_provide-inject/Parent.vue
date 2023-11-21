<template>
  <div class="parent">
    <h1>父组件</h1>
    <p>count -- {{ count }}</p>
    <p>person -- {{ person }}</p>

    <Child />
  </div>
</template>

<script setup>
/**
 * vue提供了provide和inject，可以实现跨层级传递数据
 */
import Child from "./Child.vue";
import { provide, ref } from "vue";

const count = ref(0);
const person = ref({ name: "张三", age: 20 });

const funForGrandSon = () => {
  console.log("Parent组件中的funForGrandSon");
};

provide("count", count);
provide("person", person);
provide("funForGrandSon", funForGrandSon);
</script>
