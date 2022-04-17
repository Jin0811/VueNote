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
  // 方式一：
  // props: ['name', 'age'],

  // 方式二：
  // props: {
  //   name: String,
  //   age: Number
  // },

  // 方式三：
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 18
    }
  },

  data() {
    return {}
  },
}
</script>