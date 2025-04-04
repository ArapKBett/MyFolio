import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData); // Replace with your backend URL after deployment
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section className="py-20 max-w-6xl mx-auto px-4 pt-20">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">Contact Me</h2>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className="text-lg text-gray-300">Phone: +254703652022</p>
        <p className="text-lg text-gray-300">Email: bettarap254@gmail.com</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 bg-gray-800 rounded-lg text-white border border-cyan-500 focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 bg-gray-800 rounded-lg text-white border border-cyan-500 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-3 bg-gray-800 rounded-lg text-white h-32 border border-cyan-500 focus:outline-none focus:border-purple-500"
          ></textarea>
          <button type="submit" className="px-6 py-3 bg-purple-500 text-gray-900 font-bold rounded-full hover:bg-purple-400 transition-all">
            Send
          </button>
        </form>
        {status && <p className="mt-4 text-gray-300">{status}</p>}
      </motion.div>
    </section>
  );
};

export default Contact;
