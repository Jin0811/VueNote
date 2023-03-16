<template>
  <div class="father">
    <h2 class="title">6 provide / inject 适用于 隔代组件通信</h2>
    <h2>Father 组件</h2>
    <div>Father组件的count {{ count }}</div>
    <el-button size="small" type="primary" @click="changeData(1)">修改count数据</el-button>
    <el-button size="small" type="primary" @click="changeData(2)">修改person数据</el-button>
    <Child />
  </div>
</template>

<script>
/**
 * 1 provide支持对象写法和函数写法（函数返回一个对象）
 * 2 provide 和 inject 绑定并不是可响应的，这是刻意为之的，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的
 * 3 代码执行顺序：data -> provide -> created -> mounted
 */
import Child from "./Child.vue";
export default {
  name: "Father",
  components: {
    Child,
  },
  provide(){
    return{
      count: this.count, // 非响应式的数据，Father组件修改count，GrandSon的count不会发生变化
      person: this.person, // 响应式的数据，Father组件修改person，GrandSon的person会跟随进行变化
    }
  },
  data() {
    return {
      count: 0,
      person: {
        name: "张三",
        age: 18,
      }
    }
  },
  methods: {
    // 修改数据
    changeData(type){
      if (type == 1) {
        this.count++;
      } else {
        this.person.age++;
      }
    },
  },
}
</script>