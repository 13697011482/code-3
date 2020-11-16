var PostModel = require('../model/post')
var CountModel = require('../model/count')
var fs = require('fs');
var path = require('path');

var add = async (req,res,next) => {
  var body = req.body
  var file = req.file
  var { postId } = await CountModel.findOneAndUpdate({}, { $inc : { postId : 1 } }, { upsert : true , new : true}); 

  fs.renameSync( path.join('./public/uploads' , file.filename) , path.join('./public/uploads' , file.filename + '.png') );

  var data = {
    ...body,
    imageUrl : 'http://localhost:3000/uploads/' + file.filename + '.png',
    postId
  }
  PostModel(data).save().then((infos) => {
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

var cmsList = (req,res,next) => {
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
var cmsFind = (req,res,next) => {
  var postId = req.query.postId
  PostModel.findOne({postId}).then((info) => {
    if(info){
      console.log(info);
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
var cmsUpdate = (req,res,next) => {
  var body = req.body
  var file = req.file
  if(file){
    body.OldimageUrl = body.OldimageUrl.replace(/http:\/\/localhost:3000/ , './public');
    fs.unlinkSync(body.OldimageUrl)
    delete body.OldimageUrl

    var data = {
      ...body,
      imageUrl : 'http://localhost:3000/uploads/' + file.filename + '.png'
    }

    PostModel.update({ postId : req.query.postId }, {$set : data}).then((info)=>{
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
  } else{
    console.log('cccccc');
    console.log(req.query.postId);
    PostModel.update({ postId : req.query.postId }, {$set : body}).then((info)=>{
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
var cmsRemove = (req,res,next) => {
  var postId = req.query.postId;
    PostModel.deleteOne({ postId }).then((info)=>{
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
    }).catch((err)=>{
      console.log(err);
        res.json({
            code : -1,
            errmsg : 'remove err',
            info : null
        });
    });
}
var list = (req,res,next) => {
  var type = req.query.goodsType
  PostModel.find({goodsType : type}).sort({date : -1}).then((info) => {
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
var shops = (req,res,next) => {
  var goodsShop = req.query.goodsShop
  PostModel.find({goodsShop}).then((info) => {
    console.log(info);
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
        info
      })
    }else{
      es.json({
        code : -1,
        errmsg : 'nothing',
        info : []
      })
    }
  }).catch((err) => {
    es.json({
      code : -1,
      errmsg : 'nothing',
      info : []
    })
  })
}
var detail = (req,res,next) => {
  var postId = req.query.postId
  console.log(postId);
  PostModel.findOne({postId}).then((info) => {
    if(info){
      res.json({
        code : 0,
        errmsg :'ok',
        info
      })
    }else{
      res.json({
        code : -1,
        errmsg :'nothing',
        info : {}
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg :'nothing',
      info : {}
    })
  })
}
module.exports = {
  add,
  cmsList,
  cmsFind,
  cmsUpdate,
  cmsRemove,
  list,
  shops,
  detail
}