// 开发环境配置
const baseConfig = require("./webpack.base.js");
const merge = require("webpack-merge");
const path = require("path")
let devConfig = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "../dist"),
    // proxy: {
    //   "/api": {
    //     target: "http://localhost: 3000",
    //     // 启用https 引入https模块 进行https代理就行了
    //     // secure: true,
    //     // agent: {}
    //   }
    // }
  }
}
module.exports = merge(baseConfig, devConfig)