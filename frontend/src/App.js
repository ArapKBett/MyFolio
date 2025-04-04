import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen font-mono">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<h1 className="text-center text-4xl pt-20">404 - Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
