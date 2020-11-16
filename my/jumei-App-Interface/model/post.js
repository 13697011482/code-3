var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)

var PostSchema = mongoose.Schema({
  imageUrl : { type : String , required : true },
  goodsName : { type : String , required : true },
  goodsNewPrice : { type : String , required : true },
  goodsOldPrice : { type : String , required : true },
  goodsType : { type : String , required : true },
  goodsShop : { type : String , required : true },
  banner : { type : Array , required : true },
  buyNumber : { type : String , required : true },
  shopIcon : {type : String , required : true },
  smIcon : { type : String },
  postId : { type : Number , required : true },
  postDate : {  type : Date , default : Date.now }
})

var PostModel = mongoose.model("postList" , PostSchema)

module.exports = PostModel