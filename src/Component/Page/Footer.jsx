import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-black via-purple-950 to-blue-950 text-white pt-20 pb-10 relative z-10 border-t border-purple-700/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold font-display bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              B's DigitalDreams
            </h2>
            <p className="text-gray-400 text-lg">Professional Brand & Website Designer</p>
          </div>
          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Quick Links</h3>
            <div className="flex flex-col gap-1 text-base">
              <Link to="/" className="hover:text-purple-400 transition">Home</Link>
              <Link to="/mywork" className="hover:text-purple-400 transition">Portfolio</Link>
              <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
            </div>
          </div>
          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Let's Connect</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=tdcpvow"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:nwabethroseonuoha@gmail.com"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-4 flex items-center gap-2 mx-auto md:mx-0 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-blue-700 transition-all shadow-lg"
            >
              <ArrowUp className="w-5 h-5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} B's DigitalDreams. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
