const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  devServer: {
    port: 8080
  },
  entry: './src/client/index.js',
  mode: 'development',
  devtool: 'source-map',
  // stats: 'verbose',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',   // 3 Inject styles into DOM
          'css-loader',     // 2 Turns css into main.js
          'sass-loader'     // 1 Turns sass into css
        ]
      }
    ]
  },
  plugins: [

    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html',
      title: "Sklleton"
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    })
  ],
}
