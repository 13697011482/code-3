var express = require('express');
var router = express.Router();

router.get('/index' , (req,res,next) => {
  res.send('page index')
})
router.get('/list' , (req,res,next) => {
  res.send('page list')
})
router.get('/category' , (req,res,next) => {
  res.send('page category')
})
router.get('/detail/:id' , (req,res,next) => {
  res.send('detail' + req.params.id)
})

module.exports = router