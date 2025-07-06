import React, { useState, useEffect } from 'react';
import Header from './Header';
import { CATEGORIES, GRAPHIC_DESIGNS } from '../../constants/portfolio';
import { Search, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';

function MyWork() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const filteredDesigns = GRAPHIC_DESIGNS.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredDesigns.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredDesigns.length) % filteredDesigns.length);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center space-y-6">
          <div className="spinner mx-auto"></div>
          <p className="text-white/70 text-lg">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32">
        
        {/* Hero Section - More Spacious */}
        <div className="py-24 px-8">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <h1 className="text-6xl lg:text-8xl font-bold font-display">
              <span className="block text-white mb-4">My</span>
              <span className="block gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Explore my collection of creative designs and visual solutions.
            </p>
          </div>
        </div>

        {/* Search and Filter - Cleaner Layout */}
        <div className="px-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
              
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search designs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-6 py-4 w-80 glass rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-white/50" />
                <div className="flex flex-wrap gap-3">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'glass text-white/80 hover:text-white hover:glass-dark'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Grid - Better Spacing */}
        <div className="px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            
            {/* Results Count */}
            <div className="mb-12 text-center">
              <p className="text-white/60 text-lg">
                {filteredDesigns.length} design{filteredDesigns.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {/* Grid with Better Spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDesigns.map((item, index) => (
                <div
                  key={item.id || index}
                  className="group relative overflow-hidden rounded-3xl glass-dark hover:glass transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openModal(index)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title || `${item.category} design`}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Simple Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                        <p className="text-white/80">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredDesigns.length === 0 && (
              <div className="text-center py-24">
                <div className="text-8xl mb-8">🎨</div>
                <h3 className="text-3xl font-bold text-white mb-4">No designs found</h3>
                <p className="text-white/60 text-lg">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal - Cleaner Design */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-8">
            <div className="relative max-w-6xl max-h-full">
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 p-3 glass rounded-full text-white hover:glass-dark transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-4 glass rounded-full text-white hover:glass-dark transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-4 glass rounded-full text-white hover:glass-dark transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={filteredDesigns[currentImageIndex]?.src}
                alt={filteredDesigns[currentImageIndex]?.title || 'Design work'}
                className="max-w-full max-h-full object-contain rounded-3xl"
              />

              {/* Image Info */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glass px-8 py-4 rounded-full">
                <p className="text-white text-center font-medium">
                  {currentImageIndex + 1} / {filteredDesigns.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MyWork;
