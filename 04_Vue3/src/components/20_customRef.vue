<template>
  <div>
    <input type="text" v-model="word">
    <h3>{{ word }}</h3>
  </div>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  /**
   * 
   */

  setup(){
    // let word = ref("hello"); // 使用vue提供的ref

    // 自定义的ref
    function myRef(value){
      let timer = null;
      const myCustomRef = customRef((track, trigger) => {
        return {
          get(){
            console.log("读取了myRef当中的数据");
            track(); // 通知vue追踪数据的变化
            return value;
          },
          set(newValue){
            console.log(`修改了myRef当中的数据，修改后的数据为：${newValue}`);
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 通知vue重新解析模板
            }, 500);
          }
        };
      });
      return myCustomRef;
    }

    let word = myRef("hello");

    return {
      word
    };
  }
}
</script>