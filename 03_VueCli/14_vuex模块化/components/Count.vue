<template>
  <div>
    <h1>Count的值为：{{ sum }}</h1>
    <h2>放大10倍的Sum：{{ bigSum }}</h2>
    <h3>学校：{{ school }}，专业：{{ subject }}</h3>
    <h3 style="color:red;">下方组件的总人数为：{{ personList.length }}</h3>
    <select v-model="selectValue">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(selectValue)">+加</button>
    <button @click="decrement(selectValue)">-减</button>
    <button @click="incrementOdd(selectValue)">当前求和为奇数再加</button>
    <button @click="incrementWait(selectValue)">延迟加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data(){
    return {
      selectValue: 1,
    }
  },
  computed: {
    // 没有开启命名空间：
    // <div>{{ countAbout.sum }}-{{ personAbout.personList.length }}</div>
    // ...mapState(['countAbout', 'personAbout']),

    // 开启了命名空间，设置了 namespaced 为true
    // 只有开启了命名空间，才能这样使用
    ...mapState("countAbout", ['sum', 'school', 'subject']),
    ...mapState("personAbout", ['personList']),

    ...mapGetters("countAbout", ['bigSum']),
  },
  methods: {
    // Mutations
    ...mapMutations("countAbout", { increment: "Increment", decrement: "Decrement" }),

    // Actions
    ...mapActions("countAbout", ["incrementOdd", "incrementWait"]),
  }
}
</script>

<style lang="less" scoped>
  select, button{
    margin-right: 10px;
  }
</style>