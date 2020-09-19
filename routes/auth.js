const router = require('express').Router();
// const { restart } = require('nodemon');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

router.post('/login');

module.exports = router;
