<template>
  <div>
    <!-- 使用组件 -->
    <h2>使用组件：</h2>
    <Test />

    <h2>{{ num }}</h2>
    <button @click="changeNum">修改num</button>
  </div>
</template>

<script setup>
// 引入组件
import Test from "./27_vue3当中的改变.vue";

import { ref } from "vue";

// Props
const props = defineProps({
  msg: String
});

// 自定义事件
const emit = defineEmits(["sendMsg"]);

// 定义数据
const num = ref(0);
function changeNum(){
  num.value++;
}

function dispatchEvent(){
  emit("sendMsg", "数据");
}
</script>