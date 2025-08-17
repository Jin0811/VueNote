<template>
  <div class="container teleport">
    <h2 class="title">父组件</h2>
    <img src="https://www.atguigu.com/images/index_new/logo.png" alt="" />

    <br />

    <Modal />
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "Teleport" });

import Modal from "@/components/20_modal.vue";
</script>

<style lang="scss" scoped>
/*
  在 CSS 中，当父元素应用了 filter 属性时，确实会导致子元素的 position: fixed 定位失效
  这是因为 filter 属性会创建一个新的包含块(containing block)，改变了元素的定位上下文
  
  解决方案：
  1、使用vue提供的Teleport组件
  2、将filter属性直接应用在img上
*/

.teleport {
  filter: saturate(20%);
  img {
    width: 200px;
  }
}
</style>
