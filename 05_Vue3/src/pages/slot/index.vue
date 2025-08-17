<template>
  <div class="container">
    <h1 class="title">默认插槽</h1>
    <DefaultSlot title="游戏">
      <div v-for="(item, index) in gameList" :key="index">{{ item.name }}</div>
    </DefaultSlot>
  </div>

  <div class="container">
    <h1 class="title">具名插槽</h1>
    <NamedSlot title="图片">
      <div class="img-list">
        <img v-for="(item, index) in imgList" :key="index" :src="item.src" alt="" />
      </div>
      <template v-slot:foot>底部插槽：展示常用的微信头像</template>
    </NamedSlot>
  </div>

  <div class="container">
    <h1 class="title">作用域插槽</h1>
    <ScopedSlot title="无序列表">
      <template v-slot="params">
        <ul>
          <li v-for="(item, index) in params.hobbyList" :key="index">{{ item.name }}</li>
        </ul>
      </template>
    </ScopedSlot>

    <ScopedSlot title="有序列表">
      <template v-slot:default="params">
        <ol>
          <li v-for="(item, index) in params.hobbyList" :key="index">{{ item.name }}</li>
        </ol>
      </template>
    </ScopedSlot>

    <ScopedSlot title="H3列表">
      <template v-slot="{ hobbyList }">
        <h3 v-for="(item, index) in hobbyList" :key="index">{{ item.name }}</h3>
      </template>
    </ScopedSlot>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DefaultSlot from "./components/default_slot/index.vue";
import NamedSlot from "./components/named_slot/index.vue";
import ScopedSlot from "./components/scoped_slot/index.vue";

const gameList = ref([
  { id: 1, name: "英雄联盟" },
  { id: 2, name: "地下城与勇士" },
  { id: 3, name: "穿越火线" },
]);

const imgList = ref([
  { id: 1, src: "https://wx2.sinaimg.cn/mw690/008g8FqPly1ht9axcgf56j30u00u0jto.jpg" },
  { id: 2, src: "https://p1.itc.cn/q_70/images03/20220314/44925e6845494810998401159bcdd4ed.jpeg" },
  { id: 3, src: "https://pic.rmb.bdstatic.com/bjh/240115/5eb574c8235cdc8ecc9c8bd82f4ba42639.jpeg@h_1280" },
]);
</script>

<style lang="scss" scoped>
.img-list {
  display: flex;
  column-gap: 20px;
  & > img {
    width: 200px;
    height: 200px;
  }
}
</style>
