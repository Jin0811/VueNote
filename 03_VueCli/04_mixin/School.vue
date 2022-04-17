<template>
  <div>
    <p>名称：{{ name }}</p>
    <p>地址：{{ address }}</p>
    <el-button type="primary" @click="showName">显示名称</el-button>
    <hr>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "XXX学校",
      address: "XXX街道",
    }
  },
}
</script>