<template>
  <div id="app">
    <h1 ref="title">Vue学习</h1>
    <School ref="sch"></School>
    <el-button type="primary" @click="showDom">获取Dom</el-button>
  </div>
</template>

<script>
import School from "./School";
export default {
  name: 'app',
  components: {
    School
  },
  methods: {
    showDom(){
      console.log(this.$refs);
      
    }
  }
}
</script>
