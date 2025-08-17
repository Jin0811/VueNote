<template>
  <div class="son-container">
    <h2 class="title">子组件</h2>
		<p>当前求和为：{{ sum }}</p>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';

const sum = ref(0);

// 为什么这里可以直接使用await，而不用写async？
// 在Vue3的<script setup>语法糖中，可以直接使用await而无需声明async，这是因为Vue编译器在背后做了特殊处理
// Vue编译器会自动检测<script setup>中的顶层await，将代码转换为带有async setup()的普通组件选项
// 处理之后，该组件会变成一个异步组件，需要搭配Suspense使用

try {
	const res = await axios.get("https://www.baidu.com");
	console.log(res?.data.content);
} catch (error) {
	console.log(error);
}
</script>
