const path = require('path')
const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    compress: false,
    port: 9000,
    hot: true,
    open: true,
    static: {
      directory: path.join(__dirname, "../public"), //托管静态资源public文件夹
    }
  },
  module: {},
  plugins: [

  ],
})