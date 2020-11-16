var MovieModel = require('../model/index')
var list = (req,res,next) => {
  // res.send('list')
  MovieModel.find().then((infos) => {
    res.render('list' , ({
      movieList : infos
    }))
  })
}
var detail = (req,res,next) => {
  // res.send('detail')
  var id = req.params.id
  MovieModel.findOne({_id : id}).then(info => {
    res.render('detail' , {
      movieDetail : info
    })
  })
}
var admin = (req,res,next) => {
  res.render('admin')
}
module.exports = {
  list,
  detail,
  admin
}