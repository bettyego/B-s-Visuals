import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this import
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-purple-800 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">Onuoha-Mba Bethel</h2>
          <p className="text-sm mt-2">Creative Graphic Designer</p>
        </div>

        {/* Navigation */}
        <div className="space-x-6 text-sm">
          <Link to="/" className="hover:text-purple-300 transition">Home</Link>
          <Link to="/mywork" className="hover:text-purple-300 transition">My Work</Link>
          <Link to="/contact" className="hover:text-purple-300 transition">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=tdcpvow" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">
            <FaInstagram size={20} />
          </a>
          <a href="mailto:nwabethroseonuoha@gmail.com" className="hover:text-purple-300">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 opacity-75">
        &copy; {new Date().getFullYear()} Onuoha-Mba Bethel. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
