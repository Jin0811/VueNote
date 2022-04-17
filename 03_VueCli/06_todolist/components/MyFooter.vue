<template>
  <div class="my-footer">
    <div class="todo-footer">
      <label>
        <input type="checkbox" v-model="isAll" />
      </label>
      <span>
        <span>已完成 {{ doneTotal }}</span> / 全部 {{ total }}
      </span>
      <button class="btn btn-danger" @click="clear">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", 'clearAllTodo'],
  computed: {
    isAll: {
      get(){
        return this.doneTotal == this.total && this.total > 0;
      },
      set(value){
        this.checkAllTodo(value);
      }
    },
    total(){
      return this.todos.length;
    },
    doneTotal(){
      return this.todos.reduce((pre, current) => {
        return current.done ? pre+1 : pre;
      }, 0);
    }
  },
  methods: {
    clear(){
      this.clearAllTodo();
    }
  }
};
</script>

<style lang="less" scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>