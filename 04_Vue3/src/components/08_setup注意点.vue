<template>
  <div>
    <TestComponent :name="name" :age="age" @sayName="sayName">
      <span>默认插槽</span>
      <template v-slot:slotOne>
        <span>具名插槽</span>
      </template>
    </TestComponent>
  </div>
</template>

<script>
import TestComponent from "./09_component";
export default {
  /**
   * setup执行的时机：在beforeCreate之前执行一次，this是undefined
   * 
   * setup函数的参数：
   * 1、props：值为对象，包含组件外部传递过来，且组件内部声明接收了的属性
   * 2、context
   *  - attrs：值为对象，包含组件外部传递过来，但是没有在props配置中声明的属性，相当于vue2中的this.$attrs
   *  - slots：收到的插槽内容，相当于vue2当中的this.$slots
   *  - emit：分发自定义事件的函数，相当于vue2当中的this.$emit
   * 
   * vue3当中，具名插槽需要使用：v-slot:插槽名称
   */
  components: {
    TestComponent
  },
  setup(){
    let name = "张三";
    let age = 18;

    function sayName(data){
      console.log(name, data);
    }

    return {
      name,
      age,
      sayName,
    };
  }
}
</script>