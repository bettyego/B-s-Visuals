import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Onuoha-Mba Bethel</h1>
      <nav className="space-x-6 text-sm sm:text-base">
        <Link to="/" className="hover:text-purple-300 transition">Home</Link>
        <Link to="/mywork" className="hover:text-purple-300 transition">My Work</Link>
        <Link to="/contact" className="hover:text-purple-300 transition">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
