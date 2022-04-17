<template>
  <div>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
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