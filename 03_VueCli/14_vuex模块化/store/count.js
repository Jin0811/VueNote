// 求和配置项
const countOptions ={
  namespaced: true, // 命名空间
  state: {
    sum: 0,
    school: "希望小学",
    subject: "前端",
  },
  actions: {
    incrementOdd(context, value){
      if(context.state.sum % 2){
        context.commit('IncrementOdd', value);
      }
    },
    incrementWait(context, value){
      setTimeout(() => {
        context.commit('IncrementWait', value);
      }, 500);
    }
  },
  mutations: {
    Increment(state, value){
      state.sum = state.sum + value;
    },
    Decrement(state, value){
      state.sum = state.sum - value;
    },
    IncrementOdd(state, value){
      state.sum = state.sum + value;
    },
    IncrementWait(state, value){
      state.sum = state.sum + value;
    },
  },
  getters: {
    bigSum(state){
      return state.sum * 10
    }
  },
};

export default countOptions;