<template>
  <div class="router-note">
    <div class="link-list">
      <RouterLink class="link-item" active-class="active" to="/routerNote/home">首页</RouterLink>
      <RouterLink class="link-item" active-class="active" :to="{ name: 'News' }">新闻</RouterLink>
      <RouterLink class="link-item" active-class="active" :to="{ path: '/routerNote/about' }">关于</RouterLink>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "Code" });
</script>

<style lang="scss" scoped>
.router-note {
  .link-list {
    display: flex;
    align-items: center;
    column-gap: 24px;
    margin-bottom: 12px;
    .link-item {
      padding: 6px 12px;
      border-radius: 4px;
    }
    .active {
      background-color: royalblue;
      color: #fff;
    }
  }
}
</style>
