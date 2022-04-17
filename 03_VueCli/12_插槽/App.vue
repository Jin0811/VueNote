<template>
  <div id="app">
    <One></One>
    <br><hr><br>
    <Two></Two>
  </div>
</template>

<script>
import One from "./views/One";
import Two from "./views/Two";
export default {
  name: "app",
  components: {
    One,
    Two
  },
  data(){
    return {}
  },
};
</script>

<style lang="less">

</style>
