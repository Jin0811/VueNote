<template>
  <div id="app">
    <el-button type="primary" @click="getStudent">获取学生信息</el-button>
    <el-button type="primary" @click="getCars">获取汽车信息</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data(){
    return {

    }
  },
  methods: {
    getStudent(){
      axios.get("http://localhost:8080/api/students").then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err.message);
      });
    },
    getCars(){
      axios.get("http://localhost:8080/demo/cars").then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err.message);
      });
    }
  }
};
</script>
