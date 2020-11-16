var mongoose = require('mongoose')

var ActiveSchema = mongoose.Schema({
  activeImage : { type : String , required : true },
  activeName : { type : String , required :true },
  activeType : { type : String , required : true },
  smIcon : {type : String , required :true },
  disCount : {type : String , required : true },
  // OldimageUrl : { type : String , required : true },
  postId : { type : Number , required : true },
  date : { type : Date , default : Date.now }
})

var ActiveModel = mongoose.model('activeList' , ActiveSchema)
module.exports = ActiveModel