var mongoose = require('mongoose');

//1.下载安装mongoose
// npm i -S mongoose

//2.引入并连接数据库
mongoose.connect('mongodb://localhost:27017/musicList' , {
  useNewUrlParser : true,
  useUnifiedTopology : true
} , (err) => {
  if(err){
    console.log("数据库连接失败");
    return ;
  }
  console.log('数据库连接成功');

  //3.规范集合的字段类型和值 Schema

  var musicListSchema = mongoose.Schema({
    musicName : String,
    musicSinger : String,
    age : Number,
    date : {type : Date , default : new Date()},
    email : {type : String , unique : true}
  });

  //4.由Schema生成的模型，用于对数据库进行操作
  var musicListModel = mongoose.model('musicList' , musicListSchema );


  // musicListModel({
  //   musicName : '富士山下',
  //   musicSinger : '陈奕迅',
  //   age : 30,
  //   email : "12345@qq.com"
  // }).save().then((res) => {
  //   console.log(res);
  // }).catch((err) => { 
  //   console.log("数据添加失败");
  // })

  // musicListModel.insertMany([
  //   {
  //     musicName : '江南',
  //     musicSinger : '林俊杰',
  //     age : 31,
  //     email : '1234556@qq.com'
  //   },
  //   {
  //     musicName : '她说',
  //     musicSinger : '林俊杰',
  //     age : 31,
  //     email : '12345567@qq.com'
  //   }
  // ]).then((res) => {
  //   console.log(res);
  // }).catch((err) => {
  //   console.log(err);
  // })

  // musicListModel.deleteOne({}).then((res) => {
  //   console.log(res);
  // })


  musicListModel.update({'email':'12345567@qq.com'} , {$set : {'musicName' : '小酒窝'}}).then(res => {
    console.log(res);
  })
})