var mongoose = require('mongoose')

var CountSchema = mongoose.Schema({
  postId : {type : Number , required : true}
})

var CountModel = mongoose.model('countList' , CountSchema)

module.exports = CountModel