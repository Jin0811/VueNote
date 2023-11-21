<template>
  <div class="child">
    <h2>子组件1</h2>
    <p>{{ modelValue }}</p>
    <button @click="handler">更改金额</button>
  </div>
</template>

<script setup>
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const handler = () => {
  emit("update:modelValue", props.modelValue + 1);
};
</script>
