var express = require('express')
var router = express.Router()
var ControllerPost = require('../controller/post')

var multer = require('multer');
var upload = multer({ dest: './public/uploads/' });

//管理员商品操作
router.post('/add' , upload.single('filename') , ControllerPost.add)
router.get('/cmsList' , ControllerPost.cmsList)
router.get('/cmsFind' , ControllerPost.cmsFind)
router.post('/cmsUpdate' , ControllerPost.cmsUpdate)
router.get('/cmsRemove' , ControllerPost.cmsRemove)
router.get('/shops' , ControllerPost.shops)
router.get('/list' , ControllerPost.list)
router.get('/detail' , ControllerPost.detail)

module.exports = router