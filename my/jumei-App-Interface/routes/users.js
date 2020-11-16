var express = require('express');
var router = express.Router();
var ControllerUser = require('../controller/users')
var getCheckCode = require('../common/checkCode')

/* 用户登录注册 */
router.post('/login' , ControllerUser.login)
router.post('/register' , ControllerUser.register)
router.get('/info' , ControllerUser.info)
router.get('/checkCode' , getCheckCode)

module.exports = router;
