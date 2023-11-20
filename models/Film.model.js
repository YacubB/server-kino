const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
  years: Number,
  country: String,
  duration: String,
  director: String,
  cast: String,
  image: String,
  name: String,
  description: String,
  url: String,
  grade: Number,
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  genreId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Genre",
  },
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;
