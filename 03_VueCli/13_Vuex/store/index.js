// Vuex的store
import Vue from "vue";
import Vuex from "vuex";

// 注意：在new Vuex.Store之前，必须先执行Vue.use(Vuex);
Vue.use(Vuex);

// state：存储数据
const state = {
  sum: 0,
  school: "希望小学",
  subject: "前端",
};

// actions：异步操作，或者需要进行一些业务处理
const actions = {
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
};

// mutations：同步操作
const mutations = {
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
};


// getters：可以根据一个或多个state生成一个新的state
// 类似于组件当中的computed
const getters = {
  bigSum(state){
    return state.sum * 10
  }
};

// 创建VuexStore
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
