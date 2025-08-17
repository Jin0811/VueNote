import { createRouter, createWebHistory, type RouteLocationGeneric } from "vue-router";

import Note from "@/pages/note/index.vue";
import RouterNote from "@/pages/router-note/index.vue";
import Home from "@/pages/router-note/home/index.vue";
import News from "@/pages/router-note/news/index.vue";
import DetailQuery from "@/pages/router-note/news/detail-query.vue";
import DetailParams from "@/pages/router-note/news/detail-params.vue";
import DetailProps from "@/pages/router-note/news/detail-props.vue";
import About from "@/pages/router-note/about/index.vue";
import StoreNote from "@/pages/store-note/index.vue";
import Transfer from "@/pages/transfer/index.vue";
import Slot from "@/pages/slot/index.vue";

export const routes = [
  {
    path: "/",
    redirect: "/note",
  },
  {
    path: "/note",
    name: "Note",
    title: "基础",
    component: Note,
  },
  {
    path: "/routerNote",
    name: "RouterNote",
    title: "路由",
    component: RouterNote,
    redirect: "/routerNote/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "news",
        name: "News",
        component: News,
      },
      {
        path: "detailQuery",
        name: "DetailQuery",
        component: DetailQuery,
      },
      {
        path: "detailParams/:id/:title?", // title为可选参数
        name: "DetailParams",
        component: DetailParams,
      },
      {
        path: "detailProps/:id/:title?",
        name: "DetailProps",
        component: DetailProps,
        // 路由规则的props配置
        // 第一种写法：将路由收到的所有params参数作为props传递给路由组件
        // props: true,

        // 第二种写法：传递一个函数，自行决定将什么数据作为props传递给路由组件
        // 函数的参数是route对象，可以从route当中获取query和params数据
        props: (route: RouteLocationGeneric) => {
          console.log(route);
          return {
            id: route.params.id,
            title: route.params.title,
          };
        },

        // 第三种写法：传递一个对象，可以自行决定将什么数据作为props传递给路由组件
        // 这种写法只能传递固定的数据，很少会使用到
        // props: {
        //   id: 100,
        //   title: "新闻100",
        // },
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
    ],
  },
  {
    path: "/storeNote",
    name: "StoreNote",
    title: "Store",
    component: StoreNote,
  },
  {
    path: "/transfer",
    name: "Transfer",
    title: "Transfer",
    component: Transfer,
  },
  {
    path: "/slot",
    name: "Slot",
    title: "Slot",
    component: Slot,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
