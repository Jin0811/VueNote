<template>
  <div class="son-container">
    <p>子组件</p>
    <p>childData1 {{ childData1 }}</p>
    <button @click="childFun1">输入childData1</button>
    <p>childData2 {{ childData2 }}</p>
    <button @click="childFun2">输入childData2</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineOptions({ name: "Child" });

const childData1 = ref(11);
const childData2 = ref(22);

const childFun1 = () => {
  console.log(childData1.value);
};
const childFun2 = () => {
  console.log(childData2.value);
};

defineExpose({ childData1, childFun1 });
</script>
