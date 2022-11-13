<template>
  <div>
    <h1>当前鼠标点击区域的坐标为：</h1>
    <h2>X：{{ point.x }}</h2>
    <h2>Y：{{ point.y }}</h2>
  </div>
</template>

<script>
import usePoint from "@/hooks/usePoint";
export default {
  /**
   * hook：本质是一个函数，把setup函数中所使用到的组合式API进行了封装
   * 类似于vue2当中的mixin
   * 优势：复用代码，让setup当中的逻辑更加清晰易懂
   */

  setup(){
    // 使用usePoint hook
    const point = usePoint();

    return {
      point
    };
  }
}
</script>