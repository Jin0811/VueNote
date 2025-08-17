<template>
  <div class="container">
    <h2 class="title">父组件</h2>
    <p>父组件的钱：{{ money }}</p>
    <p>父组件的汽车：一辆{{ car.name }}，价格是{{ car.price }}万元</p>
    <Son />
  </div>
</template>

<script lang="ts" setup>
import { provide, reactive, ref } from "vue";
import Son from "./son.vue";
defineOptions({ name: "ProvideInject" });

const car = reactive({ name: "奔驰E300", price: 48 });
const money = ref(100);
const updateMoney = (num: number) => {
  money.value = money.value - num;
};

provide("car", car);
provide("moneyContext", { money, updateMoney });
</script>
