const { Router } = require("express");
const { UserModel } = require("../models/user.model");
const userController = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

userController.post("/signup", (req, res) => {
  let { email, password, age } = req.body;

  bcrypt.hash(password, 5).then(async (hash) => {
    const user = new UserModel({
      email,
      password: hash,
      age,
    });
    // console.log(user)
    await user.save();
    res.send({ msg: "Successfully signed up" });
  });
});
userController.post("/login", async (req, res) => {
  let { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });
  const hash = user.password;

  bcrypt.compare(password, hash, (err, result) => {
    if (result) {
      const token = jwt.sign({ userId: user._id }, SECRET_KEY);
      res.send({
        msg: "Successfully  Logged in",
        token: token,
      });
    } else {
      res.send("Failed to login... Please enter valid credentials.");
    }
  });
});

module.exports = {
  userController,
};
