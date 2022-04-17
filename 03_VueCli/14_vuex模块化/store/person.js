// 人员管理配置项
const personOptions ={
  namespaced: true, // 命名空间
  state: {
    personList: [
      { id: "01", name: "张三" }
    ], // 用户列表
  },
  actions: {
    addPersonSpecial(context, value){
      if(value.name.length > 5){
        context.commit("00", value);
      }
    }
  },
  mutations: {
    ADD_PERSON(state, value){
      state.personList.unshift(value);
    }
  },
  getters: {
    firstPersonName(state){
      return state.personList[0].name
    }
  },
};

export default personOptions;