<template>
  <div class="one">
    <Category title="美食">
      <img slot="center" src="https://img1.baidu.com/it/u=305515241,3216679417&fm=26&fmt=auto" alt="">
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <!--
        指定DOM添加到哪一个插槽当中，可以在DOM上添加 slot="" 属性，属性值为插槽的名称
        v-slot:footer 为2.6新添加的语法
      -->
      <template v-slot:footer>
        <div style="display:flex;justify-content:space-around;">
          <a href="#">按钮1</a>
          <a href="#">按钮2</a>
        </div>
        <a href="#" style="display:block;width:100%;text-align:center;">更多游戏</a>
      </template>
    </Category>

    <Category title="电影">
      <img slot="center" src="https://img2.baidu.com/it/u=2883734087,1827502164&fm=26&fmt=auto" alt="">
      <a slot="footer" href="#" style="display:block;width:100%;text-align:center;">更多电影</a>
    </Category>
  </div>
</template>

<script>
import Category from "../components/Category";
export default {
  name: "one",
  components: {
    Category
  },
  data(){
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '地下城', '超级玛丽'],
      films: ['《你好，李焕英》', '《拆弹专家》', '《夏洛特烦恼》', '《功夫》'],
    }
  },
};
</script>

<style lang="less">
  .one{
    display: flex;
    justify-content: space-around;
  }
</style>
