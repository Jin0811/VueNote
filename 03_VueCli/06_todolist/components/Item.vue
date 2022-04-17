<template>
  <div class="item">
    <li>
      <label>
        <!--
          这里可以直接使用v-model，这样不用一层一层地去传递事件，但是这样违反了不能修改props值的原则
          但是这里不会进行报错，因为这里只是修改了对象当中的一个属性，并没有完全修改props当中的对象
          虽然不会报错，但是不建议这样写
          <input type="checkbox" v-model="todo.done"/>
        -->
 
        <input type="checkbox" :checked="todo.done" @click="handleCheck"/>
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ['todo', 'checkTodo', 'deleteTodo'],
  data() {
    return {};
  },
  methods: {
    // 处理勾选和取消勾选
    handleCheck(){
      this.checkTodo(this.todo.id);
    },
    // 处理删除
    handleDelete(){
      if(confirm("确认删除？")){
        this.deleteTodo(this.todo.id);
      }
    },
  }
};
</script>

<style lang="less" scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>