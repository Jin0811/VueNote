<template>
  <div class="my-header">
    <div class="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid"; // uuid的精简版，可以随机生成一个id
export default {
  name: "MyHeader",
  props: ['addTodo'],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add(){
      if(!this.title.trim()){ return }
      const todoObj = {
        id: nanoid(),
        title: this.title,
        done: false,
      };
      this.addTodo(todoObj);
      this.title = "";
    }
  }
};
</script>

<style lang="less" scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>