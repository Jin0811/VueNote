<template>
  <div class="child">
    <h3>Child 组件</h3>
    <el-button size="small" type="primary" @click="handleSendData">Child传递数据</el-button>
    <GrandSon v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import GrandSon from "./GrandSon.vue";
export default {
  name: "Child",
  components: {
    GrandSon,
  },
  props: ["name"],
  inheritAttrs: false,
  data() {
    return {}
  },
  methods: {
    handleSendData(){
      this.$emit("funcForChild", "Child");
    }
  },
}
</script>