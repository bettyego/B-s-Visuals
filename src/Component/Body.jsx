import React from 'react';
import Header from './page/Header';
import Hero from './page/Hero';
import Features from './page/Features';
import Footer from './page/Footer';

const Body = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Body;