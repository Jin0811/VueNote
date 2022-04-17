<template>
  <div>
    <h2>About组件</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  // 通过路由规则，进入该组件时被调用（进来之前）
  beforeRouteEnter (to, from, next) {
    next(); // 不放行，就不能进入此组件
  },
  // 通过路由规则。离开该组件时被调用（离开之前）
  beforeRouteLeave (to, from, next) {
    next(); // 不放行，就不能离开此组件
  }
}
</script>