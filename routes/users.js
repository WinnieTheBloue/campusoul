import express from "express";
const router = express.Router();
const User = require('../models/user');

router.get("/", function (req, res, next) {
  res.send("Got a response from the users route");
});

router.post('/users', async (req, res) => {
  // try {
  //   const user = new User(req.body);
  //   await user.save();
  //   res.json(user);
  // } catch (err) {
  //   res.status(400).json({ error: err.message });
  // }
  console.log(req.body);
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;