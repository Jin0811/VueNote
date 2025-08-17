<template>
  <div class="container">
    <h2 class="title">情况1：监视【ref】定义的【基本类型】数据</h2>
    <p>num1：{{ num1 }}</p>
    <button @click="changeNum1()">增加1</button>
  </div>

  <div class="container">
    <h2 class="title">情况2：监视【ref】定义的【对象类型】数据</h2>
    <p>name：{{ person.name }}</p>
    <p>age：{{ person.age }}</p>
    <button @click="changePersonName">修改名字</button>
    <button @click="changePersonAge">修改年龄</button>
    <button @click="changePerson">替换人员信息</button>
  </div>

  <div class="container">
    <h2 class="title">情况3：监视【reactive】定义的【对象类型】数据</h2>
    <p>name：{{ car.name }}</p>
    <p>price：{{ car.price }}</p>
    <button @click="changeCarName">修改汽车名字</button>
    <button @click="changeCarPrice">修改汽车价格</button>
    <button @click="changeCar">替换汽车</button>
  </div>

  <div class="container">
    <h2 class="title">情况4：监视【ref】或【reactive】定义的【对象类型】数据</h2>
    <p>姓名：{{ user.name }}</p>
    <p>年龄：{{ user.age }}</p>
    <p>汽车：{{ user.car.c1 }}、{{ user.car.c2 }}</p>
    <button @click="changeUserName">修改姓名</button>
    <button @click="changeUserAge">修改年龄</button>
    <button @click="changeUserCar(1)">修改第1个车</button>
    <button @click="changeUserCar(2)">修改第2个车</button>
    <button @click="changeUserCar(3)">修改车</button>
  </div>

  <div class="container">
    <h2 class="title">情况5：监视上述的多个数据</h2>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref, reactive } from "vue";

defineOptions({ name: "Watch" });

/**
 * watch语法
 * const 停止监视的函数 = watch(被监视的数据, 监视回调函数, 配置对象);
 * 配置对象 deep | immediate
 *
 * vue3当中的watch只能监视以下四种数据：
 * 1、ref定义的数据
 * 2、reactive定义的数据
 * 3、函数返回一个值（getter函数）
 * 4、一个包含上述内容的数组
 */

// -------------------------------------------------------------------------------------------

// 情况1：监视【ref】定义的【基本类型】数据
const num1 = ref(0);
const changeNum1 = () => {
  num1.value = num1.value + 1;
};
const stopWatch1 = watch(num1, (newVal, oldVal) => {
  console.log("num1变化了", newVal, oldVal);
  if (newVal >= 10) {
    stopWatch1();
  }
});

// -------------------------------------------------------------------------------------------

// 情况2：监视【ref】定义的【对象类型】数据
// 这里监视的是对象的地址值，如果想要监视对象内部属性的变化，需要手动开启深度监视
// 注意：
// 1、如果修改的是ref定义对象中的属性，则newVal和oldVal都是新值，因为他们是同一个对象
// 2、如果修改的是整个ref定义的对象，则newVal是新值，oldVal是旧值，因为不是同一个对象了
const person = ref({ name: "张三", age: 18 });
const changePersonName = () => {
  person.value.name = person.value.name + "#";
};
const changePersonAge = () => {
  person.value.age = person.value.age + 1;
};
const changePerson = () => {
  person.value = { name: "李四", age: 20 };
};
watch(
  person,
  (newVal, oldVal) => {
    console.log("person变化了", newVal, oldVal);
  },
  { deep: true }
);

// -------------------------------------------------------------------------------------------

// 情况3：监视【reactive】定义的【对象类型】数据
// 默认会开启深度监视，且此深度监视无法关闭
const car = reactive({ name: "奔驰E300", price: 55 });
const changeCarName = () => {
  car.name = car.name + "#";
};
const changeCarPrice = () => {
  car.price = car.price + 10;
};
const changeCar = () => {
  Object.assign(car, { name: "奥迪A6", price: 50 });
};
watch(car, (newVal, oldVal) => {
  console.log("car变化了", newVal, oldVal);
});

// -------------------------------------------------------------------------------------------

// 情况4：监视【ref】或【reactive】定义的【对象类型】数据
// 注意：
// 1、如果该属性值【不是】【对象类型】，则需要写成函数形式
// 2、如果该属性值【是】【对象类型】，则可以直接写，也可以写成函数，建议写成函数
const user = reactive({
  name: "张三",
  age: 18,
  car: {
    c1: "奔驰",
    c2: "宝马",
  },
});
const changeUserName = () => {
  user.name = user.name + "#";
};
const changeUserAge = () => {
  user.age = user.age + 1;
};
const changeUserCar = (type: number) => {
  if (type === 1) {
    user.car.c1 = "雅迪";
  } else if (type === 2) {
    user.car.c2 = "爱玛";
  } else if (type === 3) {
    user.car = {
      c1: "大众",
      c2: "沃尔沃",
    };
  }
};
// 如果该属性值【不是】【对象类型】，则需要写成函数形式
watch(
  () => user.name,
  (newVal, oldVal) => {
    console.log("user.name变化了", newVal, oldVal);
  }
);
// 如果该属性值【是】【对象类型】，则可以直接写，也可以写成函数，建议写成函数

// 1、这种写法，可以监听到单个车的变化，但是无法监听到整个car对象的改变
// watch(user.car, (newVal, oldVal) => {
//   console.log("user.car变化了", newVal, oldVal);
// });

// 2、这种写法，无法监听到单个车的变化，但是可以监听到整个car对象的改变
// watch(
//   () => user.car,
//   (newVal, oldVal) => {
//     console.log("user.car变化了", newVal, oldVal);
//   }
// );

// 3、最佳写法，使用getter函数和deep，可以同时监听到单个车和整个car对象的改变
watch(
  () => user.car,
  (newVal, oldVal) => {
    console.log("user.car变化了", newVal, oldVal);
  },
  { deep: true }
);

// -------------------------------------------------------------------------------------------

// 情况5：监视上述的多个数据
watch(
  [() => user.age, () => user.car],
  (newVal, oldVal) => {
    console.log("监视多个数据", newVal, oldVal);
  },
  { deep: true }
);
</script>
