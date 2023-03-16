<template>
  <div class="child">
    <h3>Child 组件</h3>
    <div>子组件从Vuex获取的数据为：{{ count }}</div>
    <el-button size="small" type="primary" @click="changeCount">Child修改vuex当中的数据</el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Child",
  data() {
    return {}
  },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    changeCount(){
      this.$store.commit('Increment', 1);
    },
  },
}
</script>