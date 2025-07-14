import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-300 via-purple-500 to-purple-600 flex items-center justify-center px-6 py-20 text-white">
      <div className="max-w-4xl text-center space-y-10">

        {/* Heading */}
        <h3 className="text-4xl md:text-6xl font-bold leading-tight">
          Let’s Create Something<br className="hidden md:inline" /> Unique Together
        </h3>

        {/* Subheading */}
        <p className="text-lg text-white/80 max-w-xl mx-auto">
          Ready to elevate your brand with visually stunning graphics? I'm just a click away.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-800 font-semibold rounded-full text-lg shadow-lg hover:shadow-xl hover:bg-purple-100 transition-all duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Link>
          <Link
            to="/mywork"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-purple-800 transition-all duration-300"
          >
            View My Work
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Optional: Service Highlights */}
        <div className="grid md:grid-cols-3 gap-8 pt-16 text-white/80 text-sm">
          <div>
            <h4 className="font-semibold text-white mb-2">Logo Design</h4>
            <p>Create timeless and professional brand identities.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Flyers & Print</h4>
            <p>Design for events, promotions, and business branding.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Social Media</h4>
            <p>Graphics that boost engagement and reflect your brand.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
