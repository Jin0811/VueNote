<template>
  <div class="container">
    <p class="title">语句</p>
    <p>语句的总数为：{{ listLength }}</p>
    <button @click="onAdd">添加一个语句</button>
    <p v-for="(item, index) in sentenceList" :key="index">{{ item }}</p>
  </div>
</template>

<script setup lang="ts">
import { useSentenceStore } from "@/store/sentence.ts";
import { storeToRefs } from "pinia";

/**
 * 当我们想访问 sentenceList 变量时，有三种方法
 *
 * 方法1-从sentenceStore上直接读取
 * sentenceStore.sentenceList
 *
 * 方法2-使用toRefs从sentenceStore当中解构
 * const { sentenceList } = toRefs(sentenceStore);
 *
 * 方法3-使用storeToRefs从sentenceStore当中解构
 * const { sentenceList } = storeToRefs(sentenceStore);
 *
 * 方法2和方法3都可以实现解构，但是方法2的代价很大，toRefs会把sentenceStore上的数据和方法，
 * 无论是否用到，都变成了ref引用，实际上我们只需要将sentenceList变成ref引用
 *
 * 方法3中使用了pinia的storeToRefs方法，只会解构我们所用到的属性，性能比较好
 */

// 选项式
// const sentenceStore = useSentenceStore();
// const { sentenceList, listLength } = storeToRefs(sentenceStore);
// const onAdd = () => {
//   sentenceStore.addItem();
// };

// 组合式写法
const sentenceStore = useSentenceStore();
const { sentenceList, listLength } = storeToRefs(sentenceStore);
const onAdd = () => {
  sentenceStore.addItem();
};
</script>
