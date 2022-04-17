/**
 * 该文件是整个项目的入口文件
 * 
 * VueCli当中引入的是残缺版的vue，没包含模板编译器，所以这里不能使用template
 * 
 * render函数当中有一个参数为函数，这个函数可以创建节点，render函数当中需要返回这个创建的节点
 * 
 * 1、Vue.js和vue.runtime.js的区别
 *    1.1 vue.js是完整版的，包含核心和模板解析器
 *    1.2 vue.runtime.js是运行版的vue，只包含核心功能，没有版本解析器
 * 2、因为vue.runtime.js没有模板解析器，所以不能使用template配置，需要使用render函数接受到的createElement函数去指定具体的内容
 */

import Vue from 'vue' // 引入vue
import App from './App.vue' // 根组件

Vue.config.productionTip = false // 关闭vue的生产提示

new Vue({
  // render: h => h(App), // 将App组件放到了容器当中
  render: createElement => createElement(App)
  
  // template: `<h1>111</h1>`,
}).$mount('#app')

