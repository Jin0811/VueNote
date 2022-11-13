<template>
  <div>
    <div>
      <h2>直接使用ref数据</h2>
      <h3>姓名：{{ person.name }}</h3>
      <h3>年龄：{{ person.age }}</h3>
      <h3>薪资：{{ person.job.j1.salary }}</h3>
    </div>
    <hr>
    <div>
      <h2>使用toRef</h2>
      <h3>姓名：{{ name2 }}</h3>
      <h3>年龄：{{ age2 }}</h3>
      <h3>薪资：{{ salary2 }}</h3>
    </div>
    <hr>
    <div>
      <h2>使用toRefs</h2>
      <h3>姓名：{{ name }}</h3>
      <h3>年龄：{{ age }}</h3>
      <h3>薪资：{{ salary }}</h3>
    </div>
    <hr>
    <div>
      <button @click="changeName">修改姓名</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeSalary">修改薪资</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  /**
   * toRef
   * 作用：创建一个ref对象，其value值指向另外一个对象中的某个属性
   * 应用：要将响应式对象中的某个属性单独提供给模板使用时
   * 扩展：toRefs和toRef的功能一致，但是toRefs可以批量创建多个ref对象
   */

  setup(){
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 15
        }
      }
    });

    function changeName(){
      person.name = person.name + "!";
    }
    function changeAge(){
      person.age++;
    }
    function changeSalary(){
      person.job.j1.salary++;
    }

    return {
      person,
      changeName,
      changeAge,
      changeSalary,

      // 使用toRef
      name2: toRef(person, "name"),
      age2: toRef(person, "age"),
      salary2: toRef(person.job.j1, "salary"),

      // 使用toRefs
      ...toRefs(person),
      ...toRefs(person.job.j1),
    };
  }
}
</script>