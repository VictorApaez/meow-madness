const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true , unique: true },
  password: { type: String, required: true },
  catImage: {type: mongoose.Schema.Types.ObjectId, ref: "CatImage"},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
