<template>
  <div class="father">
    <h2 class="title">5 $attrs/$listeners 适用于隔代组件通信</h2>
    <h2>Father 组件</h2>
    <Child name="张三" age="18" v-on:funcForChild="funcForChild" v-on:funcForGrandSon="funcForGrandSon" />

    <!-- 简写形式 -->
    <!-- <Child name="张三" age="18" @funcForChild="funcForChild" @funcForGrandSon="funcForGrandSon" /> -->
  </div>
</template>

<script>
/**
 * 在vue2.4以前的版本当中，假如Father组件给Child组件传递了name、age两个props
 * 但是Child的props当中只声明接收了name，那么没有被接收的age，将会“回退”且作为普通的HTML特性应用在子组件的根元素上
 * 即 <div class="child" age="18"></div>
 * 
 * 在vue2.4及以后的版本，新增了inheritAttrs选项，inheritAttrs的默认值为true，即未被接受的props会进行“回退”
 * 将inheritAttrs的值设为false, 这些默认的行为会禁止掉
 * 但是通过实例属性 $attrs 可以将这些特性生效，且可以通过v-bind绑定到子组件的非根元素上
 * 
 * $listeners包含了父作用域中的(不含.native修饰器的)v−on事件监听器，可以通过v−on="listeners"传入内部组件
 */
import Child from "./Child.vue";
export default {
  name: "Father",
  components: {
    Child,
  },
  data() {
    return {}
  },
  methods: {
    funcForChild(data){
      console.log("接受到Child传递的数据", data);
    },
    funcForGrandSon(data){
      console.log("接受到GrandSon传递的数据", data);
    }
  },
}
</script>