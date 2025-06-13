import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '/b.JPG';

function Hero() {
  return (
    <section className="bg-purple-700 text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-8">
      
    <div className="md:w-3/5 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Onuoha-Mba Bethel
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-6">
          I'm a Creative Graphic Designer specializing in logos, flyers, and social media designs, offering services like brand identity development, print materials, digital graphics, infographics, and presentation design to help businesses and individuals create unique and effective visual content that increases brand visibility and online presence.
        </p>

        
        <Link
          to="/mywork"
          className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-100 transition duration-300"
        >
          View My Work
        </Link>
      </div>

      {/* Image Section with Zoom Effect */}
      <div className="md:w-2/5 flex justify-center">
        <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <img
            src={heroImage}
            alt="Graphic Design Showcase"
            className="w-full max-w-md h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
