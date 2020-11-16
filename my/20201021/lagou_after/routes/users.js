var express = require('express');
var router = express.Router();
var ControllerUser = require('../controller/users')

/* GET users listing. */
router.post('/register' , ControllerUser.register)
router.post('/login' , ControllerUser.login)
router.get('/info' , ControllerUser.info)

module.exports = router;
