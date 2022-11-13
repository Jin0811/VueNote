<template>
  <div>
    
  </div>
</template>

<script>
import { isRef, isReactive, isReadonly, isProxy, ref, reactive, readonly } from "vue";
export default {
  /**
   * isRef: 检查一个值是否为一个ref对象
   * isReactive: 检查一个对象是否是由reactive创建的响应式代理对象
   * isReadonly: 检查一个对象是否是由readonly创建的只读代理对象
   * isProxy: 检查一个对象是否是由reactive或readonly方法创建的代理对象
   */

  setup(){
    let num = ref(0);
    let car = reactive({ name: "奔驰", price: 40 });
    let carReadOnly = readonly(car);

    console.log(`num isRef: ${ isRef(num) }`);
    console.log(`car isReactive: ${ isReactive(car) }`);
    console.log(`car isProxy: ${ isProxy(car) }`);
    console.log(`carReadOnly isProxy: ${ isProxy(carReadOnly) }`);
    console.log(`carReadOnly isReadonly: ${ isReadonly(carReadOnly) }`);

    return {};
  }
}
</script>