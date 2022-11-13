<template>
  <div>
    <h1>{{ name }} - {{ age }}</h1>
    <button @click="test">子组件触发父组件方法</button>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="slotOne"></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["sayName"], // 显式声明子组件接收了哪些自定义事件
  props: ["name", "age"],
  setup(props, context){
    console.log(props);
    console.log(context.slots);

    function test(){
      context.emit("sayName", "子组件传递的数据");
    }

    return {
      test
    };
  }
}
</script>