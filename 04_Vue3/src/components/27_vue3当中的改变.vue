<template>
  <div>
    <h2>vue3当中的改变</h2>
  </div>
</template>

<script>
export default {
  /**
   * Vue3当中对这些api进行了调整
   * Vue.config.xxxx                    app.config.xxxx
   * Vue.config.productionTip           移除
   * Vue.component                      app.component
   * Vue.directive                      app.directive
   * Vue.mixin                          app.mixin
   * Vue.use                            app.use
   * Vue.prototype                      app.config.globalProperties
   * 
   * 其他改变：
   * 1、data选项应该始终被声明为一个函数
   * 2、移除了keyCode作为v-on的修饰符，同时也不再支持config.keyCodes
   * 3、移除了v-on.native修饰符
   *    父组件中绑定事件：<Child v-on:close="handleClose" v-on:click="handleClick" />
   *    子组件声明自定义事件：emits: ["close"]
   * 4、移除过滤器
   * 5、过渡类名更改
   *    vue2：.v-enter, .v-leave-to{}     .v-leave, .v-enter-to{}
   *    vue3：.v-enter-from, .v-leave-to      .v-leave-from, .v-enter-to
   */

  setup(){
    return {};
  }
}
</script>