<template>
  <div class="container">
    <h2 class="title">reactive定义对象</h2>

    <p>汽车名称：{{ car.name }}</p>

    <p>汽车价格：{{ car.price }}万</p>
    <button @click="changePrice">修改价格</button>
  </div>

  <div class="container">
    <h2 class="title">reactive定义数组</h2>
    <p v-for="(item, index) in games" :key="item.id">{{ item.name }}</p>
    <button @click="changeGameName">修改第一个游戏的名称</button>
  </div>

  <div class="container">
    <h2 class="title">reactive深层次响应式</h2>
    <p>{{ person.school.name }}</p>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

defineOptions({ name: "Reactive" });

const car = reactive({
  name: "奔驰E300",
  price: 10,
});
const changePrice = () => {
  car.price = car.price + 10;
};

const games = reactive([
  { id: 1, name: "游戏1" },
  { id: 2, name: "游戏2" },
  { id: 3, name: "游戏3" },
  { id: 4, name: "游戏4" },
]);
const changeGameName = () => {
  games[0].name = games[0].name + 1;
};

const person = reactive({
  school: {
    name: "实验路小学",
  },
});
</script>
