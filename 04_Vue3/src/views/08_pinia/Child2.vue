<template>
  <div class="child">
    <h2>子组件2</h2>
    <p>count: {{ countStore.count }}</p>
    <p>doubleCount: {{ countStore.doubleCount }}</p>

    <h3>待办列表</h3>
    <ul>
      <li v-for="item in todoStore.todoList" :key="item.id">{{ item.title }}</li>
    </ul>
    <p>总数为 {{ todoStore.total }}</p>
    <button @click="handler">添加一个待办事项</button>
  </div>
</template>

<script setup>
import useCountStore from "@/piniaStore/modules/count";
import useTodoStore from "@/piniaStore/modules/todo";

const countStore = useCountStore();
const todoStore = useTodoStore();

const handler = () => {
  // todoStore.todoList.push({ id: 4, title: "看电影", isDone: false });
  todoStore.updateTodo({ id: 4, title: "看电影", isDone: false });
};
</script>
