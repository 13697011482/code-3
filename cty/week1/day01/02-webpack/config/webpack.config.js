const path = require('path')
const useLoader = require('./loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin') //CleanWebpackPlugin不是个constructor ，所以引入的时候要加上{}
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin') //引入下载好的解析vue文件的插件
const resolve = (dir) => {
  //__dirname当前文件的父文件夹
  return path.resolve(__dirname , '../' , dir)
}
console.log(process.env.NODE_ENV);
const isDev = (process.env.NODE_ENV === "true")
module.exports = {
  //配置环境
  mode : isDev ? 'development' : 'production', //开发环境production 生产环境
  //入口
  //三种方式：String entry : '../src/app.js'
  //Array : entry : ['../src/app.js']
  entry : {
    //这里要写绝对路径，如果配置文件与package.json文件在同一级目录下可以使用相对路径
    app : resolve('src/main.js'),
    // text : resolve('src/name.js')
  },
  //出口
  output : {
    path : resolve('dist/'),
    // path : __dirname + '../dist', //不要写绝对路径，热更新
    filename : isDev ? 'js/[name].js' : 'js/[name].[hash:8].js' // name的值可以理解为entry的key
  },
  //配置插件
  plugins : [
    new HtmlWebpackPlugin({
      title : 'hello webpack', //设置默认打包的index.html的标题
      filename : 'index.html', // 设置打包后入口文件的名字 默认为index.html
      template : resolve('public/index.html'), // 引入页面模板 引入后title会失效
      inject : "body", //String : body | head Boolean : true |false 配置是否引入js和引入的js的位置，默认是body 引入的js位置在body结束标签之前，head引入的js在head结束标签之前 ， true和body相等 ,false 不引入js
      minify : { //优化选项
        collapseWhitespace : true, //去除空格
        removeAttributeQuotes : true, //去除引号
        removeComments : true // 去除注释
      },
      // chunks : ['app' , 'text'], //当有两个以上的入口文件时，设置文件的顺序，不要加后缀
      // chunksSortMode : 'manual' //手动配置
    }),
    new CleanWebpackPlugin(), // 每次打包后删除原来的dist文件夹
    // new CopyWebpackPlugin({ //克隆小图标（单个图片）
    //   patterns : [ //6.2.1版本写法
    //     {
    //       from : resolve('public/favicon.ico'),
    //       to : resolve('dist/')
    //     }
    //   ]
    // }),
    new CopyWebpackPlugin({ //克隆publi目录下全部的图片
      patterns : [
        {
          context : resolve('public/'), //这里要写绝对路径 一定要加上 否则会把整个文件夹复制过去
          from : '**/*', //全部文件
          to : resolve('dist/'), //这里要写绝对路径
          globOptions : { // 6.2.1之后ignore要加上globOptions属性，否则报错
            ignore : ['index.html'] //必须是用数组接收，可以忽略多个文件
          }
        }
      ]
    }),

    // 5.1.2版本写法
    // new CopyWebpackPlugin([
    //   {
    //     from : resolve('public/favicon.ico'),
    //     to : resolve('dist/')
    //   }
    // ])
    new VueLoaderPlugin(), // 解析vue文件
    new MiniCssExtractPlugin({ //抽离css
      filename : isDev ? 'css/[name].css' : 'css/[name].[hash:8].css'
    })

  ],
  module : {
    rules : [
      {
        test: /\.m?js$/,
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
              ]
            ],
            plugins : [
              '@babel/plugin-transform-runtime', // 如果类包含高级js
              [
                '@babel/plugin-proposal-decorators', // 添加装饰器
                { "legacy": true }
              ],
              '@babel/plugin-proposal-class-properties', //给类添加属性
            ]
          }
        }
      },
      {
        test : /\.vue$/,
        loader : 'vue-loader'
      },
      {
        test : /\.(css|styl)$/, //解析css文件 安装配置完后页面没有相应的效果时因为这样的css解析再js代码中，我们需要安装配置style-loader将css放入到页面中显示出来
        // 三种写法
        // loader : 'style-loader!css-loader' // 字符串 从右往左解析 中间由！连接
        // use : ['style-loader' , 'css-loader'] // 数组 从右往左解析
        // use : [   // 对象 从下往上解析
        //   { loader : MiniCssExtractPlugin.loader },
        //   { loader : 'css-loader' },
        //   { loader : 'stylus-loader' },
        // ]
        use : useLoader('stylus-loader')
      },
      {
        test : /\.scss$/, //解析scss文件
        // use : [   // 对象 从下往上解析
        //   { loader : MiniCssExtractPlugin.loader },
        //   { loader : 'css-loader' },
        //   { loader : 'sass-loader' },
        // ]
        use : useLoader('sass-loader'),
      },
      {
        test : /\.(png|jpg|jpeg|gif|webp|svg)$/, // 解析图片 
        use : [
          {
            loader : 'url-loader',
            options : {
              limit : 1024 * 3 ,//单位为B ，设置图片的大小 ，如果设置的值小于图片的大小，直接生成一张图片，如果设置的值大于图片的大小，生成的图片格式为base64 此时图片存在内存中 实际情况中看需求设置

              // name : 'img/[name].[ext]' //file-loader name是图片原来的名字
              // name : 'img/[contenthash].[ext]' //file-loader contenthash是webpack生成的唯一的名字
              outputPath : 'img', //这里不要写绝对路径
              name : '[contenthash].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer : {
    contentBase : resolve('dist'),
    host : '127.0.0.1',
    port : 3333,
    proxy : {
      '/api' : {
        target : '10.20.159.146',
        changeOrigin : true,
        ws : true,
        pathRewrite : {
          '^/api' : ''
        }
      }
    }
  }
}