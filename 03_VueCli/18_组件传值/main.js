import Vue from 'vue' // 引入vue
import App from './App.vue' // 根组件
import './plugins/element.js'

Vue.config.productionTip = false // 关闭vue的生产提示

// 创建store/index.js文件，并引入
import store from "./store/index";

// 公共样式
import "@/assets/common.less";

new Vue({
  render: h => h(App),
  store, // 在VM上挂载store
  beforeCreate(){
    Vue.prototype.$bus = this; // 安装全局事件总线
  },
}).$mount('#app')
