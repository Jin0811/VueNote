<template>
  <div class="child">
    <h3>Child 组件</h3>
    <GrandSon />
  </div>
</template>

<script>
import GrandSon from "./GrandSon.vue";
export default {
  name: "Child",
  components: {
    GrandSon,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>