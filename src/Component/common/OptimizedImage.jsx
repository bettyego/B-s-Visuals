import React, { useState, useRef, useEffect } from 'react';
import LoadingSkeleton from './LoadingSkeleton';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
  };

  // Generate responsive image sources
  const getImageSrc = (src) => {
    if (src.startsWith('http')) return src;
    return src.startsWith('/') ? src : `/${src}`;
  };

  const getWebPSrc = (src) => {
    const imageSrc = getImageSrc(src);
    return imageSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <LoadingSkeleton className="absolute inset-0 w-full h-full" />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">📷</div>
            <p className="text-sm">Image not found</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <picture>
          {/* WebP source for modern browsers */}
          <source srcSet={getWebPSrc(src)} type="image/webp" />
          
          {/* Fallback for older browsers */}
          <img
            src={getImageSrc(src)}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            width={width}
            height={height}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
