<template>
  <div>
    <div>
      <span>数字一：</span>
      <input type="number" v-model="countNums.num1" step="1">
    </div>
    <div>
      <span>数字二：</span>
      <input type="number" v-model="countNums.num2" step="1">
    </div>
    <div>
      <span>计算结果为：</span>
      <input type="number" v-model="count" step="2">
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  /**
   * 计算属性
   */

  // vue2当中可以读取到vue3当中的数据，所以第一种方法可以使用vue2当中的计算属性
  // computed: {
  //   count(){
  //     return this.countNums.num1 + this.countNums.num2;
  //   }
  // },

  setup(){

    let countNums = reactive({
      num1: 2,
      num2: 4,
    });

    // vue3的计算属性，推荐使用这种方式
    // let count = computed(() => {
    //   return countNums.num1 + countNums.num2;
    // });

    // 上面的写法，没有考虑到修改计算属性，是一种简写形式，这里是完整的写法
    let count = computed({
      get(){
        return countNums.num1 + countNums.num2;
      },
      set(value){
        countNums.num1 = Number(value) / 2;
        countNums.num2 = Number(value) / 2;
      }
    });

    return {
      countNums,
      count
    };
  }
}
</script>