const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const UglifyJsplugin = require("uglifyjs-webpack-plugin");
let proConfig = {
  mode: "production",
  devtool: "source-map",
  // rules: [
  //   {

  //   }
  // ],
  plugins: [
    new UglifyJsplugin({ sourceMap: true}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
module.exports = merge(baseConfig, proConfig)