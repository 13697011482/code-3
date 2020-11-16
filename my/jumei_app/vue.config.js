// module.exports = {
//     lintOnSave: true,
//     devServer: {
//         proxy : {
//             '/api' : {
//                 target : 'http://10.20.159.166:3000',
//                 changeOrigin : true
//             }
//         }
//     },
//     runtimeCompiler : true //用到template渲染加上
// }
module.exports = {
    devServer: {
        proxy: {
          '/api': {
            target: 'http://10.20.159.146:3000',
            changeOrigin: true
          }
        }
    },
    publicPath:"/app",
}