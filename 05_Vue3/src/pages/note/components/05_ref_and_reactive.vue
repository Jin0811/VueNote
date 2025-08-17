<template>
  <div class="container">
    <h2 class="title">ref</h2>

    <p>汽车名称：{{ carRef.name }}</p>

    <p>汽车价格：{{ carRef.price }}万</p>
    <button @click="changePrice('ref')">修改价格</button>
    <button @click="changeCar('ref')">替换汽车</button>
  </div>

  <div class="container">
    <h2 class="title">reactive</h2>

    <p>汽车名称：{{ carReactive.name }}</p>

    <p>汽车价格：{{ carReactive.price }}万</p>
    <button @click="changePrice('reactive')">修改价格</button>
    <button @click="changeCar('reactive')">替换汽车</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

defineOptions({ name: "RefAndReactive" });

/**
 * 宏观角度看：
 * 1、ref用来定义：基本类型、对象类型
 * 2、reactive用来定义：对象类型
 *
 * 区别：
 * 1、ref定义的变量在JS当中必须使用.value
 * 2、reactive重新分配一个新对象，会失去响应式，可以使用Object.assign去整体替换
 *
 * 使用原则：
 * 1、若需要一个基本类型的响应式数据，必须使用ref
 * 2、若需要一个响应式对象，层级不深，ref和reactive都可以
 * 3、若需要一个响应式对象，且层级较深，推荐使用reactive
 */

let carRef = ref({ name: "奔驰E300", price: 50 });
let carReactive = reactive({ name: "奔驰E300", price: 50 });

// 修改汽车价格
const changePrice = (type: string) => {
  if (type === "ref") {
    carRef.value.price = carRef.value.price + 10;
  } else {
    carReactive.price = carReactive.price + 10;
  }
};

// 替换汽车
const changeCar = (type: string) => {
  if (type === "ref") {
    // 正确写法
    // ref的value可以直接替换，不会丢失响应式
    carRef.value = { name: "沃尔沃XC90", price: 40 };

    // 错误写法
    // carRef = ref({ name: "沃尔沃XC90", price: 40 });
    // carRef = { name: "沃尔沃XC90", price: 40 };
  } else {
    // 正确写法1（推荐）
    Object.assign(carReactive, { name: "沃尔沃XC90", price: 40 });

    // 正确写法2
    // carReactive.name = "沃尔沃XC90";
    // carReactive.price = 40;

    // 错误写法
    // carReactive = { name: "沃尔沃XC90", price: 40 };
    // carReactive = reactive({ name: "沃尔沃XC90", price: 40 });
  }
};
</script>
