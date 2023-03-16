// Vuex的store
import Vue from "vue";
import Vuex from "vuex";

// 注意：在new Vuex.Store之前，必须先执行Vue.use(Vuex);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  actions: {},
  mutations: {
    Increment(state, value){
      state.count = state.count + value;
    },
  },
  getters: {},
  modules: {},
});

export default store;
