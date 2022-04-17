<template>
  <div>
    <p @click="show">名称：{{ name }}</p>
    <p>地址：{{ address }}</p>
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
  methods: {
    show(){
      this.hello()
    }
  }
}
</script>