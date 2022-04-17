<template>
  <div class="home">
    <h2>Home组件</h2>
    <div class="tabs">
      <router-link to="/home/news" active-class="home-active">News</router-link>
      <router-link to="/home/message" active-class="home-active">Message</router-link>
    </div>
    <div class="home-content">
      <!-- 缓存路由：include和exclude-->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style lang="less" scoped>
  .home{
    height: 100%;
  }
  h2{
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
  .tabs{
    margin-bottom: 15px;
    a{
      font-size: 18px;
      margin-right: 20px;
      color: #000;
    }
    .home-active{
      color: #409EFF;
    }
  }
</style>