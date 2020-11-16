var express = require('express');
var router = express.Router();
var ControllerPost = require('../controller/post')

var multer = require('multer');
var upload = multer({ dest: './public/uploads/' });

router.post('/add' , upload.single('filename') , ControllerPost.add)
router.get('/list' , ControllerPost.list)
router.get('/find' , ControllerPost.find)
router.post('/update' , ControllerPost.update)
router.post('/remove' , ControllerPost.remove)

module.exports = router