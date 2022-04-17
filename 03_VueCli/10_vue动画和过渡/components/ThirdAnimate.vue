<template>
  <div class="transition-way">
    <el-button type="primary" @click="isShow = !isShow">显示/隐藏</el-button>

    <transition 
      name="animate__animated animate__bounce" 
      appear 
      :duration="1000"
      enter-active-class="animate__fadeIn" 
      leave-active-class="animate__fadeOut">
      <h1 class="title" v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
import "animate.css"; // 引入animate.css
export default {
  name: "TransitionWay",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style lang="less" scoped>
  // 使用第三方库时，修改动画的持续时间
  .animate__animated{
    animation-duration: 0.5s !important;
  }
</style>
