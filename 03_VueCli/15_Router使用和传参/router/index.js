import VueRouter from 'vue-router';

import About from "@/pages/About";
import Home from "@/pages/Home";
import Message from "@/pages/Message";
import News from "@/pages/News";
import Detail from "@/pages/Detail";

// 创建路由
export default new VueRouter({
  routes: [
    { 
      name: "About",
      path: "/about", 
      component: About 
    },
    {
      path: "/home", 
      component: Home,
      children: [
        { path: "/home/news", component: News },
        { 
          path: "message", // 子组件可以直接写名称，VueRouter会自动添加 /home 即父级的路径
          component: Message,
          children: [
            // { name: "Detail", path: "detail", component: Detail },
            // { name: "Detail", path: "detail/:id/:title", component: Detail }, // 传递params参数，占位符（必需）
            
            // prop使用：
            // 第一种写法：值为对象，该对象当中的所有key-value会已props的形式传递给Detail组件
            // Detail组件当中：props: ['id', 'title'] 接收一下，就可以直接使用 this.id 和 this.title
            // { name: "Detail", path: "detail", component: Detail, props: { id: "1", title: "消息一" } },

            // 第二种写法：值为布尔值，为true时，会把路由组件收到的所有params参数，以props的形式传递给Detail组件，Detail组件当中利用props接收一下就可以直接使用了
            // { name: "Detail", path: "detail", component: Detail, props: true },
            
            // 第三种写法：值为函数，这个函数有一个$route参数，函数的返回值为对象，对象的每一组key-value都会通过props传递给Detail组件
            {
              name: "Detail",
              path: "detail/:id/:title",
              component: Detail,
              props($route){
                // 这个函数可以接收一个$route参数
                return { id: $route.params.id, title: $route.params.title }
              }
            },

          ]
        }, 
      ]
    },
  ]
});
