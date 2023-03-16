<template>
  <div class="father">
    <h2 class="title">3 EventBus （$emit / $on） 适用于父子、隔代、兄弟组件通信</h2>
    <h2>Father 组件</h2>
    <Child :age="18" name="张三" />
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
  mounted() {
    // 全局事件总线，进行监听
    this.$bus.$on("getData", (data) => {
      console.log("父组件从子组件得到的数据为：", data);
    });
  },
  methods: {},
  beforeDestroy(){
    this.$bus.$off("getData"); // 解除监听
  }
}
</script>