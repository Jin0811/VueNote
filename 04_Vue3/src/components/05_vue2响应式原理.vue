<template>
  <div>
    
  </div>
</template>

<script>
export default {
  /**
   * Vue2响应式原理：
   * 对象类型：通过Object.defineProperty对属性的读取、修改进行拦截（数据劫持）
   * 数组类型：通过重写更新数据的一系列方法来实现拦截（对数组的更新方法进行了拦截）
   * 
   * 存在的问题：
   * 新增属性、删除属性，页面不会更新
   * 直接通过下标修改数组，页面不会更新
   */
  
  setup(){

    return {};
  }
}
</script>