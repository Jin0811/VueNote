<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    
    <!-- 默认插槽 -->
    <!-- <slot></slot> -->

    <!-- 具名插槽 -->
    <slot name="center"></slot>
    <slot name="footer"></slot>

    <!-- 作用域插槽 -->
    <!-- <slot :games="games"></slot> -->
    <slot name="mySlot" :games="games"></slot>

  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['title'],
  data(){
    return {
      games: ['红色警戒', '穿越火线', '地下城', '超级玛丽'],
    }
  },
};
</script>

<style lang="less" scoped>
  .category{
    width: 200px;
    padding-bottom: 20px;
    h3{
      text-align: center;
    }
    background-color: #f1f1f1;

    img{
      width: 90%;
      margin: 0 5%;
    }
  }
</style>
