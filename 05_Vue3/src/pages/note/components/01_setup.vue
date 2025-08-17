<template>
  <div class="container">
    <h2 class="title">setup介绍</h2>

    <p>{{ name }}</p>
    <button @click="changeName">修改name</button>

    <p>{{ age }}</p>
    <button @click="changeAge">修改age</button>

    <hr />
    <p>{{ num }}</p>
    <button @click="changeNum">修改num</button>
    <button @click="handleLog">vue2中读取setup数据</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Setup",
  beforeCreate() {
    console.log("# beforeCreate");
  },
  data() {
    return {
      num: 100,
    };
  },
  methods: {
    changeNum() {
      this.num++;
    },
    handleLog() {
      console.log(this.name);
      this.say();
    },
  },
  setup() {
    /**
     * setup函数中的this是undefined，是无法使用的
     * setup函数在beforeCreate之前执行
     *
     * setup的返回值
     * 1、如果返回值是一个对象，则对象中的属性可以在模板当中直接使用
     * 2、如果返回值是一个函数，则vue会放弃使用模板，而是使用此函数作为渲染函数
     *
     * 注意：
     * 1、data和methods可以与setup同时存在
     * 2、data和methods中可以通过this读取setup中的变量和方法
     * 3、setup中无法读取data和methods中的变量和方法
     */

    console.log("# setup");

    let name = "张三";
    let age = 18;

    const changeName = () => {
      name = "李四";
      console.log("调用了setup中的changeName方法");
    };
    const changeAge = () => {
      age = age + 1;
    };
    const say = () => {
      console.log("调用了setup中的say方法");
    };

    return { name, age, changeName, changeAge, say };
  },
};
</script>
