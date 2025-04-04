const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: 'Kipkorir Bett' }, // You can customize this
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
