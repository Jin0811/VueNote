<template>
  <div>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <el-button type="primary" @click="showName">显示名称</el-button>
    <hr>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "张三",
      age: 18
    }
  },
}
</script>