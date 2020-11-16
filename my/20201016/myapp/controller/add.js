var MovieModel = require('../model/index')
var add = (req,res,next) => {
  var body = req.body;
  console.log(body);
  MovieModel(body).save().then((info) => {
    if(info){
      res.send('<script>alert("添加成功！"); window.history.back(); </script>')
    }
  }).catch((err) => {
    if(err){
      res.send('<script>alert("添加失败！"); window.history.back(); </script>')
    }
  })
}
module.exports = {
  add
}