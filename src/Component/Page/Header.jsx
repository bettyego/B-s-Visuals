import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/mywork', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg shadow-lg border-b border-purple-700/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold font-display tracking-tight hover:opacity-90 transition">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            B's DigitalDreams
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex text-base font-semibold">
          <div className="flex gap-10">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-1 transition-colors duration-200 ${
                  location.pathname === link.to ? 'text-purple-400' : 'hover:text-purple-300'
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden focus:outline-none text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-black/95 text-white px-6 py-6 space-y-4 rounded-b-xl shadow-lg animate-slide-down">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`block text-lg font-semibold py-2 px-2 rounded transition ${
                location.pathname === link.to ? 'text-purple-400' : 'hover:text-purple-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
