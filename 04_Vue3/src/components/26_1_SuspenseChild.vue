<template>
  <div class="child">
    <h2>SuspenseChild</h2>
    <h2>{{ sum }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  /**
   * 
   */

  setup(){
    let sum = ref(0);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(sum);
      }, 2000);
    });
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