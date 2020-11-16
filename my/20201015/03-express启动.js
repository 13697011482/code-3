var express = require('express')
var app = express();

// app.get('/index' , (req,res,next) => {
//   res.send('<h1>首页</h1>')
// })

// app.get('/category' , (req,res,next) => {
//   res.send('<h1>分类</h1>')
// })
// app.post('/category' , (req,res,next) => {
//   res.send('post')
// })
// app.put('/category' , (req,res,next) => {
//   res.send('put')
// })
// app.delete('/category' , (req,res,next) => {
//   res.send('delete')
// })
//任意请求方式
app.all('/index' , (req,res,next) => {
  res.send('hello world')
})
//任意请求方式任意url地址
app.all('*' , (req , res , next) => {
  res.send('404')
})

app.listen(3000 , 'localhost' , (err)=>{
  if(err){
    console.log('服务器启动失败！！！');
    return ;
  }
  console.log('服务器启动成功！！！');
})