var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://localhost:27017' , (err , db) => {
  if(err){
    console.log("数据库连接失败");
    return ;
  }
  console.log("数据库连接成功");

  var musicDB = db.db('musicList');
  var musicListCollection = musicDB.collection('musicList');

  // musicListCollection.find().toArray((err , infos) => {
  //   console.log(infos);
  // })

  musicListCollection.insertOne({
    "musicname":"遥远的她","singer":"张学友"
  }).then((res) =>{
    console.log(res.ops);
  })
  musicListCollection.find().toArray((err , infos) => {
    console.log(infos);
  })
})