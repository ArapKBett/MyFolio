import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/blog/comments/${postId}`); // Update URL for production
      setComments(response.data);
    } catch (err) {
      console.error('Failed to fetch comments', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!author || !content) {
      setError('Please fill in all fields');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/blog/comments', { blogPostId: postId, author, content }); // Update URL
      setComments([response.data, ...comments]);
      setAuthor('');
      setContent('');
      setError('');
    } catch (err) {
      setError('Failed to add comment');
    }
  };

  return (
    <div className="mt-6">
      <h4 className="text-xl font-semibold text-purple-400 mb-4">Comments</h4>
      <div className="space-y-4 max-h-64 overflow-y-auto">
        {comments.map((comment) => (
          <motion.div
            key={comment._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 bg-gray-900 rounded-lg border border-cyan-500"
          >
            <p className="text-gray-300">{comment.content}</p>
            <p className="text-sm text-gray-400 mt-2">— {comment.author} on {new Date(comment.createdAt).toLocaleDateString()}</p>
          </motion.div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your Name"
          className="w-full p-3 bg-gray-900 rounded-lg text-white border border-cyan-500 focus:outline-none focus:border-purple-500"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a comment"
          className="w-full p-3 bg-gray-900 rounded-lg text-white h-24 border border-cyan-500 focus:outline-none focus:border-purple-500"
        ></textarea>
        <button type="submit" className="px-6 py-3 bg-cyan-500 text-gray-900 font-bold rounded-full hover:bg-cyan-400 transition-all">
          Comment
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default CommentSection;
