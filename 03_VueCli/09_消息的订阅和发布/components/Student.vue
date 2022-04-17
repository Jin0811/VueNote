<template>
  <div>
    <h4>学生组件</h4>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <el-button type="primary" @click="sendStudentName">把学生名称给school</el-button>
  </div>
</template>

<script>
import pubsub from "pubsub-js"; // 引入相关库
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18
    }
  },
  methods: {
    sendStudentName(){
      // 数据的提供者，进行发布消息
      pubsub.publish("hello", 111);
    },
  }
}
</script>