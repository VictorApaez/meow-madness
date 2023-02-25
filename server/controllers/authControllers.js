require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require("bcrypt");
const User = require("../models/User.js");

const userSignup = async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if (user) {
      return res.json({error: "User already exists"});
    }
    const newUser = new User({username, password});
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();
    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
    const data = {token};
    res.json(data);
  } catch (err) {
    res.json(err);
  }
};

const userLogin = async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if (!user) {
      return res.json({error: "User does not exist"});
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({error: "Invalid password"});
    }
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    const data = {token};
    res.json(data);
  } catch (err) {
    res.json(err);
  }
};

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } else {
    res.status(401).json({error: "No token provided"});
  }
};

module.exports = { userSignup, userLogin, verifyToken };
