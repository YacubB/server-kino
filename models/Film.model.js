const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
  years: Number,
  country: String,
  genre: String,
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
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;
