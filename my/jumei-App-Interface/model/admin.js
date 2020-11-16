var mongoose = require('mongoose')

var AdminSchema = mongoose.Schema({
  username : { type : String , required : true , unique : true }, 
  password : { type : String , required : true }, 
})

var AdminModel = mongoose.model('adminList' , AdminSchema)

module.exports = AdminModel
