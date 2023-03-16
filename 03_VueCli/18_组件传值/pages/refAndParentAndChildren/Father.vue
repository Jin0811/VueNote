<template>
  <div class="father">
    <h2 class="title">2 ref 与 $parent / $children 适用 父子组件通信</h2>
    <h2>Father 组件</h2>
    <Child ref="Child" />
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
    // 通过ref直接拿到子组件的实例，进行传递数据
    // this.$refs.Child.name = "张三";
    // this.$refs.Child.age = 18;

    // 通过$children来操作子组件的数据，进行通信
    this.$children[0].name = "张三";
    this.$children[0].age = 18;
  },
  methods: {
    handleGetData(data){
      console.log("父组件从子组件得到的数据为：", data);
    },
  },
}
</script>