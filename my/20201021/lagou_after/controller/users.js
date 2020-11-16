var UserModel = require('../model/user')
var jwt = require('jsonwebtoken')

var register = (req,res,next) => {
  var body = req.body
  UserModel(body).save().then((info) => {
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
      })
    }else{
      res.json({
        code : -1,
        errmsg : '注册失败',
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : '注册失败',
    })
  })
}
var login = (req,res,next) => {
  var body = req.body
  UserModel.findOne(body).then((info) => {
    if(info){

      //生成加密的token令牌
      jwt.sign({
        username : body.username
      } , 'abcdefg' , { expiresIn: 60 * 60 * 3 } ,(err , token) => {
        res.json({
          code : 0,
          errmsg : 'ok',
          token
        })
      })
    }else{
      res.json({
        code : -1,
        errmsg : '登录失败',
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : '登录失败',
    })
  })
} 

var info = (req,res,next) => {
  var token = req.headers.token
  //进行token解码，验证token是否正确
  jwt.verify(token , 'abcdefg' , (err , info) => {
    if(err){
      res.json({
        code : -1,
        errmsg : 'token错误',
      })
    }else{
      res.json({
        code : 0,
        errmsg : 'token正确',
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