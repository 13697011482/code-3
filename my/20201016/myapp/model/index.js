var mongoose = require('mongoose')
var MovieSchema = mongoose.Schema({
  movieName : {type : String , required : true},
  movieUrl : {type : String , required : true},
  movieInfo : {type : String , required : true}
})

var MovieModel = mongoose.model('movieList' , MovieSchema);

module.exports = MovieModel
