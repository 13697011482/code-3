var UserModel = require('../model/user')
var jwt = require('jsonwebtoken')
var getCrypto = require('../common/crypto')

var register = (req,res,next) => {
   var {username , password , checkCode} = req.body
   if(checkCode !== req.session.captcha){
     res.json({
       code : -1,
       errmsg : 'checkCode err'
     })
     return ;
   }
   UserModel({
     username , 
     password : getCrypto(password)
   }).save().then((info) => {
     console.log("111");
     if(info){
       res.json({
         code : 0,
         errmsg : 'ok',
         info
       })
     }else{
      res.json({
        code : -1,
        errmsg : 'register err',
        info : {}
      })
     }
   }).catch((err) => {
    console.log("222");
    console.log(err);
    res.json({
      code : -1,
      errmsg : 'register err',
      info : {}
    })
   })
}
var login = (req,res,next) => {
  var {username , password ,checkCode} = req.body
  if(checkCode !== req.session.captcha){
    res.json({
      code : -1,
      errmsg : 'checkCode err'
    })
    return ;
  }
  UserModel.findOne({
    username ,
    password : getCrypto(password)
  }).then((info) => {
    if(info){
      jwt.sign({
        username : username
      } , 'abcdefg' , {expiresIn : 60 * 60 * 3 } , (err , token) => {
        res.json({
          code : 0,
          errmsg : 'ok',
          info,
          token
        })
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'login err',
        info,
        token : null
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'login err',
      info,
      token : null
    })
  })
}
var info = (req,res,next) => {
  var token = req.headers.token
  jwt.verify(token , 'abcdefg' , (err , info) => {
    if(err){
      res.json({
        code : -1,
        errmag : 'token错误'
      })
    }else{
      res.json({
        code : 0,
        errmag : 'token正确',
        username : info.username
      })
    }
  })
}
module.exports = {
  register,
  login,
  info
}