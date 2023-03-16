<template>
  <div class="grandSon">
    <h3>GrandSon 组件</h3>
    <div>Father组件传递的非响应式数据 count {{ count }}</div>
    <div>Father组件传递的响应式数据 person {{ person.name }} - {{ person.age }}</div>
  </div>
</template>

<script>
export default {
  name: "GrandSon",
  inject: ["count", "person"],
  data() {
    return {}
  },
  methods: {},
}
</script>