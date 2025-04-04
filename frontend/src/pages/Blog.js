import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import BlogPostForm from '../components/BlogPostForm';
import CommentSection from '../components/CommentSection';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/blog/posts'); // Update URL for production
      setPosts(response.data);
    } catch (err) {
      console.error('Failed to fetch posts', err);
    }
  };

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <section className="py-20 max-w-6xl mx-auto px-4 pt-20">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">Blog</h2>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        {/* Blog Post Form */}
        <BlogPostForm onPostCreated={handlePostCreated} />

        {/* Scrollable Blog Posts */}
        <div className="space-y-8 max-h-[calc(100vh-200px)] overflow-y-auto">
          {posts.length === 0 ? (
            <p className="text-gray-300">No posts yet. Check back soon!</p>
          ) : (
            posts.map((post) => (
              <div key={post._id} className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-purple-400">{post.title}</h3>
                <p className="text-gray-400 mt-2">{new Date(post.createdAt).toLocaleDateString()} by {post.author}</p>
                <p className="text-gray-300 mt-4">{post.content}</p>
                <CommentSection postId={post._id} />
              </div>
            ))
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;
