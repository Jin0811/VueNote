<template>
  <div class="child">
    <h2>Child</h2>
    <Grandson></Grandson>
  </div>
</template>

<script>
import Grandson from "./21_2_grandson";
export default {
  components: {
    Grandson
  },
  setup(){
    return {};
  }
}
</script>

<style scoped>
  .child{
    color: #fff;
    padding: 10px;
    background: #2ecc71;
  }
</style>