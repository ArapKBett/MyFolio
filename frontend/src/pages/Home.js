import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 pt-20 relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 320">
        <path fill="none" stroke="#00FFFF" strokeWidth="2" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160" />
      </svg>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 glitch" data-text="Web & Cybersecurity Pro">
          Web & Cybersecurity Pro
        </h1>
        <p className="mt-4 text-xl text-gray-300">Securing the digital world, one line of code at a time.</p>
        <button className="mt-6 px-6 py-3 bg-cyan-500 text-gray-900 font-bold rounded-full hover:bg-cyan-400 transition-all">
          <Link to="/portfolio">View My Work</Link>
        </button>
      </motion.div>
    </section>
  );
};

export default Home;
