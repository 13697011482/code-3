var express = require('express');
var router = express.Router();
var ControllerAdmin = require('../controller/admin')
var getCheckCode = require('../common/checkCode')

/* 用户登录注册 */
router.post('/login' , ControllerAdmin.login)
router.post('/register' , ControllerAdmin.register)
router.get('/info' , ControllerAdmin.info)
router.get('/checkCode' , getCheckCode)

module.exports = router;