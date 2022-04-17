<template>
  <div class="item">
    <el-button type="primary" @click="isShow = !isShow">显示/隐藏</el-button>

    <transition name="my" appear>
      <h1 class="title" v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style lang="less" scoped>
  .my-enter-active{
    animation: move 0.3s ease-in-out;
  }
  .my-leave-active{
    animation: move 0.3s ease-in-out reverse;
  }
  @keyframes move {
    from{
      transform: translateX(-300px);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>