const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    "main": path.resolve(__dirname, "../src/main.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].bundle.js"
  },
  module: {
    rules: [
      // vue-loader 
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /.\js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // css
      {
        test: /\.css$/,
        use: [ "vue-style-loader",MiniCssExtractPlugin.loader,"postcss-loader", "css-loader"]
      },
      //less 
      {
        test: /\.less$/,
        use: ["vue-style-loader", MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    // vue-loader-plugin
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      cache: true,
      inject: "body",
      template: path.resolve(__dirname, "../src/index.html")
    }),
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../"),
      verbose: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename:'[id].css'
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/"),
      // "vue": "vue/dist/vue.js"
    }
  }
}