import React from 'react';
// 1. Import Link from react-router-dom
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-auto border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side: Branding / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-bold text-lg">MUGISHA GILBERT</h2>
          <p className="text-sm mt-1">Frontend Developer & Designer</p>
        </div>

        {/* Center: Quick Links using React Router Link */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium list-none p-0 m-0">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-white transition-colors">Skills</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Right Side: Copyright */}
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Mugisha Gilbert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
