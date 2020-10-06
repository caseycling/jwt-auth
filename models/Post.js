const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  title: {
    type: String,
    required: true,
    min: 1,
    max: 62,
  },
  description: {
    type: String,
    required: true,
    min: 1,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', PostSchema);
