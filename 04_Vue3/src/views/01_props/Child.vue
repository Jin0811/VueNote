<template>
  <div class="child">
    <h2>子组件</h2>

    <!-- props在模板中使用时可以省略 -->
    <h3>子组件接收到的数据：{{ props.info }} -- {{ props.money }}</h3>

    <h3>子组件接收到的数据：{{ info }} -- {{ money }}</h3>
  </div>
</template>

<script setup>
/**
 * defineProps用于定义父组件传递的props，无需引入
 * props在模板当中可以省略，在setup当中不可省略
 */

// 数组写法
// const props = defineProps(["info", "money"]);

// 对象写法
const props = defineProps({
  info: {
    type: String,
    required: true,
  },
  money: {
    type: Number,
    required: true,
  },
});

// 在setup当中使用时，props不可省略
console.log(props.info, props.money);
</script>
