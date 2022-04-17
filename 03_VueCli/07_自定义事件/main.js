import Vue from 'vue' // 引入vue
import App from './App.vue' // 根组件
import './plugins/element.js'

Vue.config.productionTip = false // 关闭vue的生产提示

new Vue({
  render: h => h(App), // 将App组件放到了容器当中
}).$mount('#app')

