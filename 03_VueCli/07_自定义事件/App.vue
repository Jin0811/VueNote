<template>
  <div id="app">
    <h1>{{ msg }}，{{ studentName }}</h1>

    <hr>

    <!-- 通过父组件给子组件绑定一个自定义事件，来实现子给父传递数据 -->
    <!-- <Student v-on:getStudentName="getStudentName"></Student> -->

    <!-- 手动给组件绑定事件，这样比较灵活，譬如加一个延迟，可以实现延迟一段时间之后再绑定事件 -->
    <Student ref="student"></Student>
  </div>
</template>

<script>
import Student from "@/components/Student";
export default {
  name: "app",
  components: {
    Student
  },
  data(){
    return {
      msg: "组件通信",
      studentName: "",
    }
  },
  mounted(){
    this.$refs.student.$on("getStudentName", this.getStudentName);
  },
  methods: {
    getStudentName(name){
      this.studentName = name;
      console.log("App收到了学生名称：" + name);
    },
  }
};
</script>

<style lang="less">

</style>