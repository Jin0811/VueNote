<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <hr>
    <School></School>
    <hr>
    <Student></Student>
  </div>
</template>

<script>
import School from "@/components/School";
import Student from "@/components/Student";
export default {
  name: "app",
  components: {
    School,
    Student
  },
  data(){
    return {
      msg: "你好啊",
    }
  },
};
</script>