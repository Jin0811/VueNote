<template>
  <div class="grandson-container">
    <h2 class="title">孙子组件</h2>
    <p>爷爷给的钱：{{ moneyContext.money }}</p>
    <p>爷爷给的汽车：一辆{{ car.name }}，价格是{{ car.price }}万元</p>
    <button @click="spendMoney">花爷爷的钱</button>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";

const car = inject("car", { name: "", price: 0 });
const moneyContext = inject("moneyContext", {
  money: 0,
  updateMoney: (num: number) => {},
});

const spendMoney = () => {
  moneyContext.updateMoney(3);
};
</script>
