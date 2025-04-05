import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects') // Replace with your backend URL after deployment
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="py-20 max-w-6xl mx-auto px-4 pt-20">
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am a Developer and Cybersecurity Specialist experienced in crafting secure Websites, App and Software Systems. I’ve led teams and helped reduce vulnerabilities with cutting-edge security audits.
        </p>
      </div>

      <div className="mb-20 bg-gray-800 py-10">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            { title: 'Languages', items: ['HTML', 'JavaScript', , 'Node.js', 'React', 'Tailwind', 'C', 'C++', 'Java', 'Python', 'Kotlin', 'Angular', 'SQL'] },
            { title: 'Specialty', items: ['Penetration Testing', 'Nmap', 'Burp Suite', 'Kali Linux', 'Cryptography', 'Threat Modeling'] },
            { title: 'Tools', items: ['Figma', 'Azure', 'Metasploit', 'Wireshark', 'OWASP ZAP', 'Nessus'] },
          ].map((skill) => (
            <motion.div key={skill.title} whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-lg shadow-lg border border-cyan-500">
              <h3 className="text-2xl font-semibold text-purple-400">{skill.title}</h3>
              <ul className="mt-4 space-y-2 text-gray-300">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">Experience</h2>
        <div className="space-y-8">
          {[
            { role: 'Lead Consultant, Teaburg International', time: 'March 2022 - Present', tasks: ['Reduced vulnerabilities by 80%', 'Implemented firewalls', 'System and Network Stability'] },
            { role: 'Internal Web Developer, Autoburg International', time: 'June 2020 - Feb 2022', tasks: ['Built secure intranet', 'Optimized performance'] },
          ].map((job) => (
            <motion.div key={job.role} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-400">{job.role}</h3>
              <p className="text-gray-400">{job.time}</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                {job.tasks.map((task) => (
                  <li key={task} className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span> {task}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 py-10">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {projects.map((project) => (
            <motion.div key={project._id} whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-lg shadow-lg border border-purple-500">
              <h3 className="text-2xl font-semibold text-cyan-400">{project.name}</h3>
              <p className="text-gray-400">{project.tech}</p>
              <p className="mt-2 text-gray-300">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
