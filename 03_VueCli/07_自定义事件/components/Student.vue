<template>
  <div>
    <h4>学生组件</h4>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <el-button type="primary" @click="send">发送学生名称</el-button>
    <el-button type="primary" @click="unbind">解绑自定义事件</el-button>
    <el-button type="primary" @click="death">销毁当前student组件的实例（VC）</el-button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18
    }
  },
  methods: {
    send(){
      this.$emit('getStudentName', this.name);
    },
    // 解绑
    unbind(){
      this.$off("getStudentName"); // 解绑一个自定义事件
    },
    // 销毁当前实例
    death(){
      // 销毁之后，当前实例上的自定义事件都不会再起作用
      this.$destroy();
    }
  }
}
</script>