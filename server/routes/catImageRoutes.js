const express = require("express");
const catImageController = require("../controllers/catImageController.js");

const router = express.Router();

router.get("/cat-images", catImageController.getCatImages);
router.post("/cat-images", catImageController.createCatImage);
router.put("/cat-images/:id", catImageController.updateCatImageById);
router.delete("/cat-images/:id", catImageController.deleteCatImageById);

module.exports = router;
