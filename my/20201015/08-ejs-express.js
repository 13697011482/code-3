var express = require('express')
var app = express();

app.use(express.static('public'))
app.set('views' , './views');
app.set('view engine' , 'ejs');

app.get('/index' , (req,res,next) => {
  res.render('index' , ({
    message : "hello express",
    html : '<h1>我是html标签</h1>',
    isShow : true,
    isLogin : false,
    data : [111,222,333,444]
  }))
})
app.get('/login' , (req,res,next) => {
  res.render('login' , ({
    isLogin : true,
  }))
})

app.get('/data' , (req,res,next) => {
  res.send([
    { nm : '我和我的家乡' },
    { nm : '姜子牙' },
    { nm : '急先锋' },
    { nm : '夺冠' }
  ])
})
app.get('/movie.ejs' , (req,res,next) => {
  res.render('movie.ejs' , {
    movie : [
      { nm : '我和我的家乡' },
      { nm : '姜子牙' },
      { nm : '急先锋' },
      { nm : '夺冠' }
    ]
  })
})

app.listen(3000 , 'localhost' , (err) => {
  if(err) {
    console.log('服务器启动失败！！！');
    return ;
  }
  console.log('服务器启动成功！！！');
})