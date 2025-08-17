<template>
  <div class="son-container">
    <p>子组件</p>
    <h3>人员列表</h3>
    <p v-for="item in list" :key="item.id">{{ item }}</p>
  </div>
</template>

<script setup lang="ts">
import type { PersonList } from "@/types";

defineOptions({ name: "Child" });

// 接收list
// defineProps(["list"])

// 接收list + 获取defineProps的返回值
// const props = defineProps(["list"]);
// console.log(props);

// 接收list + 限制类型
// defineProps<{ list: PersonList }>();

// 接收list + 限制类型 + 限制必要性 + 指定默认值
// 添加?可以将list设置未非必填
// defineProps<{ list?: PersonList }>();

// 接收list + 限制类型 + 指定默认值
withDefaults(defineProps<{ list?: PersonList }>(), {
  list: () => [{ id: "1", name: "赵六", age: 28 }],
});
</script>
