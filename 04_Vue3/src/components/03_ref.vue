<template>
  <div>
    <h2>{{ age }}</h2>
    <button @click="changeInfo">修改Age信息</button>
    <h2>{{ job.type }} - {{ job.salary }}</h2>
    <button @click="changeJobInfo">修改Job信息</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  /**
   * RefImpl： Ref Implement 引用实现，一般可以称为引用实现的实例对象或引用对象
   * 
   * 在setup函数当中赋值的时候，需要给age.value进行赋值，但是在模板中使用时，无需再进行读取.value，vue3会自动帮我们进行处理
   * 
   * ref处理不同数据类型的区别：
   * 1、基本数据类型：使用Object.defineProperty，借助getter和setter
   * 2、引用数据类型：第一层的对象依旧使用Object.defineProperty，对象当中的属性和方法借助了vue3当中的reactive函数，底层使用的是Proxy
   */

  setup(){
    let age = ref(18); // 处理基本数据类型
    let job = ref({ type: "前端", salary: 15 }); // 处理引用数据类型

    function changeInfo(){
      console.log(age);
      age.value = age.value + 1;
    }
    
    function changeJobInfo(){
      console.log(job);
      job.value.type = "后端";
    }

    return {
      age,
      changeInfo,
      job,
      changeJobInfo
    };
  }
}
</script>