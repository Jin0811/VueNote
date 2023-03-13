<template>
  <div class="container">
    <FatherOne />
    <br>
    <FatherTwo />
    <br>
    <FatherThree />
    <br>
    <FatherFour />
    <br>
    <!-- <FatherFive />
    <br>
    <FatherSix />
    <br>
    <FatherSeven /> -->
  </div>
</template>

<script>
// 1 props / $emit 适用父子组件通信
import FatherOne from './pages/propsAndEmit/Father.vue';
// 2 ref 与 $parent / $children 适用父子组件通信
import FatherTwo from './pages/refAndParentAndChildren/Father.vue';
// 3 EventBus （$emit / $on） 适用于父子、隔代、兄弟组件通信
import FatherThree from './pages/eventBus/Father.vue';
// 4 自定义事件 （$emit / $on）适用于父子组件通信
import FatherFour from './pages/selfEvent/Father.vue';
// 5 $attrs/$listeners 适用于 隔代组件通信
// import FatherFive from './pages/selfEvent/Father.vue';
// 6 provide / inject 适用于 隔代组件通信
// import FatherSix from './pages/selfEvent/Father.vue';
// 7 vuex
// import FatherSeven from './pages/selfEvent/Father.vue';
export default {
  name: "app",
  components: {
    FatherOne,
    FatherTwo,
    FatherThree,
    FatherFour,
    // FatherFive,
    // FatherSix,
    // FatherSeven,
  },
};
</script>

<style lang="less">
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
