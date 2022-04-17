import VueRouter from 'vue-router';

import About from "@/pages/About";
import Home from "@/pages/Home";
import Message from "@/pages/Message";
import News from "@/pages/News";
import Detail from "@/pages/Detail";

// 创建路由
let router = new VueRouter({
  routes: [
    { 
      name: "About",
      path: "/about", 
      component: About,
      meta: { 
        isAuth: false,
        title: "关于"
      }, // 路由元信息
    },
    {
      name: "Home",
      path: "/home", 
      component: Home,
      meta: {
        isAuth: false,
        title: "主页"
      }, // 路由元信息
      children: [
        { 
          name: "News",
          path: "/home/news", 
          component: News, 
          meta: { isAuth: true, title: "新闻" },
          // 独享路由守卫
          // beforeEnter(to, from, next){
          //   next();
          // },
        },
        { 
          name: "Message",
          path: "message",
          component: Message,
          meta: { isAuth: true, title: "消息" },
          children: [
            { name: "Detail", path: "detail", component: Detail },
          ]
        }, 
      ]
    },
  ]
});


// 全局前置路由守卫
// 调用时机：初始化的时候、每次路由切换之前
// router.beforeEach((to, from, next) => {
//   let school = localStorage.getItem("school");
//   if(to.meta.isAuth){
//     if(school == "团结路小学"){
//       next();
//     }else{
//       console.log("没有权限");
//     }
//   }else{
//     next();
//   }
// });

// // 全局后置路由守卫
// router.afterEach((to, from) => {
//   document.title = to.meta.title;
// });

export default router
