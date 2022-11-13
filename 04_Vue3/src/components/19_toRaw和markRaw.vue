<template>
  <div>
    <div>
      <h3>SUM：{{ sum }}</h3>
      <h3>姓名：{{ person.name }}</h3>
      <h3>年龄：{{ person.age }}</h3>
      <h3>薪资：{{ person.job.j1.salary }}</h3>
      <h3>汽车：{{ person.car }}</h3>
    </div>
    <hr>
    <div>
      <button @click="changeSum">修改SUM</button>
      <button @click="changeName">修改姓名</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeSalary">修改薪资</button>
      <button @click="showRawPerson">输入原始person</button>
      <button @click="addCar">添加Car</button>
      <button v-show="person.car" @click="changeCarPrice">修改Car价格</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRaw, markRaw } from "vue";
export default {
  /**
   * toRaw
   * 作用：将一个由reactive生成的响应式对象转换为普通对象
   * 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面的更新
   * 
   * markRaw
   * 作用：标记一个对象，使其永远不会再成为一个响应式对象
   * 使用场景：
   * 1、有些值不应被设置为响应式的，譬如复杂的第三方类库
   * 2、当渲染具有不可变化的大列表时，跳过响应式转换可以提高性能
   * 
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
    function showRawPerson(){
      let rawPerson = toRaw(person);
      console.log(rawPerson);
    }
    function addCar(){
      let car = { name: "奔驰", price: 40 };
      // 这里标记了car为原始对象，这个对象不会成为响应式对象，更改这个对象的属性值，也不会触发页面的更新
      person.car = markRaw(car);
    }
    function changeCarPrice(){
      // 使用markRaw之后，继续修改这个对象中的属性值，数据可以更改成功，但是不会触发页面的更新，也就是说，这个对象不是一个响应式的
      person.car.price++;
      console.log(person.car.price);
    }

    return {
      sum,
      person,
      changeName,
      changeAge,
      changeSalary,
      changeSum,
      showRawPerson,
      addCar,
      changeCarPrice
    };
  }
}
</script>