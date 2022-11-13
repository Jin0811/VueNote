<template>
  <div>
    <div>
      <h3>SUM：{{ sum }}</h3>
      <h3>姓名：{{ person.name }}</h3>
      <h3>年龄：{{ person.age }}</h3>
      <h3>薪资：{{ person.job.j1.salary }}</h3>
    </div>
    <hr>
    <div>
      <button @click="changeSum">修改SUM</button>
      <button @click="changeName">修改姓名</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeSalary">修改薪资</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, readonly, shallowReadonly } from "vue";
export default {
  /**
   * readonly：深层次的只读，可以用于ref和reactive定义的数据
   * shallowReadonly：浅层次的只读，同样可以用于ref和reactive定义的数据
   * 
   * 注意：基本数据类型时，readonly和shallowReadonly作用一样，因为没有层级，所以当我们使用ref处理了一个基本数据类型数据时，设置只读，使用readonly即可
   * 
   * 使用场景：不希望数据被修改时使用，譬如父组件传递了值给子组件，子组件可以设置传递过来的值为readonly
   */

  setup(){
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 15
        }
      }
    });

    // readonly 深层次只读
    // shallowReadonly 浅层次只读
    person = shallowReadonly(person);

    // 基本数据类型时，readonly和shallowReadonly作用一样，因为没有层级
    sum = readonly(sum);

    function changeName(){
      person.name = person.name + "!";
    }
    function changeAge(){
      person.age++;
    }
    function changeSalary(){
      person.job.j1.salary++;
    }
    function changeSum(){
      sum.value++;
    }

    return {
      sum,
      person,
      changeName,
      changeAge,
      changeSalary,
      changeSum,
    };
  }
}
</script>