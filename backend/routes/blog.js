const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');
const Comment = require('../models/Comment');

// Get all blog posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new blog post (add authentication in production)
router.post('/posts', async (req, res) => {
  const post = new BlogPost({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get comments for a specific blog post
router.get('/comments/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ blogPostId: req.params.postId }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a comment to a blog post
router.post('/comments', async (req, res) => {
  const comment = new Comment({
    blogPostId: req.body.blogPostId,
    author: req.body.author,
    content: req.body.content,
  });
  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
