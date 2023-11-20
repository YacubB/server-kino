const Genre = require("../models/Genre.model");

module.exports.genresController = {

  getGenres: async (req, res) => {
    const genre = await Genre.find();

    res.json(genre);
  },
  
  postGenre: async (req, res) => {
    const { title } = req.body;

    try {
      const genre = await Genre.create({ title });
      await res.json(genre);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
} 