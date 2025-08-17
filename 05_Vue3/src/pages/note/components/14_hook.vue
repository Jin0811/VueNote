<template>
  <div class="container">
    <h2 class="title">自定义Hook</h2>
    <button @click="getDog">添加一个狗狗</button>
    <div class="img-list">
      <img v-for="(item, index) in dogList" :key="index" :src="item" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "Hook" });
import useDog from "@/hooks/useDog";
const { dogList, getDog } = useDog();
</script>

<style lang="scss" scoped>
.img-list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
  margin-top: 20px;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
}
</style>
