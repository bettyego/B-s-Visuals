import React, { useState, useMemo } from 'react';
import Header from './Header';
import { CATEGORIES, GRAPHIC_DESIGNS } from '../../constants/portfolio';
import { filterDesignsByCategory } from '../../utils/helpers';
import { useImageModal } from '../../hooks/useImageModal';

function MyWork() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filteredDesigns =
    selectedCategory === 'All'
      ? graphicDesigns
      : graphicDesigns.filter((item) => item.category === selectedCategory);

  const images = filteredDesigns.map((item) => item.src);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-pink-100 text-purple-800 px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-2">Graphic Design Works</h1>
        <p className="text-center text-lg mb-8">Creative posters, flyers, social media visuals, and more.</p>

        <div className="flex justify-center mb-8 flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-purple-700 text-white shadow-md'
                  : 'border-purple-300 text-purple-700 hover:bg-purple-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filteredDesigns.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-[300px] object-fill transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
              >
                ✕
              </button>

              <button
                onClick={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-10"
              >
                ‹
              </button>

              <button
                onClick={() => setPhotoIndex((photoIndex + 1) % images.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-10"
              >
                ›
              </button>

              <img
                src={images[photoIndex]}
                alt=""
                className="max-w-full max-h-full object-contain"
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {photoIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MyWork;
