<template>
  <div class="grand-son">
    <h2>孙子组件</h2>
    <p>count -- {{ count }}</p>
    <p>person -- {{ person }}</p>

    <div class="space"></div>
    <button @click="updateCount">修改count</button>

    <div class="space"></div>
    <button @click="updatePerson">修改person</button>

    <div class="space"></div>
    <button @click="handleClick">调用funForGrandSon方法</button>
  </div>
</template>

<script setup>
import { inject } from "vue";

const count = inject("count");
const person = inject("person");
const funForGrandSon = inject("funForGrandSon");

const updateCount = () => {
  count.value = count.value + 1;
};
const updatePerson = () => {
  person.value.age++;
  person.value.name = person.value.name + "-";
};
const handleClick = () => {
  funForGrandSon();
};
</script>
