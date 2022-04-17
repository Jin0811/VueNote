<template>
  <div id="app">
    <Student name="张三"></Student>
    <Student name="李四" :age="20"></Student>
  </div>
</template>

<script>
import Student from "./Student";
export default {
  name: 'app',
  components: {
    Student
  },
}
</script>
