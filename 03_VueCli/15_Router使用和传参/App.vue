<template>
  <div id="app">
    <div class="container">
      <Banner></Banner>
      <div class="main-body">
        <div class="menu">
          <router-link to="/home" active-class="active">Home</router-link>
          <!-- 
            :to="{ name: 'About' }" 命名路由
            routerLink默认为push模式，可以使用replace来开启replace模式
          -->
          <router-link replace :to="{ name: 'About' }" active-class="active">About</router-link>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  name: "app",
  components: {
    Banner
  },
  data(){
    return {}
  },
};
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    width: 100vw;
    height: 100vh;
  }
  #app{
    width: 100%;
    height: 100%;
  }
  .container{
    width: 90%;
    height: 100%;
    margin: 0 auto;
    h1{
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
    }
    .main-body{
      display: flex;
      height: calc(100% - 120px);
      margin-top: 10px;
      .menu{
        width: 200px;
        height: 100%;
        border-right: 1px solid #ccc;
        display: flex;
        flex-direction: column;
        padding-right: 10px;
        a{
          padding: 10px;
          font-size: 20px;
          border-radius: 4px;
          color: #000;
        }
        .active{
          background-color: #f1f1f1;
          color: #409EFF;
        }
      }
      .content{
        flex: 1;
        padding: 10px;
      }
    }
  }
</style>
