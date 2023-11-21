<template>
  <div class="parent">
    <h1>父组件</h1>

    <Child
      :dataForChild="dataForChild"
      @handlerForChild="handlerForChild"
      :dataForGrandSon="dataForGrandSon"
      @handlerForGrandSon="handlerForGrandSon"
      info="这是个文本信息"
    />
  </div>
</template>

<script setup>
/**
 * vue2当中
 * $attrs 接收参数
 * $listeners 接收事件
 * 
 * vue3当中
 * $attrs 同时接收参数和事件
 * 
 * Child会接收dataForChild和handlerForChild
 * Child中的useAttrs，会获取到dataForGrandSon/handlerForGrandSon/info
 * GrandSon会接收dataForGrandSon和handlerForGrandSon
 * GrandSon中的useAttrs，会获取到info
 * 
 * info未被任何组件所接收，将会“回退”且作为普通的html attribute应用在子组件的根元素上
 * 在vue2.4及以后的版本，新增了inheritAttrs选项，inheritAttrs的默认值为true，即未被接受的props会进行“回退”
 * 将inheritAttrs的值设为false, 这些默认的行为会禁止掉，即未被接受的props不会出现在子元素的根元素上
 * 
 * Child
 *  - dataForChild
 *  - handlerForChild
 * GrandSon
 *  - dataForGrandSon
 *  - handlerForGrandSon
 * - info
 */
import { ref } from "vue";
import Child from "./Child.vue";

const dataForChild = ref("给Child的数据");
const dataForGrandSon = ref("给GrandSon的数据");

const handlerForChild = (data) => {
  console.log("接收到来自Child的数据", data);
};
const handlerForGrandSon = (data) => {
  console.log("接收到来自GrandSon的数据", data);
};
</script>
