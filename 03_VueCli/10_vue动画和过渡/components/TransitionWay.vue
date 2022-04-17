<template>
  <div class="transition-way">
    <el-button type="primary" @click="isShow = !isShow">显示/隐藏</el-button>

    <transition name="simplify" appear>
      <h1 class="title" v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
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
  // 进入的起点
  .my-enter{
    transform: translateX(-300px);
  }
  // 进入的终点
  .my-enter-to{
    transform: translateX(0px);
  }
  // 离开的起点
  .my-leave{
    transform: translateX(0px);
  }
  // 离开的终点
  .my-leave-to{
    transform: translateX(-300px);
  }

  // 简写形式：
  // 进入的起点和离开的终点，是相同的
  .simplify-enter, .simplify-leave-to{
    transform: translateX(-300px);
  }
  // 过渡方式，需要给过渡的元素添加transition样式，如果不想改变原先的代码，可以把transition样式添加到.v-[enter/leave]-active当中
  // .v-enter-active：进入过程  .v-leave-active：离开过程
  .simplify-enter-active, .simplify-leave-active{
    transition: 0.3s;
  }
  // 进入的终点和离开的起点，是相同的
  .simplify-enter-to, .simplify-leave{
    transform: translateX(0px);
  }
</style>