<template>
  <div class="grandSon">
    <h3>GrandSon 组件</h3>
    <div>GrandSon 接受到的参数：{{ $attrs.age }}</div>
    <el-button size="small" type="primary" @click="handleSendData">GrandSon传递数据</el-button>
  </div>
</template>

<script>
export default {
  name: "GrandSon",
  data() {
    return {}
  },
  mounted() {
    // console.log("$attrs", this.$attrs);
    // console.log("$listeners", this.$listeners);
  },
  methods: {
    handleSendData(){
      this.$emit("funcForGrandSon", "GrandSon");
    }
  },
}
</script>