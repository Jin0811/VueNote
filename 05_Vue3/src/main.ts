import { createApp } from "vue";
import App from "./App.vue";
import { router } from "@/router";
import { createPinia } from "pinia";
import "./global.scss";
import "@/utils/emitter";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");

/**
 * 全部API转移到应用对象
 * app.use
 * app.mount
 * app.unmount
 * app.component
 * app.config
 * app.directive
 */