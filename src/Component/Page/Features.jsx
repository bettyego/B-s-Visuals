import React, { useState, useEffect } from 'react';
import { Palette, Zap, Star } from 'lucide-react';

function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('features-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete visual identity systems that make your brand memorable and professional.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Logo Design',
      description: 'Unique, memorable logos that perfectly represent your business and values.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      title: 'Print & Digital',
      description: 'Beautiful designs for both print materials and digital platforms.',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  const stats = [
    { value: '50+', label: 'Projects' },
    { value: '2+', label: 'Years' },
    { value: '25+', label: 'Clients' }
  ];

  return (
    <section id="features-section" className="min-h-screen bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl lg:text-7xl font-bold font-display mb-8">
            <span className="text-gray-900">What I</span>
            <span className="text-purple-600 ml-4">Create</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {/* ...existing code... */}
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`group bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center border-t-4 border-b-4 border-transparent hover:border-purple-400 transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold text-purple-600 mb-2 drop-shadow-lg">{stat.value}</div>
              <div className="text-lg text-gray-700 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
