import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4 pt-20">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">Blog</h2>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className="text-lg text-gray-300">Coming soon! Check back for insights on web development and cybersecurity.</p>
      </motion.div>
    </section>
  );
};

export default Blog;
