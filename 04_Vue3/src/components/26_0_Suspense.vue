<template>
  <div class="father">
    <h2>Suspense</h2>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <h2>Loading</h2>
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态引入
// import Child from "./26_1_SuspenseChild.vue";

// 异步动态引入
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./26_1_SuspenseChild.vue"));

export default {
  /**
   * Suspense
   * 内部其实是通过具名插槽来实现的
   * 其中default插槽是真正需要展示的子组件，fallback插槽可以作为一个失败的回退
   */
  components: {
    Child
  },
  setup(){

    return {};
  }
}
</script>

<style scoped>
  .father{
    color: #fff;
    padding: 10px;
    background-color: #16a085;
  }
</style>