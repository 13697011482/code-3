var express = require('express');
// const { render } = require('../app');
var router = express.Router();
var ControllerIndex = require('../controller/index')

/* GET home page. */
router.get('/list', ControllerIndex.list);
router.get('/detail/:id' , ControllerIndex.detail);
router.get ('/admin' , ControllerIndex.admin)
router.get('*' , (req,res,next) => {
  res.redirect('list')
})
module.exports = router;
