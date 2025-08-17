<template>
  <div class="container">
    <h2 class="title">setup语法糖</h2>

    <p>{{ name }}</p>
    <button @click="changeName">修改name</button>

    <p>{{ age }}</p>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "SetupSugar" });

let name = "张三";
let age = 18;

const changeName = () => {
  name = "李四";
};
const changeAge = () => {
  age = age + 1;
};
</script>
