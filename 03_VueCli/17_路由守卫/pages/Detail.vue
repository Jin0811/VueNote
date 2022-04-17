<template>
  <div>
    <h2>Detail组件</h2>
    <h4>Query形式：</h4>
    <p>消息编号：{{ $route.query.id }}</p>
    <p>消息内容：{{ $route.query.title }}</p>
    <br>

    <!-- <h4>Params形式：</h4>
    <p>消息编号：{{ $route.params.id }}</p>
    <p>消息内容：{{ $route.params.title }}</p>
    <br> -->

    <!-- <h4>Props接收：</h4>
    <p>消息编号：{{ id }}</p>
    <p>消息内容：{{ title }}</p> -->
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ['id', 'title']
}
</script>
