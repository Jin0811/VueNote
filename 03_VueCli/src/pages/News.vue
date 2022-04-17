<template>
  <div>
    <h2>News组件</h2>

    <div>
      <h5 :style="{ opacity: opacity }">欢迎查看News</h5>
      <div class="message-item" v-for="item in newsList" :key="item.id">
        <p>{{ item.id }} - {{ item.title }}</p>
        <div class="btn-container">
          <input type="text">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsList: [
        { id: "001", title: "新闻1" },
        { id: "002", title: "新闻2" },
        { id: "003", title: "新闻3" },
      ],
      opacity: 1,
      timer: null,
    }
  },
  // 当组件被缓存了，则当前组件会多出来两个生命周期函数：activated和deactivated
  activated(){
    console.log("News激活");
    this.timer = setInterval(() => {
      console.log("定时器正在工作");
      this.opacity -= 0.1;
      if(this.opacity <= 0){
        this.opacity = 1;
      }
    }, 200);
  },
  deactivated(){
    console.log("News失活");
    clearInterval(this.timer);
  },
  // mounted(){
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.1;
  //     if(this.opacity <= 0){
  //       this.opacity = 1;
  //     }
  //   }, 200);
  // },
  // beforeDestroy(){
  //   // 在 beforeDestroy 当中是没有办法关闭定时器的，因为News组件被缓存了，不会销毁
  //   clearInterval(this.timer);
  // },
}
</script>

<style lang="less" scoped>
  .message-item{
    padding: 10px 0;
    color: #000;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
  }
  .btn-container{
    margin-left: 100px;
  }
  .view-container{
    padding-top: 10px;
    margin-top: 10px;
  }
</style>