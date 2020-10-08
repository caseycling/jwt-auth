const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const verify = require('./verifyToken');

//GET CURRENT USER
router.get('/', verify, (req, res) => {
  res.send(req.user);
  User.findById({ _id: req.user });
});

// GET ALL POSTS
router.get('/all', async (req, res) => {
  try {
    const user = await Post.find();
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

//MAKE A POST
router.post('/post', async (req, res) => {
  //Check if email is valid
  const email = await User.findOne({ email: req.body.email });
  if (!email) return res.status(400).send('Not a valid email');
  //Save new post
  const post = new Post({
    email: req.body.email,
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    console.log(savedPost);
    res.send({ id: post.id });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
