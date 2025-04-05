import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaReddit, FaDiscord } from 'react-icons/fa';
import { SiWechat } from 'react-icons/si'; // Simple Icons for WeChat

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4 md:flex-row md:justify-between">
        {/* Copyright */}
        <p>© 2025 Kipkorir Arap Bett. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/ArapKBett"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-cyan-400 transition-colors"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/kipkorir-bett-ba580a321"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href="https://twitter.com/kp15_5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-cyan-400 transition-colors"
          >
            <FaTwitter className="mr-2" /> X
          </a>
          <a
            href="https://reddit.com/user/Waste_Explanation410"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-cyan-400 transition-colors"
          >
            <FaReddit className="mr-2" /> Reddit
          </a>
          <a
            href="https://discord.com/users/Sharbc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-cyan-400 transition-colors"
          >
            <FaDiscord className="mr-2" /> Discord
          </a>
          <a
            href="weixin://dl/chat?AK_Bett"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-cyan-400 transition-colors"
          >
            <SiWechat className="mr-2" /> WeChat
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
