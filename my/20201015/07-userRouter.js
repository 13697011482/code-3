var express = require('express');
var router = express.Router();

router.post('/login' , (req,res,next) => {
  res.send('user login')
})
router.post('/register' , (req,res,next) => {
  res.send('user register')
})
router.post('/logout' , (req,res,next) => {
  res.send('user logout')
})

module.exports = router
