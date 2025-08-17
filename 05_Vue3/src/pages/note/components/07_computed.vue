<template>
  <div class="container">
    <h2 class="title">computed 计算属性</h2>

    <div>
      <span>firstName: </span>
      <input type="text" v-model="firstName" />
    </div>
    <div>
      <span>lastName: </span>
      <input type="text" v-model="lastName" />
    </div>

    <p>函数1: {{ fullNameByFun() }}</p>
    <p>函数2: {{ fullNameByFun() }}</p>

    <p>计算属性1: {{ fullNameByComputed }}</p>
    <p>计算属性2: {{ fullNameByComputed }}</p>

    <button @click="onSetComputed">设置计算属性</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

defineOptions({ name: "Computed" });

const firstName = ref("张");
const lastName = ref("三");

// 函数，没有缓存，会调用多次
const fullNameByFun = () => {
  console.log("调用了函数");
  return firstName.value + "-" + lastName.value;
};

// 计算属性，有缓存，只会调用一次
// 计算属性可以有get和set，一般情况下，我们只需要用到get，可以进行简写（推荐）
// const fullNameByComputed = computed(() => {
//   console.log("调用了计算属性");
//   return firstName.value + "-" + lastName.value;
// });

// 计算属性的get和set
let fullNameByComputed = computed({
  get() {
    console.log("调用了计算属性get");
    return firstName.value + "-" + lastName.value;
  },
  set(data) {
    console.log("调用了计算属性的set");
    const [str1, str2] = data.split("-");
    firstName.value = str1;
    lastName.value = str2;
  },
});

// 点击按钮，设置计算属性的值
const onSetComputed = () => {
  fullNameByComputed.value = "李-四";
};
</script>
