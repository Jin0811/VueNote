<template>
  <div class="container">
    <h2 class="title">shallowRef 和 shallowReactive</h2>
    
    <p>求和为：{{ sum }}</p>
    <p>名字为：{{ person.name }}</p>
    <p>年龄为：{{ person.age }}</p>
    <button @click="changeSum">sum+1</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>

    <br />
    <hr />
    <br />

    <p>汽车为：{{ car }}</p>
    <button @click="changeBarnd">修改品牌</button>
    <button @click="changeColor">修改颜色</button>
    <button @click="changeEngine">修改发动机</button>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef, ref, reactive, shallowReactive } from "vue";

/**
 * shallowRef
 * 创建一个响应式数据，但只对顶层属性进行响应式处理
 * 只跟踪引用值的变化，不关心值内部的属性变化
 * 
 * shallowReactive
 * 创建一个浅层响应式对象，只会使对象的最顶层属性变成响应式，对象内部的嵌套属性不会变成响应式
 * 
 * 通过使用shallowRef和shallowReactive来绕开深度响应，浅层式API创建的状态只在其顶层是响应的，对所有深层的对象不会作任何处理
 * 避免了对每一个内部属性做响应式所带来的性能成本，这使用属性的访问变得更快，可提升性能
 */

defineOptions({ name: "Shallow" });

const sum = shallowRef(0);
const person = shallowRef({
  name: "张三",
  age: 18,
});
const changeSum = () => {
  sum.value++;
};
const changeName = () => {
  person.value.name = person.value.name + "#";
};
const changeAge = () => {
  person.value.age = person.value.age + 1;
};
const changePerson = () => {
  person.value = { name: "李四", age: 28 };
};

const car = shallowReactive({
  barnd: "奔驰",
  options: {
    color: "红色",
    engine: "V8",
  },
});
const changeBarnd = () => {
  car.barnd = "宝马";
};
const changeColor = () => {
  car.options.color = "蓝色";
};
const changeEngine = () => {
  car.options.engine  = "V12";
};
</script>
