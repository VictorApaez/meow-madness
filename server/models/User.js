const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // email: {type: String, required: true},
  username: {type: String, required: true},
  catImage: {type: mongoose.Schema.Types.ObjectId, ref: "CatImage"},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
