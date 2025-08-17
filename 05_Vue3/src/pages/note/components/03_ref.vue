<template>
  <div class="container">
    <h2 class="title">ref定义基本类型</h2>

    <p>{{ name }}</p>
    <button @click="changeName">修改name</button>

    <p>{{ age }}</p>
    <button @click="changeAge">修改age</button>
  </div>

  <div class="container">
    <h2 class="title">ref定义对象类型</h2>

    <p>汽车名称：{{ car.name }}</p>

    <p>汽车价格：{{ car.price }}万</p>
    <button @click="changePrice">修改价格</button>
  </div>

  <div class="container">
    <h2 class="title">ref定义数组</h2>
    <p v-for="(item, index) in games" :key="item.id">{{ item.name }}</p>
    <button @click="changeGameName">修改第一个游戏的名称</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineOptions({ name: "Ref" });

/**
 * ref定义基本类型的响应式数据
 * 1、ref的返回值是一个RefImpl的实例对象，简称ref对象或ref，ref对象的value属性是响应式的
 * 2、模板当中无需写value属性，vue会自动添加
 * 3、JS当中用到ref的地方都需要添加value属性
 * 4、对于const name = ref("张三")来说，name不是响应式的，name.value是响应式的
 */
const name = ref("张三");
const age = ref(18);
const changeName = () => {
  name.value = "李四";
};
const changeAge = () => {
  age.value = age.value + 1;
};

/**
 * ref定义对象类型的响应式数据
 */
const car = ref({
  name: "奔驰E300",
  price: 10,
});
const changePrice = () => {
  car.value.price = car.value.price + 10;
};
const games = ref([
  { id: 1, name: "游戏1" },
  { id: 2, name: "游戏2" },
  { id: 3, name: "游戏3" },
  { id: 4, name: "游戏4" },
]);
const changeGameName = () => {
  games.value[0].name = games.value[0].name + 1;
};
</script>
