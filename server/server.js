const express = require("express");
const MONGO_URI = process.env.MONGO_URI;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const catImageRoutes = require("./routes/catImageRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const CatImage = require("./models/CatImage.js");
const User = require("./models/User.js");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const connectVar =
  process.env.MONGO_URI || "mongodb://localhost:27017/meowmadness";

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api", catImageRoutes);
app.use("/auth", authRoutes);

// Connect to MongoDB database
mongoose.set("strictQuery", false);
console.log(process.env.MONGO_URI);
mongoose
  .connect(connectVar, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err.message));

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { filename } = req.file;

    const user = await User.findOne({ username: req.body.username });
    const image = new CatImage({
      filename,
      user: user._id,
      imageUrl: "http://localhost:5000/uploads/" + filename,
    });

    await image.save();
    res.json(image);
  } catch (err) {
    res.send(err);
  }
});
app.use("/uploads", express.static("uploads"));
