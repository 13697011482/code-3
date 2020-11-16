var express = require('express');

var MovieModel = require('../model/movie');
var router = express.Router();

router.get('/list' , (req,res,next) => {
  MovieModel.find().limit(4).sort().then((infos => {
    res.render('list' , {
      movieList : infos
    });
  }));
});

router.get('/detail/:id' , (req,res,next) => {
  var id = req.params.id
  MovieModel.findOne({_id : id}).then(info => {
    res.render('detail' , {
      movieDetail : info
    })
  })
});
router.get('/admin' , (req,res,next) => {
  res.render('admin');
});

module.exports = router