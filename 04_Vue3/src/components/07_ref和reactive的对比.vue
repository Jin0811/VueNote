<template>
  <div>
    
  </div>
</template>

<script>
export default {
  /**
   * ref和reactive的对比
   * 
   * 从定义数据角度对比：
   * 1、ref用于定义基本数据类型
   * 2、reactive用于定义对象（数组）类型数据
   * 备注：ref也可以用来定义对象（数组）类型数据，ref的内部会自动通过reactive转为代理对象
   * 
   * 从原理角度对比：
   * 1、ref通过Object.defineProperty的get和set来实现响应式（数据劫持）
   * 2、reactive通过使用Proxy来实现响应式（数据劫持），通过Reflect操作源对象内部的数据
   * 
   * 从使用角度对比：
   * 1、ref定义的数据，操作数据需要.value，在模板当中读取数据不需要.value
   * 2、reactive定义的数据，操作数据和读取数据，都不需要.value
   */

  setup(){
    return {};
  }
}
</script>