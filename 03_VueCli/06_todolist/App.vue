<template>
  <div id="app">
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader :addTodo="receive"></MyHeader>

          <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></List>

          <MyFooter :todos="todos" :clearAllTodo="clearAllTodo"></MyFooter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import List from "./components/List.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "app",
  components: {
    MyHeader,
    List,
    MyFooter
  },
  data(){
    return {
      todos: [
        { id: "001", title: "吃饭", done: false },
        { id: "002", title: "睡觉", done: true },
        { id: "003", title: "写代码", done: true },
      ]
    }
  },
  methods: {
    // 传递给子组件一个函数，相当于回调函数，子组件调用此方法，并传递参数
    receive(value){
      this.todos.unshift(value);
    },
    // 选择会取消选择
    checkTodo(id){
      this.todos.forEach(todo => {
        if(todo.id == id){
          todo.done = !todo.done;
        }
      });
    },
    // 删除
    deleteTodo(id){
      this.todos = this.todos.filter(todo => {
        return todo.id != id;
      });
    },
    // 全选或全部取消勾选
    checkAllTodo(done){
      this.todos.forEach((item) => {
        item.done = done;
      });
    },
    // 清空所有已完成的todo
    clearAllTodo(){
      this.todos = this.todos.filter((item) => {
        return !item.done;
      });
    },
  },
};
</script>

<style lang="less">
  /*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
