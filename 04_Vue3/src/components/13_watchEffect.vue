<template>
  <div>
    <h1>{{ sum }}</h1>
    <button @click="changeNum">修改Sum</button>
    <h1>salary：{{ person.job.salary }} | age：{{ person.age }}</h1>
    <button @click="changeSalary">修改Salary</button>
    <button @click="changeAge">修改Age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
  /**
   * watchEffect的回调函数当中用到的任何ref数据和reactive数据，一旦这些数据发生了变化，就会重新触发watchEffect函数
   * 
   * watchEffect和computed类似，但是computed注重的是计算出来的值，必须要写返回值
   * watchEffect注重的是过程，不需要写返回值
   */

  setup(){
    let sum = ref(0);
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        salary: 15
      }
    });

    function changeNum(){
      sum.value = sum.value + 1;
    }
    function changeSalary(){
      person.value.job.salary = person.value.job.salary + 1;
    }
    function changeAge(){
      person.value.age = person.value.age + 1;
    }

    watchEffect(() => {
      const testSum = sum.value;
      const testSalary = person.value.job.salary;
      console.log("watchEffect");
    }, []);

    return {
      sum,
      changeNum,
      person,
      changeSalary,
      changeAge,
    };
  }
}
</script>