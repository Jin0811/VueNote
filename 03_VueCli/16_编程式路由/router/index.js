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
          path: "message",
          component: Message,
          children: [
            { name: "Detail", path: "detail", component: Detail },
          ]
        }, 
      ]
    },
  ]
});
