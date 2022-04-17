<template>
  <div id="app">
    <div>
      <h1>Animation的方式</h1>
      <Animation></Animation>
    </div>
    <hr>

    <div>
      <h1>Transition的方式</h1>
      <TransitionWay></TransitionWay>
    </div>
    <hr>

    <div>
      <h1>多个元素过渡</h1>
      <MultipleTransition></MultipleTransition>
    </div>
    <hr>

    <div>
      <h1>第三方库：Animate.css</h1>
      <ThirdAnimate></ThirdAnimate>
    </div>

  </div>
</template>

<script>
import Animation from "./components/Animation.vue";
import TransitionWay from "./components/TransitionWay.vue";
import MultipleTransition from "./components/MultipleTransition.vue";
import ThirdAnimate from "./components/ThirdAnimate.vue";
export default {
  name: "app",
  components: {
    Animation,
    TransitionWay,
    MultipleTransition,
    ThirdAnimate
  },
  data(){
    return {}
  },
};
</script>

<style lang="less">
  #app{
    height: 150vh;
  }
  .title{
    width: 300px;
    padding: 0px 0;
    background-color: #f1f1f1;
  }
</style>
