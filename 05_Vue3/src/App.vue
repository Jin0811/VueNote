<template>
  <div class="app">
    <div class="top">
      <div class="title">Vue项目</div>
      <div class="nav-list">
        <RouterLink
          class="nav-item"
          active-class="nav-item-active"
          v-for="(item, index) in routes"
          :key="index"
          :to="item.path"
        >
          {{ item.title }}
        </RouterLink>
      </div>
    </div>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { routes } from "@/router";
defineOptions({ name: "App" });
</script>

<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .top {
    height: 80px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    color: royalblue;
    display: flex;
    align-items: center;
    padding: 0 32px;
    .title {
      font-weight: bold;
      font-size: 32px;
      margin-right: 48px;
    }
    .nav-list {
      display: flex;
      align-items: center;
      column-gap: 32px;
      .nav-item {
        font-size: 24px;
        color: #ccc;
      }
      .nav-item-active {
        color: royalblue;
      }
    }
  }
  .content {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
  }
}
</style>
