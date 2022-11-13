<template>
  <div>
    <div>
      <h2>直接使用ref数据</h2>
      <h3>姓名：{{ person.name }}</h3>
      <h3>年龄：{{ person.age }}</h3>
      <h3>薪资：{{ person.job.j1.salary }}</h3>
    </div>
    <div>
      <button @click="changeName">修改姓名</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeSalary">修改薪资</button>
    </div>
    <hr>
    <h3>Info中的num值：{{ info.num }}</h3>
    <hr>
    <div>
      <button @click="changeNum">修改num</button>
      <button @click="info={ num: 99 }">shallowRef：替换info，可以触发页面更新</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRef, shallowReactive, shallowRef } from "vue";
export default {
  /**
   * shallowReactive 和 shallowRef
   * 
   * shallowReactive: 与reactive类似，但是shallowReactive只考虑第一层级的响应式，即浅层响应式，对象最外层的属性是响应式的，嵌套的属性不是响应式的
   * 
   * shallowRef: 
   * 1、与ref类似，但是shallowRef只处理基本数据类型的数据，不进行对象的响应式处理，而ref在遇到对象时，会在内部求助reactive
   * 2、基本数据类型时，ref和shallowRef没有区别
   * 3、直接替换时是响应式的：@click="info={ num: 888 }"
   * 
   * 当给ref传入一个对象时，返回的RefImpl实例对象，其value是一个Proxy对象，这是因为ref内部求助了reactive
   * 当给shallowRef传入一个对象时，返回的RefImpl实例对象，其value是一个普通的对象，不具备响应式
   * 
   * 使用场景：
   * 1、如果有一个对象数据，结构比较深，但变化的时候，只是最外层属性变化，可以使用shallowReactive
   * 2、如果有一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象进行替换，可以使用shallowRef
   */

  setup(){
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 15
        }
      }
    });

    let info = shallowRef({
      num: 0
    });
    console.log(info);

    function changeName(){
      person.name = person.name + "!";
    }
    function changeAge(){
      person.age++;
    }
    function changeSalary(){
      person.job.j1.salary++;
    }
    function changeNum(){
      info.value.num++;
    }

    return {
      person,
      info,
      changeName,
      changeAge,
      changeSalary,
      changeNum
    };
  }
}
</script>