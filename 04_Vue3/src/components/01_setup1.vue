<template>
  <div>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="sayHello">sayHello</button>
  </div>
</template>

<script>
export default {
  /**
   * setup函数的两种返回值：
   * 1、如果返回一个对象，则对象当中的属性、方法在模板当中可以直接使用
   * 2、如果返回一个渲染函数，则可以自定义渲染内容
   * 
   * 注意：
   * 1、vue3是向下兼容的，vue3当中一样可以写vue2当中的data、method
   * 2、不建议vue2和vue3的配置不要混用，vue2当中可以读取vue3当中的数据，但vue3当中不能读取vue2的数据
   * 3、vue2和vue3当中的数据命名冲突时，以vue3的为主
   * 
   * 注意：
   * 1、setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模版当中无法使用return对象当中的数据和方法
   * 2、如果配合了Suspense和异步组件引入，setup也可以是一个async函数，可以返回一个Promise
   */

  setup(){
    // 数据
    let name = "张三";
    let age = 18;

    // 方法
    function sayHello(){
      console.log(name, age);
    }

    return {
      name,
      age,
      sayHello
    };
  }
}
</script>


