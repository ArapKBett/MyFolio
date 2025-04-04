import React, { useState } from 'react';
import axios from 'axios';

const BlogPostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== 'your-secret-password') { // Replace with a secure method in production
      setError('Incorrect password');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/blog/posts', { title, content }); // Update URL for production
      onPostCreated(response.data);
      setTitle('');
      setContent('');
      setPassword('');
      setError('');
    } catch (err) {
      setError('Failed to create post');
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg mb-8">
      <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Create a New Post</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-3 bg-gray-900 rounded-lg text-white border border-cyan-500 focus:outline-none focus:border-purple-500"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="w-full p-3 bg-gray-900 rounded-lg text-white h-32 border border-cyan-500 focus:outline-none focus:border-purple-500"
        ></textarea>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 bg-gray-900 rounded-lg text-white border border-cyan-500 focus:outline-none focus:border-purple-500"
        />
        <button type="submit" className="px-6 py-3 bg-purple-500 text-gray-900 font-bold rounded-full hover:bg-purple-400 transition-all">
          Post
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default BlogPostForm;
