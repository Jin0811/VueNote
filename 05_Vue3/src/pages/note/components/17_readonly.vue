<template>
  <div class="container">
    <h2 class="title">readonly 和 shallowReadonly</h2>
    
    <p>求和1为：{{ sum1 }}</p>
    <p>求和2为：{{ sum2 }}</p>
    <button @click="changeSum1">修改sum1</button>
    <button @click="changeSum2">修改sum2</button>

    <br />
    <hr />
    <br />

    <p>reactive 汽车为：{{ car1 }}</p>
    <button @click="changeBarnd(1)">修改品牌car1</button>
    <button @click="changeColor(1)">修改颜色car1</button>
    <button @click="changeEngine(1)">修改发动机car1</button>

    <br />
    <hr />
    <br />

    <p>readonly 汽车为：{{ car2 }}</p>
    <button @click="changeBarnd(2)">修改品牌car2</button>
    <button @click="changeColor(2)">修改颜色car2</button>
    <button @click="changeEngine(2)">修改发动机car2</button>

    <br />
    <hr />
    <br />

    <p>shallowReadonly 汽车为：{{ car3 }}</p>
    <button @click="changeBarnd(3)">修改品牌car3</button>
    <button @click="changeColor(3)">修改颜色car3</button>
    <button @click="changeEngine(3)">修改发动机car3</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, readonly, shallowReadonly } from "vue";

/**
 * readonly 只读，全部层级的全部属性都只读
 * shallowReadonly 浅层只读，顶层属性只读，深层嵌套属性仍然是可变的
 * 
 * 为什么修改car3的engine属性，car1、car2、car3的engine属性都改变了？
 * 首先car3是浅层只读，car3的engine属性是可变的
 * 其次，car2和car3都是由car1处理得到的，与car1存在关联关系
 */

defineOptions({ name: "Readonly" });

const sum1 = ref(0);
const sum2 = readonly(sum1);
const changeSum1 = () => {
  sum1.value++;
};
const changeSum2 = () => {
  sum2.value++;
};

const car1 = reactive({
  barnd: "奔驰",
  options: {
    color: "红色",
    engine: "V8",
  },
});
const car2 = readonly(car1);
const car3 = shallowReadonly(car1);
const changeBarnd = (type:number) => {
  if (type === 1) {
    car1.barnd = "宝马";
  } else if (type === 2) {
    car2.barnd = "宝马";
  } else {
    car3.barnd = "宝马";
  }
};
const changeColor = (type:number) => {
  if (type === 1) {
    car1.options.color = "蓝色";
  } else if (type === 2) {
    car2.options.color = "蓝色";
  } else {
    car3.options.color = "蓝色";
  }
};
const changeEngine = (type:number) => {
  if (type === 1) {
    car1.options.engine = "V12";
  } else if (type === 2) {
    car2.options.engine = "V12";
  } else {
    car3.options.engine = "V12";
  }
};
</script>
