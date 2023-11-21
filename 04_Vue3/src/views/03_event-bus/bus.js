/**
 * vue2当中可以在Vue.prototype上挂载$bus来实现全局事件总线的功能
 * 但是在vue3当中，不能再使用prototype和this了，就无法通过上面的方式来实现全局事件总线
 * 我们需要引入一个依赖来实现全局事件总线
 * npm i mitt@3.0.0
 * 
 * mitt与发布订阅基本相同，都是需要订阅和发布
 */

import mitt from "mitt";
const $bus = mitt();

export default $bus;
