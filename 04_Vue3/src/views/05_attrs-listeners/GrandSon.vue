<template>
  <div class="grand-son">
    <h2>孙子组件</h2>
    <button @click="handleTest">GrandSon按钮</button>
  </div>
</template>

<script>
/**
 * info未被任何组件所接收，将会“回退”且作为普通的html attribute应用在子组件的根元素上
 * 在vue2.4及以后的版本，新增了inheritAttrs选项，inheritAttrs的默认值为true，即未被接受的props会进行“回退”
 * 将inheritAttrs的值设为false, 这些默认的行为会禁止掉，即未被接受的props不会出现在子元素的根元素上
 * 
 * vue3的setup语法糖当中，如果想要设置inheritAttrs，则需要新添加一个script块来进行配置
 */
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { useAttrs } from "vue";

const props = defineProps(["dataForGrandSon"]);
const emit = defineEmits(["handlerForGrandSon"]);

const attrs = useAttrs();
console.log(attrs);

const handleTest = () => {
  emit("handlerForGrandSon", 200);
};
</script>
