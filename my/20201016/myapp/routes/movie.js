var express = require('express');
const { render } = require('../app');
var router = express.Router();
var ControllerMovie = require('../controller/add')

/* GET users listing. */
router.post('/add', ControllerMovie.add);

module.exports = router;
