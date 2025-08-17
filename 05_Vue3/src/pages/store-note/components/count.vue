<template>
  <div class="container">
    <p class="title">求和</p>
    <p>当前求和为：{{ countStore.sum }}</p>
    <select class="select-item" v-model.number="num">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="onAdd">增加</button>
    <button @click="onMinus">减少</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCountStore } from "@/store/count.ts";

const num = ref(1);

/**
 * countStore.sum是一个ref实例对象，但是在JS和模板当中都无需添加.value
 * 因为countStore是一个reactive实例对象，其中的ref会自动解构
 */

const countStore = useCountStore();

// 监听
countStore.$subscribe((mutate, state) => {
  console.log("数据变化", mutate, state);
});

// 增加
const onAdd = () => {
  // 第一种方式：直接修改
  // countStore.sum = countStore.sum + num.value;

  // 第二种方式：批量修改，可以同时修改多个属性值
  // countStore.$patch({
  //   sum: countStore.sum + num.value,
  // });

  // 第三种方式：借助action进行修改，在action中可以编写一些业务逻辑
  countStore.increment(num.value);
};

// 减少
const onMinus = () => {
  countStore.sum = countStore.sum - num.value;
};
</script>

<style lang="scss" scoped>
.select-item {
  display: block;
  width: 200px;
  height: 32px;
  margin-bottom: 12px;
}
</style>
