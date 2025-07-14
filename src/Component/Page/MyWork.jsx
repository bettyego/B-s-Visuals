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
    setTimeout(() => setIsLoading(false), 600);
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
      <div className="min-h-screen flex items-center justify-center bg-purple-800">
        <div className="text-center space-y-6">
          <div className="spinner mx-auto" />
          <p className="text-white text-lg">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-purple-900 pt-28">

        {/* Search & Filters */}
        <div className="max-w-5xl mx-auto px-4 mb-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search designs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-purple-300 text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 flex-wrap">
              <Filter className="text-purple-400 w-5 h-5" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'border-purple-300 text-purple-700 hover:bg-purple-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto px-6 pb-24">
          {filteredDesigns.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDesigns.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openModal(index)}
                  className="relative cursor-pointer rounded-xl overflow-hidden border border-purple-200 hover:border-purple-500 transition-transform transform hover:scale-[1.015] group bg-white shadow-md"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-purple-900/80 to-transparent p-4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                  <span className="absolute top-4 left-4 bg-purple-600 text-xs px-3 py-1 rounded-full text-white font-medium">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 space-y-4">
              <div className="text-7xl">🎨</div>
              <h2 className="text-2xl font-semibold">No designs found</h2>
              <p className="text-purple-500">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6">
            <button onClick={closeModal} className="absolute top-6 right-6 text-white hover:text-red-500">
              <X className="w-6 h-6" />
            </button>
            <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-purple-300">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <img
              src={filteredDesigns[currentImageIndex]?.src}
              alt={filteredDesigns[currentImageIndex]?.title}
              className="max-h-[80vh] rounded-lg object-contain shadow-lg"
            />
            <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-purple-300">
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {currentImageIndex + 1} of {filteredDesigns.length}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MyWork;
