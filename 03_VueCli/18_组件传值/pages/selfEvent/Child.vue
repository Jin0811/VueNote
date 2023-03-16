<template>
  <div class="child">
    <h3>Child 组件</h3>
    <div>父组件传递给子组件的数据为：{{ name }} - {{ age }}</div>
    <el-button size="small" type="primary" @click="handleSendDataToFather">传递数据给父组件</el-button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    age: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    handleSendDataToFather(){
      this.$emit("getData", 123); // 触发自定义事件
    },
    unbind(){
      // this.$off("eventName1"); // 解绑eventName1事件
      // this.$off(['eventName1', 'eventName2']); // 解绑eventName1、eventName2事件
      // this.$off(); // 解绑全部事件
    }
  },
}
</script>