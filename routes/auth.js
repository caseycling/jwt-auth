const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { registerValidation, loginValidation } = require('../validation');

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
  console.log(
    `Plain Text: ${req.body.password}\nHashed Password: ${hashedPassword}`
  );

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/login');

module.exports = router;
