import React, { useState } from 'react';
import Header from './Header';

const categories = ['All', 'Logos', 'Flyers', 'Social Media'];

const graphicDesigns = [
  { src: '/menu.jpg', category: 'Flyers' },
  { src: '/WEDI.jpg', category: 'Flyers' },
  { src: '/night party flyer.png', category: 'Flyers' },
  { src: '/CS.jpg', category: 'Flyers' },
  { src: '/note.jpg', category: 'Flyers' },
  { src: '/errando.png', category: 'Logos' },
  { src: '/Initials Logo D.png', category: 'Logos' },
  { src: '/Grunge Logo.png', category: 'Logos' },
  { src: '/Dark Green Logo.png', category: 'Logos' },
  { src: '/fusion.png', category: 'Logos' },
  { src: '/Purple Abstract Logo.png', category: 'Logos' },
  { src: '/Minimalist Name Logo.png', category: 'Logos' },
  { src: '/bekkyLogo Design.png', category: 'Logos' },
  { src: '/albert logo.png', category: 'Logos' },
  { src: '/advt.jpg', category: 'Flyers' },
  { src: 'https://via.placeholder.com/600x800?text=Social+Media+1', category: 'Social Media' },
  { src: '/gold logo.png', category: 'Logos' },
  { src: '/hairlogo.png', category: 'Logos' },
  { src: '/emmt.png', category: 'Logos' },
  { src: '/aviation.jpg', category: 'Flyers' },
  { src: '/electronic.jpg', category: 'Flyers' },
  { src: '/FOOD TASTE.png', category: 'Flyers' },
  { src: '/genlit.jpg', category: 'Flyers' },
  { src: '/ik.png', category: 'Flyers' },
  { src: '/jespo.jpg', category: 'Flyers' },
  { src: '/mak.jpg', category: 'Flyers' },
  { src: '/makeup.jpg', category: 'Flyers' },
  { src: '/nana.png', category: 'Flyers' },
  { src: '/package.jpg', category: 'Flyers' },
  { src: '/pat.jpg', category: 'Flyers' },
  { src: '/tase quest.png', category: 'Flyers' },
  { src: '/tax.jpg', category: 'Flyers' },
  { src: '/businesscard.png', category: 'Flyers' },
  { src: 'https://via.placeholder.com/600x800?text=Social+Media+2', category: 'Social Media' },
];

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
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />
        )}
      </div>
    </>
  );
}

export default MyWork;
