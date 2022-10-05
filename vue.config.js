const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {        
    host: 'localhost',
    port: 8080,
    https: false,
    hot: false,
    proxy: {
      "/api": {
        target: 'http://gmall-h5-api.atguigu.cn'
        // pathRewrite: {"^/api" : ""}
      }
    }
  }
})
