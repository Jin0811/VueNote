<template>
  <div class="grandson">
    <h2>Grandson: {{ name }}-{{ price }}</h2>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  setup(){
    let car = inject("car");
    return { ...toRefs(car) };
  }
}
</script>

<style scoped>
  .grandson{
    color: #fff;
    padding: 10px;
    background: #1abc9c;
  }
</style>