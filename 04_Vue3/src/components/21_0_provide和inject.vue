<template>
  <div class="father">
    <h2>Father: {{ name }}-{{ price }}</h2>
    <button @click="changePrice">祖先组件修改价格</button>
    <Child></Child>
  </div>
</template>

<script>
import Child from "./21_1_child";
import { reactive, toRefs, provide } from "vue";
export default {
  /**
   * provide inject
   * 作用：实现祖孙组件间通信
   * 使用方法：祖先组件有一个provide选项来提供数据，子组件有一个inject选项来使用这些数据
   */
  components: {
    Child,
  },
  setup(){
    let car = reactive({ name: "奔驰", price: 40 });
    provide("car", car); // 给当前组件的全部后代组件传递数据

    function changePrice(){
      car.price++;
    }

    return { ...toRefs(car), changePrice };
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