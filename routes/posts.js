const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const verify = require('./verifyToken');

//GET CURRENT USER
router.get('/', verify, (req, res) => {
  console.log(`GET CURRENT USER:`);
  console.log(req.user);
  res.send(req.user);
  User.findById({ _id: req.user });
});

// GET ALL POSTS
router.get('/all', async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (err) {
    res.send(err);
  }
});

// GET POSTS FROM OTHER USERS
router.get('/all/:id', async (req, res) => {
  try {
    console.log('GET POSTS FROM OTHER USERS');
    console.log(req.params.id);

    const user = await User.find({ _id: req.params.id });
    console.log(user);

    const posts = await Post.find({ email: { $ne: user[0].email } });
    console.log(posts);
    res.send(posts);
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
