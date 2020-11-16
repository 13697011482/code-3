var express = require('express')
var router = express.Router()
var ControllerActive = require('../controller/active')
var multer = require('multer');
var upload = multer({ dest: './public/uploads/' });


router.post('/activeAdd' , upload.single('filename') , ControllerActive.activeAdd)
router.get('/activeList' , ControllerActive.activeList)
router.get('/activeFind' , ControllerActive.activeFind)
router.post('/activeUpdate'  , upload.single('filename') , ControllerActive.activeUpdate)
router.get('/activeRemove' , ControllerActive.activeRemove)
router.get('/list' , ControllerActive.list)

module.exports = router