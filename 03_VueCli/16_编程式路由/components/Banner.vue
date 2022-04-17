<template>
  <div class="banner">
    <h1>Vue Router Demo</h1>
    <div>
      <el-button size="small" type="primary" @click="forward">前进</el-button>
      <el-button size="small" type="primary" @click="back">回退</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    forward(){
      // this.$router.go(1);
      this.$router.forward();
    },
    back(){
      // this.$router.go(-1);
      this.$router.back();
    }
  }
}
</script>

<style lang="less" scoped>
  .banner{
    display: flex;
    & > div{
      margin-left: 40px;
      display: flex;
      align-items: center;
    }
  }
</style>