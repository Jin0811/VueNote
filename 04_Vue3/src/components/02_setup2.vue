<template>
  <div>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="sayHello">sayHello</button>
  </div>
</template>

<script>
import { h } from "vue";
export default {
  setup(){
    // 数据
    let name = "张三";
    let age = 18;

    // 方法
    function sayHello(){
      console.log(name, age);
    }

    return () => h("h2", `返回渲染函数：${name} - ${age}`);
  }
}
</script>


