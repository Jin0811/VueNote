const obj = {
  install(Vue, x, y, z){
    // 这里接受到的参数是Vue
    // 这里允许再使用插件时，传递参数
    console.log(x, y, z);
    

    // 全局过滤器
    Vue.filter("sliceFilter", function(value){
      return value.slice(0,4)
    });

    // 全局自定义指令
    Vue.directive("big", function(element, binding){
      element.innerText = binding.value * 10;
    });

    Vue.prototype.hello = function(){
      alert("你好呀");
    }
  }
};

export default obj