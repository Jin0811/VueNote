<template>
  <div class="parent">
    <h1>父组件</h1>
    <p>money1 -- {{ money1 }}</p>
    <p>money2 -- {{ money2 }}</p>
    <p>money3 -- {{ money3 }}</p>
    <p>pageNo -- {{ pageInfo.pageNo }}</p>
    <p>pageSize -- {{ pageInfo.pageSize }}</p>
    <div class="space"></div>

    <!-- 通过props和自定义事件来实现父子通信 -->
    <ChildOne :modelValue="money1" @update:modelValue="handler" />
    <div class="space"></div>

    <!--
      通过v-model来实现父子通信
      在组件上使用v-model，相当于在组件上绑定 modelValue 属性和 update:modelValue 事件

      这两个本质上是一样的
      <ChildOne :modelValue="money1" @update:modelValue="handler" />
      <ChildOne v-model="money2" />
    -->
    <ChildOne v-model="money2" />

    <!-- 使用多个v-model -->
    <ChildTwo v-model:pageNo="pageInfo.pageNo" v-model:pageSize="pageInfo.pageSize" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChildOne from "./Child1.vue";
import ChildTwo from "./Child2.vue";

const money1 = ref(100);
const money2 = ref(200);
const handler = (data) => {
  money1.value = data;
};

const pageInfo = ref({ pageNo: 1, pageSize: 10 });
</script>
