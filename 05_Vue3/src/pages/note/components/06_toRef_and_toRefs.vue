<template>
  <div class="container">
    <h2 class="title">toRef And toRefs</h2>
    <p>name: {{ name }}</p>
    <p>age: {{ age }}</p>
    <p>school: {{ school }}</p>
    <p>person: {{ person }}</p>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
    <button @click="changeSchool">修改school</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, toRef } from "vue";

defineOptions({ name: "ToRefAndToRefs" });

/**
 * toRef 类似于toRefs，用于转换单个属性
 * toRefs 可以批量将reactive定义的响应式对象转换为key-value的对象，value是一个ref对象，可以方便地进行解构
 *
 * 注意：
 * 1、使用toRef和toRefs获取到的ref，在修改ref时，原先的reactive响应式数据也会改变
 * 2、对reactive定义的相应数据进行解构时，基本数据类型会丢失响应式，对象数据类型不会丢失响应式，但是也建议使用toRefs
 */

const person = reactive({
  name: "张三",
  age: 18,
  school: {
    address: "实验路",
  },
});

// 直接解构，这样得到的name和age是没有响应式的，修改name和age不会影响person对象
// const { name, age } = person;

// 使用toRef
// const name = toRef(person, "name");
// const age = toRef(person, "age");

// 使用toRefs
const { name, age } = toRefs(person);

const changeName = () => {
  name.value = name.value + "#";
};
const changeAge = () => {
  age.value = age.value + 1;
};

// 对象数据类型在直接解构时，不会丢失响应式，但是也建议使用toRefs
const { school } = person;
const changeSchool = () => {
  school.address = school.address + "#";
};
</script>
