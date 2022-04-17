// Vuex的store
import Vue from "vue";
import Vuex from "vuex";

// 注意：在new Vuex.Store之前，必须先执行Vue.use(Vuex);
Vue.use(Vuex);

import countOptions from "./count";
import personOptions from "./person";

// 创建VuexStore
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  }
});
