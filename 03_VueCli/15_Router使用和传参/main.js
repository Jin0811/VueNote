import Vue from 'vue' // 引入vue
import App from './App.vue' // 根组件
import './plugins/element.js'

Vue.config.productionTip = false // 关闭vue的生产提示

// 导入并应用路由
import router from "./router/index";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router: router, // 配置路由
}).$mount('#app')
