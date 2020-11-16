var ActiveModel = require('../model/active')
var CountModel = require('../model/count')
var fs = require('fs');
var path = require('path');


var activeAdd = async (req,res,next) => {
  var body = req.body
  var file = req.file
  var { postId } = await CountModel.findOneAndUpdate({}, { $inc : { postId : 1 } }, { upsert : true , new : true}); 

  fs.renameSync( path.join('./public/uploads' , file.filename) , path.join('./public/uploads' , file.filename + '.png') );

  var data = {
    ...body,
    activeImage : 'http://localhost:3000/uploads/' + file.filename + '.png',
    postId
  }
  ActiveModel(data).save().then((infos) => {
    console.log("111");
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
    console.log(err);
    res.json({
      code : -1,
      errmsg : 'nothing',
      infos : {}
    })
  })
}
var activeList = (req,res,next) => {
  var page = req.query.page;
  var count = 10;

  Promise.all([
    ActiveModel.find().sort({date : -1}).skip((page - 1) * count).limit(count),
    ActiveModel.find().count()
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
var activeFind = (req,res,next) => {
  var postId = req.query.postId
  ActiveModel.findOne({postId}).then((info) => {
    console.log(info);
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
var activeUpdate = (req,res,next) => {
  var body = req.body
  var file = req.file
  console.log(file);
  if(file){
    body.OldimageUrl = body.OldimageUrl.replace(/http:\/\/localhost:3000/ , './public');
    fs.unlinkSync(body.OldimageUrl)  
    delete body.OldimageUrl

    fs.renameSync( path.join('./public/uploads' , file.filename) , path.join('./public/uploads' , file.filename + '.png') );

    var data = {
      ...body,
      activeImage : 'http://localhost:3000/uploads/' + file.filename + '.png'
    }
    console.log(data.activeImage);
    console.log(req.body.postId);
    ActiveModel.update({ postId : req.body.postId }, {$set : data}).then((info)=>{
      if(info){
        console.log("info");
        res.json({
          code : 0,
          errmsg : 'ok',
          info 
        })
      }else{
        res.json({
          code : -1,
          errmsg : 'update err',
          info : {}
        })
      }
    }).catch((err) => {
      console.log('err');
      res.json({
        code : -1,
        errmsg : 'update err',
        info : {}
      })
    })
  }else{
    ActiveModel.update({ postId : req.body.postId }, {$set : body}).then((info)=>{
      if(info){
        res.json({
          code : 0,
          errmsg : 'ok',
          info 
        })
      }else{
        res.json({
          code : -1,
          errmsg : 'update err',
          info : {}
        })
      }
    }).catch((err) => {
      res.json({
        code : -1,
        errmsg : 'update err',
        info : {}
      })
    })
  }
 
}
var activeRemove = (req,res,next) => {
  var postId = req.query.postId;
  ActiveModel.deleteOne({ postId }).then((info)=>{
      if(info){
          res.json({
              code : 0,
              errmsg : 'ok',
              info
          });
      }
      else{
          res.json({
              code : -1,
              errmsg : 'remove err',
              info : null
          });
      }
  }).catch(()=>{
      res.json({
          code : -1,
          errmsg : 'remove err',
          info : null
      });
  });
}
var list = (req,res,next) => {
  var type = req.query.activeType
  console.log(type);
  ActiveModel.find({activeType : type}).sort({date : -1}).then((info) =>{
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
        info : []
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'nothing',
      info : []
    })
  })
}
module.exports = {
  activeAdd,
  activeList,
  activeFind,
  activeUpdate,
  activeRemove,
  list
}