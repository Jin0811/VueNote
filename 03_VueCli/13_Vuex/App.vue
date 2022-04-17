<template>
  <div id="app">
    <Count></Count>
  </div>
</template>

<script>
import Count from "@/components/Count";
export default {
  name: "app",
  components: {
    Count
  },
  created(){
    // beforeunload在第一次加载时就会执行，第一次会先在sessionStorage当中存放一个原始的数据
    // 下一次刷新时，在刷新之前，就拿到sessionStorage当中的数据，跟store当中的数据进行合并

    // 在页面刷新前将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });

    // 页面加载前读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store")))
      );
    }
  },
  data(){
    return {}
  },
};
</script>

<style lang="less">

</style>
