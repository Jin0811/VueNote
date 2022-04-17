<template>
  <div>
    <h4>学校组件</h4>
    <p>学校名称：{{ name }}</p>
    <p>学校名称：{{ address }}</p>
  </div>
</template>

<script>
import pubsub from "pubsub-js"; // 引入相关库
export default {
  name: "School",
  data() {
    return {
      name: "XXX学校",
      address: "XXX路",

      pubsubId: "", // 取消订阅时，需要一个pubsub的id
    }
  },
  mounted(){
    // 需要数据的组件，进行订阅消息
    this.pubsubId = pubsub.subscribe("hello",(msgName, value) => {
      console.log(`有组件发布了消息，消息的名称为：${msgName}，消息的值为：${value}`);
    });
  },
  beforeDestroy(){
    // 取消订阅
    pubsub.unsubscribe(this.pubsubId);
  },
}
</script>