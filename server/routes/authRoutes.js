const express = require("express");
const authController = require("../controllers/authControllers.js");

const router = express.Router();

console.log(authController);

router.post("/signup", authController.userSignup);
router.post("/login", authController.userLogin);
router.get("/verifyUser", authController.verifyToken, (req, res) => {
  res.json({
    user: req.user,
  });
});

module.exports = router;
