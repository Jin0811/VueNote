/**
 * pinia 组合式写法
 *
 * const store = useTodoStore();
 *
 * 访问state
 * store.todoList
 * store.total
 *
 * 重置store和替换state
 * 手动清空或者替换数据即可
 *
 * 修改state
 * store.todoList.push({ id: 4, title: "看电影", isDone: false });
 * store.updateTodo({ id: 4, title: "看电影", isDone: false });
 */

import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useTodoStore = defineStore("todo", () => {
  // State
  const todoList = ref([
    { id: 1, title: "吃饭", isDone: true },
    { id: 2, title: "睡觉", isDone: false },
    { id: 3, title: "打豆豆", isDone: false },
  ]);

  // Getters
  const total = computed(() => {
    return todoList.value.length;
  });

  // Actions
  const updateTodo = (item) => {
    todoList.value.push(item);
  };

  return {
    todoList,
    total,
    updateTodo,
  };
});

export default useTodoStore;
