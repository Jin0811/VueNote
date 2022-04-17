<template>
  <div>
    <h4>学校组件</h4>
    <p>学校名称：{{ name }}</p>
    <p>学校名称：{{ address }}</p>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "XXX学校",
      address: "XXX路"
    }
  },
  mounted(){
    // this.$bus是一个组件实例对象
    // 这里在school组件当中，给bus组件绑定了一个自定义的事件，这样回调就放在了school当中
    this.$bus.$on("busGetName", (name) => {
      console.log(name);
    });
  },
  beforeDestroy(){
    this.$bus.$off("busGetName");
  },
}
</script>