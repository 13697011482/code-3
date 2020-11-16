var path = require('path')
var express = require('express')
var pageRouter = require('./06-pageRouter')
var userRouter = require('./07-userRouter')
var app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/page' , pageRouter)
app.use('/user' , userRouter)

app.get('/file' , (req,res,next) => {
  // res.sendFile('./public/logo.png')
  res.sendFile(path.resolve('./public/logo.png'))
})
app.use((req,res,next) => {
  res.send('404')
})

app.listen(3000 , 'localhost' , (err) => {
  if(err){
    console.log('服务器启动失败！！！');
    return ;
  }
  console.log('服务器启动成功！！！');
})