var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
  movieName : String,
  movieUrl : String,
  movieInfo : String
})

var MovieModel = mongoose.model('movieList' , movieSchema);

module.exports = MovieModel;