<template>
  <div>
    <h1>Count的值为：{{ sum }}</h1>
    <h2>放大10倍的Sum：{{ bigSum }}</h2>
    <h3>学校：{{ school }}，专业：{{ subject }}</h3>
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
    // 传递给mapState一个数组，这样不可以指定别名
    ...mapState(['sum', 'school', 'subject']),

    // mapGetters
    ...mapGetters(['bigSum']),
  },
  methods: {
    // 使用mapMutations来简化代码
    // 注意：这种方式，需要手动进行传值，即在template当中，需要这样写：@click="increment(selectValue)"
    // mapMutations也可以采用数组的方法，但是要求方法名称和mutations当中的名称一致
    // 譬如：方法名称为increment，那mutations当中的名称也要为increment
    // 示例：...mapMutations(['increment', 'decrement'])
    ...mapMutations({
      increment: "Increment",
      decrement: "Decrement",
    }),

    // increment(){
    //   this.$store.commit('Increment', this.selectValue);
    // },
    // decrement(){
    //   this.$store.commit('Decrement', this.selectValue);
    // },

    // 使用mapActions来简化代码
    // 注意：这种方式，需要手动进行传值，即在template当中，需要这样写：@click="incrementOdd(selectValue)"
    // mapMutations也可以采用数组的方法，但是要求方法名称和mutations当中的名称一致
    // 对象的写法：
    // ...mapActions({
    //   incrementOdd: "incrementOdd",
    //   incrementWait: "incrementWait"
    // }),

    // 数组的写法：
    ...mapActions(["incrementOdd", "incrementWait"]),

    // incrementOdd(){
    //   this.$store.dispatch('incrementOdd', this.selectValue);
    // },
    // incrementWait(){
    //   this.$store.dispatch('incrementWait', this.selectValue);
    // },
  }
}
</script>

<style lang="less" scoped>
  select, button{
    margin-right: 10px;
  }
</style>