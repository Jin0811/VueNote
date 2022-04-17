<template>
  <div>
    <h1>人员列表</h1>
    <h3></h3>
    <h3 style="color:red;">Count组件求和为：{{ sum }}</h3>
    <h3>第一个人的名字：{{ firstPersonName }}</h3>
    <input v-model="personName" type="text" placeholder="请输入名字">
    <button @click="add">添加</button>
    <button @click="addSpecial">添加一个名字很长的人</button>
    <ol>
      <li v-for="item in personList" :key="item.id">{{ item.name }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data(){
    return {
      personName: "",
    }
  },
  computed: {
    personList(){
      return this.$store.state.personAbout.personList;
    },
    sum(){
      return this.$store.state.countAbout.sum;
    },
    // 从getters当中取数据
    firstPersonName(){
      return this.$store.getters['personAbout/firstPersonName'];
    }
  },
  methods: {
    add(){
      const person = {
        id: Date.now(),
        name: this.personName
      };
      // namespaced/commitName
      this.$store.commit("personAbout/ADD_PERSON", person);
      this.personName = "";
    },
    addSpecial(){
      const person = {
        id: Date.now(),
        name: this.personName
      };
      this.$store.dispatch("personAbout/addPersonSpecial", person);
      this.personName = "";
    },
  }
}
</script>
