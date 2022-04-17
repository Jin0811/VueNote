<template>
  <div>
    <h4>学校组件</h4>
    <p>学校名称：{{ name }}</p>
    <p>学校名称：{{ address }}</p>
    <el-button type="primary" @click="send">发送学校名称</el-button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "XXX学校",
      address: "XXX路"
    }
  },
  methods: {
    send(){
      this.getSchoolName(this.name);
    }
  }
}
</script>