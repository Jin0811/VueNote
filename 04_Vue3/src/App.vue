<template>
  <div>
    <div class="container">
      <Demo v-if="isShow" />
    </div>

    <!-- <div class="btn-group">
      <button @click="changeShow">{{ isShow ? "卸载组件" : "挂载组件" }}</button>
    </div> -->
  </div>
</template>

<script>
// import Demo from './components/01_setup1'; // setup返回对象
// import Demo from './components/02_setup2'; // setup返回渲染函数
// import Demo from './components/03_ref'; // Ref
// import Demo from './components/04_reactive'; // reactive
// import Demo from './components/05_vue2响应式原理'; // vue2响应式原理
// import Demo from './components/07_ref和reactive的对比'; // ref和reactive的对比
// import Demo from './components/08_setup注意点'; // setup注意点
// import Demo from './components/10_computed'; // 计算属性
// import Demo from './components/11_watch'; // 监视属性ref定义的数据
// import Demo from './components/12_watchReactiveData'; // 监视属性reactive定义的数据
// import Demo from './components/13_watchEffect'; // watchEffect
// import Demo from './components/14_vue3生命周期'; // vue3生命周期
// import Demo from './components/15_hook'; // hook
// import Demo from './components/16_toRef和toRefs'; // toRef和toRefs
// import Demo from './components/17_shallowReactive和shallowRef'; // shallowReactive和shallowRef
// import Demo from './components/18_readonly和shallowReadonly'; // readonly和shallowReadonly
// import Demo from './components/19_toRaw和markRaw'; // toRaw和markRaw
// import Demo from './components/20_customRef'; // customRef
// import Demo from './components/21_0_provide和inject'; // provide和inject
// import Demo from './components/22_响应式数据的判断'; // 响应式数据的判断
// import Demo from './components/23_CompositionAPI的优势'; // CompositionAPI的优势
// import Demo from './components/25_Teleport'; // Teleport
// import Demo from './components/26_0_Suspense'; // Suspense
// import Demo from './components/28_setup语法糖'; // setup语法糖

// 组件通信
// import Demo from "./views/01_props/Parent.vue"; // props传值
// import Demo from "./views/02_custom-event/Parent.vue"; // 自定义事件
// import Demo from "./views/03_event-bus/Parent.vue"; // 全局事件总线
// import Demo from "./views/04_v-model/Parent.vue"; // v-model
// import Demo from "./views/05_attrs-listeners/Parent.vue"; // attrs-listeners
// import Demo from "./views/06_ref-children-parent/Parent.vue"; // ref-children-parent
import Demo from "./views/07_provide-inject/Parent.vue"; // provide-inject

import { ref } from "vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    let isShow = ref(true);
    function changeShow() {
      isShow.value = !isShow.value;
    }

    return {
      isShow,
      changeShow,
    };
  },
};
</script>

<style>
@import url("./assets/common.css");
.container {
  padding: 15px;
  background-color: #f1f1f1;
}
.btn-group {
  margin-top: 20px;
  padding: 15px;
  background: royalblue;
}
</style>
