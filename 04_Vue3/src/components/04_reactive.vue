<template>
  <div>
    <h1>{{ job.type }} - {{ job.salary }}</h1>
    <button @click="changeJobInfo">修改Job信息</button>
    <h1>爱好</h1>
    <ul>
      <li v-for="(item, index) in hobby" :key="index">{{ item }}</li>
    </ul>
    <button @click="changeHobby">修改Hobby信息</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  /**
   * reactive不能用于处理基本数据类型，基本数据类型需要使用ref
   * reactive处理对象时，是深层次的处理，无论嵌套多少层级，vue3都会进行响应式处理
   * 
   * reactive函数：
   * 作用：定义一个对象类型的响应式数据
   * 语法：const 代理对象 = reactive(源对象); 返回一个代理对象（Proxy）
   * reactive定义的响应式数据是 "深层次的"
   * 内部是基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作
   */

  setup(){
    let job = reactive({
      type: "前端工程师",
      salary: 15,
    });
    let hobby = reactive(["唱歌", "跳舞", "打篮球"]);

    function changeJobInfo(){
      console.log(job);
      job.salary = job.salary + 1;
    }
    function changeHobby(){
      hobby[0] = "唱好听的歌"; // vue3当中可以直接通过索引来操作数组中的元素
      hobby.push("踢足球");
    }

    return {
      job,
      changeJobInfo,
      hobby,
      changeHobby,
    };
  }

  // 简写形式
  // setup(){
  //   const data = reactive({
  //     job: {
  //       type: "前端工程师",
  //       salary: 15,
  //     },
  //     num: 1,
  //     hobby: ["唱歌", "跳舞", "打篮球"]
  //   });

  //   function changeJobInfo(){
  //     console.log(job);
  //     data.job.salary = job.salary + 1;
  //   }
  //   function changeHobby(){
  //     data.hobby[0] = "唱好听的歌"; // vue3当中可以直接通过索引来操作数组中的元素
  //     data.hobby.push("踢足球");
  //   }

  //   return {
  //     ...data,
  //     changeJobInfo,
  //     changeHobby,
  //   };
  // }
}
</script>