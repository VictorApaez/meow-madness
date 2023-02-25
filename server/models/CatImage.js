const mongoose = require("mongoose");

const catImageSchema = new mongoose.Schema({
  imageUrl: {type: String, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  votes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const CatImage = mongoose.model("CatImage", catImageSchema);

module.exports = CatImage;
