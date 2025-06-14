import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Onuoha-Mba Bethel</h1>

        {/* Hamburger Icon (mobile) */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav links (desktop) */}
        <nav className="hidden sm:flex space-x-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-purple-300 transition">Home</Link>
          <Link to="/mywork" className="hover:text-purple-300 transition">MyWork</Link>
          <Link to="/contact" className="hover:text-purple-300 transition">Contact</Link>
        </nav>
      </div>

      {/* Nav links (mobile dropdown) */}
      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col space-y-4 text-sm bg-black/80 p-4 rounded-lg">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-purple-300 transition">Home</Link>
          <Link to="/mywork" onClick={() => setMenuOpen(false)} className="hover:text-purple-300 transition">MyWork</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-300 transition">Contact</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
