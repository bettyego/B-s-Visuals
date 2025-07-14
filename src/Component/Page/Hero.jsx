import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/eye.jpeg"
          alt="Background Eye"
          className="w-full h-full object-cover object-center opacity-40"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-80"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className={`space-y-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 glass px-6 py-3 rounded-full">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white/90 font-medium">Available for Projects</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold font-display leading-tight">
                <span className="block text-white mb-4">Creative</span>
                <span className="block gradient-text">Designer</span>
              </h1>
              <div className="flex items-center space-x-6">
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-2xl text-white/80 font-medium">Onuoha-Mba Bethel</span>
              </div>
            </div>
            {/* Description */}
            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
              I create stunning visual identities and designs that help businesses
              connect with their audience through powerful storytelling.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/mywork"
                className="group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <span>View My Work</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-10 py-4 glass rounded-full text-white font-semibold text-lg hover:glass-dark transition-all duration-300 border border-white/20"
              >
                <span>Contact</span>
              </Link>
            </div>
          </div>
          {/* Hero Image Placeholder */}
          <div className="flex justify-center items-center">
            {/* You can add an image or illustration here if desired */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
