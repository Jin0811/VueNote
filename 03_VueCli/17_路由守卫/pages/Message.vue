<template>
  <div>
    <h2>Message组件</h2>

    <div>
      <div class="message-item" v-for="item in messageList" :key="item.id">
        <p>{{ item.id }} - {{ item.title }}</p>
        <div class="btn-container">
          <el-button size="small" type="primary" @click="pushShow(item)">push查看</el-button>
          <el-button size="small" type="primary" @click="replaceShow(item)">replace查看</el-button>
        </div>
      </div>
    </div>

    <div class="view-container">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      active: '',
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ]
    }
  },
  methods: {
    // pushShow
    pushShow(item){
      this.$router.push({
        name: "Detail",
        query: {
          id: item.id,
          title: item.title,
        }
      });
    },
    // replaceShow
    replaceShow(item){
      this.$router.replace({
        name: "Detail",
        query: {
          id: item.id,
          title: item.title,
        }
      });
    },
  }
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