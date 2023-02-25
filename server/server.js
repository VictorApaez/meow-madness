const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const catImageRoutes = require("./routes/catImageRoutes.js");
const CatImage = require("./models/CatImage.js");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api", catImageRoutes);

// Connect to MongoDB database
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err.message));

// Test route
app.post("/test", async (req, res) => {
  const catImage = new CatImage({
    imageUrl: "https://example.com/cat.jpg",
    user: "123456789012345678901234",
    votes: 0,
  });

  try {
    const newCatImage = await catImage.save();
    res.status(201).json(newCatImage);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
});
