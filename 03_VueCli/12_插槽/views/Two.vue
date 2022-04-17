<template>
  <div class="two">

    <!--
      作用域插槽必须要有template
      使用template来接受数据时，有以下几种方式：

      当插槽为默认插槽时（即没有名称）
      1 scope="data"
      2 slot-scope="data"
      3 v-slot:default="data"
      4 #default="data"（3的简写形式）

      当插槽为具名插槽时（插槽有名称，名称为mySlot）
      1 scope="data" slot="mySlot"
      2 slot-scope="data" slot="mySlot"
      3 v-slot:mySlot="data"
      4 #mySlot="data"（3的简写形式）
    -->

    <Category title="游戏">
      <template slot-scope="data" slot="mySlot">
        <ul>
          <li v-for="(game, index) in data.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </Category>
    
    <Category title="游戏">
      <template v-slot:mySlot="data">
        <ol>
          <li v-for="(game, index) in data.games" :key="index">{{ game }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template #mySlot="data">
        <h4 v-for="(game, index) in data.games" :key="index">{{ game }}</h4>
      </template>
    </Category>

  </div>
</template>

<script>
import Category from "../components/Category";
export default {
  name: "Two",
  components: {
    Category
  },
  data(){
    return {}
  },
};
</script>

<style lang="less">
  .two{
    display: flex;
    justify-content: space-around;
  }
</style>
