import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin, FaBehance } from 'react-icons/fa';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  const services = [
    'Brand Identity',
    'Logo Design',
    'Print Design',
    'Digital Graphics',
    'Marketing Materials'
  ];

  const socialLinks = [
    {
      icon: <FaInstagram className="w-5 h-5" />,
      url: 'https://instagram.com/bettytech_designs',
      name: 'Instagram'
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      url: 'https://facebook.com/bettytechdesigns',
      name: 'Facebook'
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/bettytech',
      name: 'LinkedIn'
    },
    {
      icon: <FaBehance className="w-5 h-5" />,
      url: 'https://behance.net/bettytech',
      name: 'Behance'
    }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-display font-semibold">BettyTech</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Professional graphic design services that help businesses create 
              strong visual identities and connect with their audiences.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-medium">Available for Projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href="mailto:hello@bettytech.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  hello@bettytech.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href="tel:+2348064111501"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  +234 806 411 1501
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-gray-300 text-sm">Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-white hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              &copy; {currentYear} BettyTech. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
