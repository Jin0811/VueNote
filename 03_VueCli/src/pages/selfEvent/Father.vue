<template>
  <div class="father">
    <h2 class="title">4 自定义事件 （$emit / $on）适用于父子组件通信</h2>
    <h2>Father 组件</h2>
    <Child :age="18" name="张三" v-on:getData="handleGetData" />
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Father",
  components: {
    Child,
  },
  data() {
    return {}
  },
  methods: {
    handleGetData(data){
      console.log("父组件从子组件得到的数据为：", data);
    },
  },
}
</script>