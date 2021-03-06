const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { registerValidation, loginValidation } = require('../validation');

//REGISTER NEW USER
router.post('/register', async (req, res) => {
  //Validate data before adding user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if user already exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send('Email already exists');

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  try {
    const savedUser = await user.save();
    console.log(savedUser);
    console.log(token);
    res.send({ user: user.id, token: token });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN USER
router.post('/login', async (req, res) => {
  try {
    //Check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email does not exist');

    //Check password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Incorrect password');

    //Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    console.log(user._id);
    res.header('auth-token', token).send(token);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
