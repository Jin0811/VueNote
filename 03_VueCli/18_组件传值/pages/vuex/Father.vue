<template>
  <div class="father">
    <h2 class="title">7 vuex 适用于任意组件通信</h2>
    <h2>Father 组件</h2>
    <div>Father组件从Vuex获取的数据为：{{count}}</div>
    <el-button size="small" type="primary" @click="changeCount">Father修改vuex当中的数据</el-button>
    <Child />
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Father",
  components: {
    Child,
  },
  data() {
    return {}
  },
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    changeCount(){
      this.$store.commit("Increment", 1);
    },
  },
}
</script>