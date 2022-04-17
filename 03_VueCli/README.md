# VueCli笔记

- 全局安装vuecli：`npm install -g @vue/cli`
- 查看webpack相关的配置（只能查看，修改不会生效）：`vue inspect > output.js`
- 查看npm包的全部版本：`npm view [packageName] versions`

- 安装less：`npm install less-loader@7`  如果启动报错，再安装一下less：`npm install less --save-dev`


## Ref
1、被用来给元素或者子组件注册引用信息

2、应用在html标签上，获取的是真实的DOM元素，应用在组件标签上，获取的组件实例对象

3、使用方法
```js
// <school ref='sch'></school>
// this.$refs[refName]
```

## mixin
1、使用方法
```js
// 在组件内使用混入（组件）
// import mixin from "./mixin";
// mixins: [mixin]

// 全局混入（main.js）
// import mixin from "./mixin";
// Vue.mixin(mixin);
```
2、data当中的数据和methods当中的方法，冲突时，会以组件当中的为准

3、生命周期冲突时，混入和组件当中的都会执行，并且混入当中的生命周期会先执行


## Vuex
1、读取Vuex当中数据的方法
```html
<!-- 方式一：利用$store -->
<div>
  <p>{{ $store.state.sum }}</p>
  <p>{{ $store.getters.bigSum }}</p>
</div>

<!-- 方式二：利用计算属性 -->
<template>
  <div>
    <p>{{ sum }}</p>
    <p>{{ bigSum }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    sum(){
      return this.$store.state.sum; // 计算state当中的数据
    },
    bigSum(){
      return this.$store.getters.bigSum; // 计算getters当中的数据
    },
  },
}
</script>

<!-- 方式三：利用mapState和mapGetters -->
<template>
  <div>
    <p>mapState对象写法：</p>
    <p>{{ mySchool }}</p>
    <p>{{ mySubject }}</p>

    <p>mapState数组写法：</p>
    <p>{{ school }}</p>
    <p>{{ subject }}</p>

    <p>mapGetters</p>
    <p>{{ bigSum }}</p>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex"; // 需要从vuex当中引入mapState和mapGetters
export default {
  computed: {
    // 传递一个对象，这样可以在生成时指定别名
    // ...mapState({
    //   mySchool: "school",
    //   mySubject: "subject",
    // }),

    // 传递给mapState一个数组，这样不可以指定别名，但是比较简洁
    ...mapState(['school', 'subject']),

    // mapGetters和mapState的语法相同，都有对象和数组两种写法
    ...mapGetters(['bigSum']),
  },
}
</script>
```

## Hash 和 history
1、对于一个url来说，#及其后面的内容都是hash值
2、hash值不会包含在HTTP请求当中，即：hash不会发送给服务器
3、hash模块
  - url地址中带着#，不美观
  - 若以后将地址通过第三方手机app分享，如果app校验严格，url会被标记为不合法
  - 兼容性较好
4、history模式
  - url地址美观
  - 兼容性相比hash模式较差
  - 应用部署上线时需要后端支持，解决刷新页面404的问题
5、如果使用node部署，可以使用 `connect-history-api-fallback` 来解决history模式下404的问题