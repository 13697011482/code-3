const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const useLoader = (loaderKind) => {
  return [
    { loader: MiniCssExtractPlugin.loader }, // style-loader
    { loader: 'css-loader' },
    // { loader: 'postcss-loader' }, // 如果设置了postcss.config.js ，无需下面的配置
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            [
              'autoprefixer', // 自动补齐前缀 - 样式的兼容性写法
              {
                overrideBrowserslist: ['last 100 versions']
              }
            ],
            [
              'postcss-preset-env'
            ]
          ]
        }
      }
    },
    { loader: loaderKind }
  ]
}
module.exports =  useLoader