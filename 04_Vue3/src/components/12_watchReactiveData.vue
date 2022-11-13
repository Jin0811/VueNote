<template>
  <div>
    <h1>{{ person.name }}-{{ person.age }}</h1>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    
    <h1>薪资：{{ person.job.first.salary }}</h1>
    <button @click="changeSalary">修改薪资</button>
  </div>
</template>

<script>
import { reactive, watch } from "vue";
export default {
  /**
   * watch reactive定义的数据
   * 
   * 注意：
   * 1、如果使用watch来去监听的reactive定义的一个响应式数据，则在监听当中无法获取到oldValue
   * 2、watch强制开启了深度监听（deep配置项无效，设置为false，依旧是深度监听）
   */

  setup(){
    const person = reactive({
      name: "张三",
      age: 18,
      job: {
        first: {
          salary: 15
        }
      }
    });

    function changeName(){
      person.name = person.name + "!";
    }
    function changeAge(){
      person.name = person.name + "!";
    }
    function changeSalary(){
      person.job.first.salary = person.job.first.salary + 1;
    }

    /**
     * 注意：
     * 1、如果使用watch来去监听的reactive定义的一个响应式数据，则在监听当中无法获取到oldValue
     * 2、这里直接监听了reactive定义的数据，watch强制开启了深度监听（deep配置项无效，设置为false，依旧是深度监听）
     */
    watch(person, (newVal, oldVal) => {
      console.log("监听person", newVal, oldVal);
    });

    /**
     * 监听reactive定义的一个响应式对象的某个属性
     * 注意：第一个参数需要写成一个函数，函数当中返回所要监听的数据
     */
    watch(() => person.age, (newVal, oldVal) => {
      console.log("监听reactive定义的一个响应式对象的某个属性", newVal);
    });

    /**
     * 监听响应式对象中的多个属性
     */
    watch([() => person.name, () => person.age], (newVal, oldVal) => {
      console.log("监听响应式对象中的多个属性", newVal);
    });

    /**
     * 监听响应式数据内部的一个object类型的数据，需要开启深度监听：deep: true
     * 这里监听的是reactive定义的对象中的某个属性，则需要开启深度监听
     */
    watch(() => person.job, (newVal, oldVal) => {
      console.log("监听响应式数据内部的一个object类型的数据", newVal);
    }, { deep: true });

    return {
      person,
      changeName,
      changeAge,
      changeSalary
    };
  }
}
</script>