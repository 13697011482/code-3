const path = require('path')
const useLoader = require('./loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const resolve = (dir) => {
  return path.resolve(__dirname , "../" , dir)
}
console.log(process.env.NODE_ENV);
const isDev = (process.env.NODE_ENV === 'development')
module.exports = {
  mode : isDev ? 'development' : 'production',
  entry : {
    app : resolve('src/main.js')
  },
  output : {
    path : __dirname + '../dist',
    filename : isDev ? 'js/[name].js' : 'js/[name].[hash:8].js'
  },
  plugins : [
    new HtmlWebpackPlugin({
      title : 'react',
      filename : 'index.html',
      template : resolve('public/index.html'),
      minify : {
        removeComments : true,
        collapseWhitespace : true,
        removeAttributeQuotes : true
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns : [
        {
          context : resolve('public/'),
          from : '**/*',
          to : resolve('dist/'),
          globOptions : {
            ignore : ['index.html']
          }
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename : isDev ? 'css/[name].css' : 'css/[name].[hash:8].css'
    })
  ],
  module : {
    rules : [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env'],
            presets : [
              [
                '@babel/preset-env',
                {
                  useBuiltIns : 'usage', //垫片
                  corejs : 3,
                  targets : {
                    chrome : '58',
                    ie : '11'
                  }
                }
              ],
              '@babel/preset-react'
            ],
            plugins : [
              '@babel/plugin-transform-runtime', // 如果类包含高级js
              [
                '@babel/plugin-proposal-decorators', // 添加装饰器
                { "legacy": true }
              ],
              '   ', //给类添加属性
            ]
          }
        }
      },
      {
        test : /\.scss$/, 
        use : useLoader('sass-loader'),
      },
      {
        test : /\.(png|jpg|jpeg|gif|webp|svg)$/, // 解析图片 
        use : [
          {
            loader : 'url-loader',
            options : {
              limit : 1024 * 3 ,
              outputPath : 'img', 
              name : '[contenthash].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: resolve('dist/'),
    inline: true,
    // hot: true
  }
}