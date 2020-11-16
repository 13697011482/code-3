var express = require('express');
const { nextTick } = require('process');
var app = express();

// function foo(req,res,next){
//   console.log(1);
//   next();
// }
// function foo2(req,res,next){
//   console.log(2);
// }
// app.use(foo)
// app.use(foo2)

//访问静态资源的内置中间件
 app.use(express.static('public'));
//  app.use('/a/b/c' , express.static('public'));

//可以拿到post传过来的数据
app.use(express.json());//json数据
app.use(express.urlencoded({ extended : true}))//键值对数据 extended : true 不加会有警告

// app.get('/index' , (req,res,next) => {
//   throw new Error('服务器错误')
// })

app.get('/data' , (req,res,next) => {
  var data = req.query;
  console.log(data);
});

app.post('/data' , (req,res,next) => {
  var data = req.body;
  console.log(data );

  res.send({
    'code' : 200,
    'errmsg' : 'OK'
  })
})
// app.use(function (err, req, res, next) {
    
//     res.send({
//         code : 500,
//         errmsg : err.message
//     });
// })

app.listen(3000 , 'localhost' , (err) => {
  if(err){
    console.log('服务器启动失败！！！');
    return ;
  }
  console.log('服务器启动成功！！！');
})