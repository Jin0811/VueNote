<template>
  <div class="container">
    <h2 class="title">Ref注意点</h2>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

defineOptions({ name: "RefAttention" });

const reactiveObj = reactive({
  a: 1,
  b: 2,
  c: ref(3),
});
const refObj = ref({
  a: 11,
  b: 22,
  c: ref(33),
});
const d = ref(4);

console.log(reactiveObj.a); // 1
console.log(reactiveObj.b); // 2
console.log(reactiveObj.c); // 3
console.log(reactiveObj.c.value); // undefined

console.log(refObj.value.a); // 11
console.log(refObj.value.b); // 22
console.log(refObj.value.c); // 33
console.log(refObj.value.c.value); // undefined

console.log(d.value); // 4

// 为什么有的ref需要.value，有的ref不需要.value？
// 在响应式对象中的ref，在读取时，会自动解包，无需添加.value
</script>
