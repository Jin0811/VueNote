<template>
  <div>
    <h2>Message组件</h2>

    <!-- 字符串方式传递query参数 -->
    <!-- <router-link 
      :to="`/home/message/detail?id=${item.id}&title=${item.title}`" 
      class="message-item" 
      v-for="(item, index) in messageList" :key="index"
    >
      <span>{{ index+1 }}、{{ item.title }}</span>
    </router-link> -->

    <!-- 对象方式传递字符串参数 -->
    <!-- <router-link 
      :to="{ name: 'Detail', query: { id: item.id, title: item.title } }" 
      class="message-item" 
      v-for="(item, index) in messageList" :key="index"
    >
      <span>{{ index+1 }}、{{ item.title }}</span>
    </router-link> -->

    <!-- 携带params参数 -->
    <!-- <router-link 
      :to="`/home/message/detail/${item.id}/${item.title}`" 
      class="message-item" 
      v-for="(item, index) in messageList" :key="index"
    >
      <span>{{ index+1 }}、{{ item.title }}</span>
    </router-link> -->

    <!--
      对象写法，携带params参数
      注意：携带params参数时，对象写法，不允许使用path，必须要使用name
    -->
    <router-link 
      :to="{ 
        name: 'Detail', 
        params: { id: item.id, title: item.title }
      }" 
      class="message-item" 
      v-for="(item, index) in messageList" :key="item.id"
    >
      <span>{{ index+1 }}、{{ item.title }}</span>
    </router-link>

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
}
</script>

<style lang="less" scoped>
  .message-item{
    cursor: pointer;
    padding: 10px 0;
    display: block;
    color: #000;
    width: fit-content;
  }
  .view-container{
    border-top: 1px solid #ccc;
    padding-top: 10px;
    margin-top: 10px;
  }
</style>