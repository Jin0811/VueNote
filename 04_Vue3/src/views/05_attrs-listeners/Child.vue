<template>
  <div class="child">
    <h2>子组件</h2>
    <button @click="handleTest">Child按钮</button>
    <div class="space"></div>

    <GrandSon v-bind="attrs" />
  </div>
</template>

<script setup>
/**
 * useAttrs可以获取组件标签上的，没有被defineProps和defineEmits定义的属性和自定义事件
 * 假如一个属性被defineProps所定义了，则useAttrs就不会再获取这个属性，自定义事件同理
 * 
 * const attrs = useAttrs();
 * attrs可以批量地传递给GrandSon组件
 */

import { useAttrs } from "vue";
import GrandSon from "./GrandSon.vue";

const props = defineProps(["dataForChild"]);
const emit = defineEmits(["handlerForChild"]);

const attrs = useAttrs();

const handleTest = () => {
  emit("handlerForChild", 100);
};
</script>
