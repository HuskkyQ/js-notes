"use strict";

/*
 * @Descripttion: 该文件指示webpack干哪些活
 * @version: 
 * @Author: wangsf
 * @Date: 2021-05-22 14:00:14
 * @LastEditors: wangsf
 * @LastEditTime: 2021-05-24 09:20:58
 */
var _require = require('path'),
    resolve = _require.resolve;

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // webpack配置
  // 入口文件
  entry: './src/JS/index.js',
  // 输出
  output: {
    filename: 'JS/built.js',
    //路径 __dirname 是nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
  },
  // loader的配置
  module: {
    rules: [// 详细的loader配置
    {
      test: /\.css$/,
      // 匹配哪些后缀的文件
      use: [// 使用哪些loader进行处理,执行顺序， 从右往左 从下往上 依次执行
      // 创建style标签，将js中的样式资源插入进行，添加到head中生效
      'style-loader', // 将css文件变成commonjs模块加载到js中，样式是字符串
      'css-loader']
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.(jpg|png|gif)$/,
      // 使用一个loader
      // 下载 url-loader file-loader
      loader: 'url-loader',
      options: {
        // 配置
        // 图片大小 小于8KB，就会被处理成base64格式
        limit: 8 * 1024,
        // 重命名
        name: '[hash:10].[ext]',
        // 关闭es6模块化
        esModule: false,
        outputPath: 'IMGS'
      }
    }, {
      // 处理html中img资源
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      // 处理其他资源
      exclude: /\.(html|js|css|less|jpg|png|gif)$/,
      loader: 'file-loader',
      options: {
        name: '[hash:10].[ext]'
      }
    }]
  },
  // plugins 的配置
  plugins: [// html-webpack-plugin: 默认创建一个空html文件，引入打包输出所有资源 js/css
  // 需求：需要有结构的html文件该怎么写
  new HtmlWebpackPlugin({
    // 复制 该路径下的文件，并自动引入资源
    template: './src/index.html'
  })],
  mode: 'development',
  // 开发模式
  // mode: 'production'
  // 开发服务器 devServer： 用来自动化编译执行
  // 启动devServer指令： webpack-dev-server
  devServer: {
    // 使用devServer不会有输出 不会打包
    // 项目构建后的路径
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    //端口号
    port: 3001,
    // 自动打开浏览器
    open: true
  }
};