const express = require("express");
const authController = require("../controllers/authControllers.js");

const router = express.Router();

router.post("/auth/signup", authController.userSignup);
router.post("/auth/login", authController.userLogin);

module.exports = router;
