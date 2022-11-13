<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <button @click="handleAdd">Add</button>
    <h1>当前信息为：{{ msg }}</h1>
    <button @click="changeMsg">ChangeMsg</button>
    <h1>当前person为：{{ person.name }}-{{ person.age }}</h1>
    <button @click="changeAge">ChangeAge</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  /**
   * 
   */
  // watch: {
  //   sum(newVal, oldVal){
  //     console.log(newVal, oldVal);
  //   }
  // },

  // watch: {
  //   sum: {
  //     immediate: true,
  //     deep: true,
  //     handler(newVal, oldVal){
  //       console.log(newVal, oldVal);
  //     }
  //   }
  // },

  setup(){
    let sum = ref(0);
    let msg = ref("hello");
    let person = ref({
      name: "张三",
      age: 18,
    });

    // 监视ref定义的一个响应式数据
    // watch(sum, (newVal, oldVal) => {
    //   console.log(newVal, oldVal);
    // }, { immediate: true });

    // 监视ref定义的多个响应式数据，可以写多个watch，也可以使用下面的方法
    watch([sum, msg], (newVal, oldVal) => {
      console.log(newVal, oldVal);
    }, { immediate: true });

    /**
     * 监听ref定义的一个object类型的数据：let person = ref({ name: "张三", age: 18 });
     * 这里会监听不到，是因为ref遇见对象类型的数据时，内部会调用reactive，这里我们只是修改了这个person的一个属性
     * 但是并没有覆盖这个person，它在内存当中的地址是没有发生变化的，就无法监听到
     * 
     * 解决方法：
     * 1、监听person.value，ref遇见对象，内部调用reactive，这里person.value，就是reactive定义的响应式数据，reactive定义的数据会默认强制开启深度监听
     * 2、监听person，开启深度监听，deep: true
     */
    watch(person.value, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });
    // watch(person, (newVal, oldVal) => {
    //   console.log(newVal, oldVal);
    // }, { deep: true });

    function handleAdd(){
      sum.value = sum.value + 1;
    }
    function changeMsg(){
      msg.value = msg.value + "!";
    }
    function changeAge(){
      person.value.age = person.value.age + 1;
    }

    return {
      sum,
      handleAdd,
      msg,
      changeMsg,
      person,
      changeAge
    };
  }
}
</script>