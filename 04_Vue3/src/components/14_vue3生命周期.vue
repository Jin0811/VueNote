<template>
  <div>
    <h1>SUM：{{ sum }}</h1>
    <button @click="changeSum">修改SUM</button>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
export default {
  setup(){
    let sum = ref(0);
    function changeSum(){
      sum.value++;
    }

    /**
     * 通过组合式API来使用声明周期
     * beforeCreate     --->      setup
     * created          --->      setup
     * beforeMount      --->      onBeforeMount
     * mounted          --->      onMounted
     * beforeUpdate     --->      onBeforeUpdate
     * updated          --->      onUpdated
     * beforeUnmount    --->      onBeforeUnmount
     * unmounted        --->      onUnmounted
     * 
     * 当同时使用配置式的生命周期和组合式API时，组合式的API生命周期钩子会先执行
     */
    console.log("beforeCreate created setup");
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return {
      sum,
      changeSum
    };
  },

  /**
   * 通过配置项的形式来使用生命周期，原先的vue2当中配置形式的生命周期依然可以在vue3当中使用
   * 注意：
   * 1、vue2的配置项当中可以读取到vue3的数据
   * 2、vue2当中的beforeDestroy和destroyed，在vue3当中名字为：beforeUnmount和unmounted
   * 3、vue2当中的beforeDestroy和destroyed，不会再生效
   */
  // #region
  // beforeCreate(){
  //   console.log(this.sum);
  //   console.log("beforeCreate");
  // },
  // created(){
  //   console.log("created");
  // },
  // beforeMount(){
  //   console.log("beforeMount");
  // },
  // mounted(){
  //   console.log("mounted");
  // },
  // beforeUpdate(){
  //   console.log("beforeUpdate");
  // },
  // updated(){
  //   console.log("updated");
  // },
  // beforeUnmount(){
  //   console.log("beforeUnmount");
  // },
  // unmounted(){
  //   console.log("unmounted");
  // }
  // #endregion
}
</script>