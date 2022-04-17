module.exports = {
  pages: {
    index: {
      entry: './src/main.js', // page 的入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: 'VueNote', // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    },
  },
  lintOnSave: false, // 关闭语法检查

  // 配置代理方式一
  // 这种方式只能配置一个代理，并且不能灵活地控制是否走代理
  // devServer: {
  //   proxy: "http://localhost:5000"
  // }

  // 配置代理方式二
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // 代理到哪一台服务器
        // 路径重写，pathRewrite是一个对象，key为一个正则表达式，value为要重新为的值
        // 匹配到所有以 /api 开头的请求，重写接口，去除 /api 
        pathRewrite: {
          "^/api": ""
        },
        ws: true, // 默认为true，用于支持websocket
        // changeOrigin默认为true，用于控制请求头当中的host
        // 为true时，代理服务器会进行欺骗接口服务器，使得host与接口服务器相同，这样可以避免接口服务器作了限制时，请求失败
        // 为false时，代理服务器会真实传递host
        changeOrigin: true,
      },
      "/demo": {
        target: "http://localhost:5001",
        pathRewrite: {
          "^/demo": ""
        },
        ws: true,
        changeOrigin: true,
      },
    }
  }
}