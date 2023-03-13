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
    getData: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    handleSendDataToFather(){
      this.getData(123);
    }
  },
}
</script>