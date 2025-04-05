import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    document.documentElement.classList.toggle('light');
    setIsDark(!isDark);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Kipkorir Arap Bett</h1>
        <ul className="flex space-x-6">
          {[
            { name: 'Home', path: '/' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Blog', path: '/blog' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? 'text-cyan-400' : 'hover:text-cyan-400 transition-colors'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme} className="text-gray-300 hover:text-cyan-400">
              {isDark ? 'Light' : 'Dark'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


