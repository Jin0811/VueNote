<template>
  <div class="child">
    <h2>子组件2</h2>
    <div class="space"></div>
    <button @click="handleTest">触发test事件</button>
  </div>
</template>

<script setup>
/**
 * defineEmits用于定义父组件传递给子组件的自定义事件，无需引入
 * 被defineEmits定义的事件，一律视为自定义事件
 * 不被defineEmits定义的事件，一律视为原生dom事件
 *
 * <ChildTwo @test="handler3" @click="handler4" />
 * vue3默认情况下，test和click都是原生dom事件
 * 假如编写 const emit = defineEmits(["test", "click"]);
 * 则test和click都为自定义事件
 */
const emit = defineEmits(["test"]);

// 点击按钮，触发test事件，给父组件传递数据
const handleTest = () => {
  emit("test", 1, 2, 3);
};
</script>
