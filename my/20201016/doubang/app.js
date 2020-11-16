// const { static } = require('express');
var express = require('express');
var mongoose = require('mongoose');
var { host , port , mongoUrl } = require('./config/config');
var pageRouter = require('./router/pageRouter')
var movieRouter = require('./router/movieRouter')
var app = express();

app.set('views' , './views');
app.set('view engine' , 'ejs')

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/' , pageRouter)
app.use('/movie' , movieRouter)

mongoose.connect(mongoUrl , { useNewUrlParser: true } , (err) => {
  if(err){
    console.log('数据库连接失败！！！');
    return ;
  }
  console.log('数据库连接成功！！！');
  app.listen(port , host , (err) => {
    if(err){
      console.log('服务器启动失败！！！');
      return ;
    }
    console.log('服务器启动成功！！！');
  })
})