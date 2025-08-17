<template>
  <div class="container">
    <h2 class="title">模板</h2>

    <div class="son-container">
      <h3>{{ msg1 }}</h3>
      <input type="text" v-model="msg1">
    </div>

    <div class="son-container">
      <h3>{{ msg2 }}</h3>
      <input type="text" v-model="msg2">
    </div>

    <div class="son-container">
      <h3>{{ msg3 }}</h3>
      <input type="text" v-model="msg3">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, customRef } from "vue";
import useMsgRef from "@/hooks/useMsgRef"; 
defineOptions({ name: "CustomRef" });

// 使用vue提供的默认ref定义响应式数据，数据一变，页面就更新
const msg1 = ref("第一个消息");

// 使用vue提供的customRef定义响应式数据
let initValue = "第二个消息";
let timer:number;
const msg2 = customRef((track, trigger) => {
  return {
    // get何时调用？—— msg2被读取时
    get() {
      track(); // 依赖收集
      return initValue;
    },
    // set何时调用？—— msg2被修改时
    set(value) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log("set", value);
        initValue = value;
        trigger(); // 触发更新
      }, 1000);
    },
  };
});

// 使用封装之后的自定义hook来实现
const { msg: msg3 }  = useMsgRef("你好", 1000);
</script>
