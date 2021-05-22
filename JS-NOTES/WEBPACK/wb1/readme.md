<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangsf
 * @Date: 2021-05-22 14:56:23
 * @LastEditors: wangsf
 * @LastEditTime: 2021-05-22 15:18:59
-->

1. 开发环境配置
```
  const { resolve } = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'built.js',
      path: resolve(__dirname, 'build')
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            'style.loader',
            'css-loader',
            'less-loader'
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(jpg|png|gif)$/,
          // 使用一个loader
          // 下载 url-loader file-loader
          loader: 'url-loader',
          options: {
            // 图片大小 小于8KB，就会被处理成base64格式
            limit: 8 * 1024,
            // 重命名
            name: '[hash:10].[ext]',
            // 关闭es6模块化
            esModule: false
          }
        },
        {
          // 处理html中img资源
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          // 处理其他资源
          exclude: /\.(html|js|css|less|jpg|png|gif)$/,
          loader: 'file-loader',
          options: {
            name: '[hash:10].[ext]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: '.src/index.html'
      })
    ],
    mode: development, // 生产 production

    devServer: {
      contentBase: rsoleve(__dirname, 'build'),
      compress: true,
      port: 3000,
      open: true
    }
  }

```

2. 运行devServer命令： `yarn webpack serve`