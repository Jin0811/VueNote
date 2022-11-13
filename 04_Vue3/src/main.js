import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象app（类型于vue2中的vm，但是app比vm更"轻"）
const app = createApp(App);
// 进行挂载
app.mount('#app');


/**
 * 引入的不在是vue的构造函数了，引入的是一个名为createApp的工厂函数
 * 
 * Vue2的挂载方法：
 * new Vue({
 *  render: (h) => h(App),
 * }).$mount("#app");
 * 
 * 注意：vue3当中不再支持了vue2的挂载方式
 * 当执行：import Vue from 'vue'; 时，导入的其实是undefined
 *
 */
