const CatImage = require("../models/CatImage.js");

// Get all cat images
module.exports.getCatImages = async (req, res) => {
  try {
    const catImages = await CatImage.find();
    res.json(catImages);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
};

// Get a specific cat image by ID
module.exports.getCatImageById = async (req, res) => {
  try {
    const {id} = req.params;
    const catImage = await CatImage.findById(id);

    if (catImage) {
      return res.json(catImage);
    }

    res.status(404).json({message: "Cat image not found!"});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
};

// Create a new cat image
module.exports.createCatImage = async (req, res) => {
  try {
    const {imageUrl, userId} = req.body;
    const newCatImage = await CatImage.create({imageUrl, user: userId});
    res.status(201).json(newCatImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
};

// Update a cat image by ID
module.exports.updateCatImageById = async (req, res) => {
  try {
    const {id} = req.params;
    const updatedCatImage = await CatImage.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (updatedCatImage) {
      return res.json(updatedCatImage);
    }

    res.status(404).json({message: "Cat image not found!"});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
};

// Delete a cat image by ID
module.exports.deleteCatImageById = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedCatImage = await CatImage.findByIdAndDelete(id);

    if (deletedCatImage) {
      return res.status(200).send("Cat image deleted!");
    }

    res.status(404).json({message: "Cat image not found!"});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
};
