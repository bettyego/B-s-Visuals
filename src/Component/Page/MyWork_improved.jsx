import React, { useState, useMemo } from 'react';
import Header from './Header';
import { CATEGORIES, GRAPHIC_DESIGNS } from '../../constants/portfolio';
import { filterDesignsByCategory } from '../../utils/helpers';
import { useImageModal } from '../../hooks/useImageModal';

function MyWork() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Memoize filtered designs for performance
  const filteredDesigns = useMemo(() => 
    filterDesignsByCategory(GRAPHIC_DESIGNS, selectedCategory),
    [selectedCategory]
  );

  // Extract image URLs for modal
  const images = useMemo(() => 
    filteredDesigns.map(item => item.src),
    [filteredDesigns]
  );

  // Use custom hook for modal functionality
  const {
    isOpen,
    currentIndex,
    currentImage,
    openModal,
    closeModal,
    goToNext,
    goToPrevious,
    totalImages
  } = useImageModal(images);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-pink-100 text-purple-800 px-4 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Graphic Design Portfolio
            </h1>
            <p className="text-lg md:text-xl text-purple-600 max-w-2xl mx-auto">
              Creative posters, flyers, social media visuals, and more. 
              Explore my collection of professional design work.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12 flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-700 text-white shadow-lg transform scale-105'
                    : 'border-purple-300 text-purple-700 hover:bg-purple-100 hover:border-purple-400'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
                <span className="ml-2 text-xs opacity-75">
                  ({category === 'All' ? GRAPHIC_DESIGNS.length : 
                    GRAPHIC_DESIGNS.filter(item => item.category === category).length})
                </span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-purple-600">
              Showing {filteredDesigns.length} design{filteredDesigns.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDesigns.map((item, index) => (
              <div
                key={item.id || index}
                className="cursor-pointer group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                onClick={() => openModal(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(index);
                  }
                }}
                aria-label={`View ${item.title || 'design'} in full size`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title || `${item.category} design`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-sm mb-1">
                      {item.title || 'Design Work'}
                    </h3>
                    <p className="text-xs opacity-90">
                      {item.description || item.category}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-purple-700 text-white text-xs px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredDesigns.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                No designs found
              </h3>
              <p className="text-purple-600">
                Try selecting a different category to see more work.
              </p>
            </div>
          )}
        </div>

        {/* Enhanced Modal */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Navigation Buttons */}
              {totalImages > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Image */}
              <img
                src={currentImage}
                alt={filteredDesigns[currentIndex]?.title || 'Design work'}
                className="max-w-full max-h-full object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/50 rounded-lg px-4 py-2">
                <div className="text-sm font-medium mb-1">
                  {filteredDesigns[currentIndex]?.title || 'Design Work'}
                </div>
                <div className="text-xs opacity-90">
                  {currentIndex + 1} of {totalImages}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MyWork;
