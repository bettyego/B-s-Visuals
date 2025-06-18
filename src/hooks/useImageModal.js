import { useState, useCallback, useEffect } from 'react';

/**
 * Custom hook for managing image modal state
 * @param {Array} images - Array of image URLs
 * @returns {Object} Modal state and controls
 */
export const useImageModal = (images = []) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = useCallback((index = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToIndex = useCallback((index) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, closeModal, goToNext, goToPrevious]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return {
    isOpen,
    currentIndex,
    currentImage: images[currentIndex],
    openModal,
    closeModal,
    goToNext,
    goToPrevious,
    goToIndex,
    hasNext: currentIndex < images.length - 1,
    hasPrevious: currentIndex > 0,
    totalImages: images.length
  };
};
