const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  blogPostId: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost', required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', commentSchema);
