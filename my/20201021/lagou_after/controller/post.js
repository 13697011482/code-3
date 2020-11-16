var PostModel = require('../model/post')
var CountModel = require('../model/count')
var fs = require('fs');
var path = require('path');

var add = async (req,res,next) => {
  var body = req.body
  var file = req.file
  console.log(req.file , body);

  fs.renameSync( path.join('./public/uploads' , file.filename) , path.join('./public/uploads' , file.filename + '.png') );

  var { postId } = await CountModel.findOneAndUpdate({}, { $inc : { postId : 1 } }, { upsert : true , new : true}); 

  var data = {
    ...body,
    filename : 'http://localhost:3000/uploads/' + file.filename + '.png',
    postId
  }

  PostModel(data).save().then((infos) => {
    if(infos){
      res.json({
        code : 0,
        errmsg : 'ok',
        infos
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'nothing',
        infos : {}
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'nothing',
      infos : {}
    })
  })
}
var list = (req,res,next) => {
  var page = req.query.page;
  var count = 10;

  Promise.all([
    PostModel.find().sort({date : -1}).skip((page - 1) * count).limit(count),
    PostModel.find().count()
  ]).then((infos) => {
    if(infos){
      res.json({
        code : 0,
        errmsg : 'ok',
        info : infos[0],
        total : infos[1]
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'nothing',
        info : [],
        total : 0
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'nothing',
      info : [],
      total : 0
    })
  })
}
var find = (req,res,next) => {
  var postId = req.query.postId
  PostModel.findOne({postId}).then((info) => {
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
        info
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'nothing',
        info : {}
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'nothing',
      info : {}
    })
  })
}
var update = (req,res,next) => {
  var body = req.body
  var postId = req.query.postId

  PostModel.findOneAndUpdate({postId} , { $set : body }).then((info) => {
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
        info
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'nothing',
        info : {}
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'nothing',
      info : {}
    })
  })
}
var remove = (req,res,next) => {
  var postId = req.query.postId
  PostModel.deleteOne({postId}).then((info) => {
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
        info
      })
    }else {
      res.json({
        code : -1,
        errmsg : 'remove err',
        info : {}
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'remove err',
      info : {}
    })
  })
}
module.exports = {
  add,
  list,
  find,
  update,
  remove
}