var mongoose = require('mongoose')
var PostSchema = mongoose.Schema({
  postName : {type : String , required :true},
  postCity : {type : String , required :true},
  postCompany : {type : String , required :true},
  postNumber : {type : String , required :true},
  postMoney : {type : String , required :true},
  postYear : {type : String , required :true},
  postEdu : {type : String , required :true},
  Date : {type : Date , default : Date.now},
  postId : {type : Number , required : true}
})

var PostModel = mongoose.model('postList' , PostSchema)
module.exports = PostModel