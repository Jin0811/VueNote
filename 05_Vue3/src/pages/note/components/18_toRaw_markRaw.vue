<template>
  <div class="container">
    <h2 class="title">toRaw 和 markRaw</h2>

    <p>名字为：{{ person.name }}</p>
    <p>年龄为：{{ person.age }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>

    <br />
    <hr />
    <br />

    <p>carData 汽车为：{{ carData }}</p>
    <p>car 汽车为：{{ car }}</p>
    <button @click="changeBarnd">修改品牌</button>
    <button @click="changePrice">修改价格</button>
  </div>
</template>

<script lang="ts" setup>
import { toRaw, markRaw, reactive } from "vue";

/**
 * toRaw
 * 用于获取一个响应式对象的原始对象，返回的对象不再是响应式的，不会触发视图更新
 * 在需要将响应式对象传递给非Vue的库或者外部系统时，使用toRaw可以确保它们接受到的是普通对象
 *
 * markRaw
 * 标记一个对象，使其永远不会成为响应式数据
 * 例如使用mockjs时，为了防止误把mockjs变为响应式对象，可以使用markRaw来标记mockjs
 */

defineOptions({ name: "Raw" });

const person = reactive({ name: "张三", age: 18 });
console.log("响应式数据：", person);
console.log("原始数据", toRaw(person));

const changeName = () => {
  person.name = person.name + "#";
};
const changeAge = () => {
  person.age = person.age + 1;
};
const changePerson = () => {
  Object.assign(person, { name: "李四", age: 28 });
};

const showPerson = (p: any) => {
  p.age = p.age * 10;
  p.name = p.name + "#";
  console.log(p);
};
showPerson(toRaw(person));

// 这里可以将car加工为响应式数据
// const carData = { barnd: "奔驰", price: 60 };
// const car = reactive(car);

// 如果不想car被加工为响应式数据，则可以借助markRaw来标记carData
// 这里car虽然用了reactive方法，但依然是一个普通对象
const carData = markRaw({ barnd: "奔驰", price: 60 });
const car = reactive(carData); 

console.log(carData);
console.log(car);

const changeBarnd = () => {
  car.barnd = "宝马";
};
const changePrice = () => {
  car.price = car.price + 1;
};
</script>
