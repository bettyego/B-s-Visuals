import React from 'react';
import Header from './page/Header';
import Hero from './page/Hero';
import Features from './page/Features';
import Footer from './page/Footer';
import CTA from './page/CTA';

const Body = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Body;