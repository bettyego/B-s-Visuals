import React from 'react';

const LoadingSkeleton = ({ className = '', count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-gray-200 rounded-lg ${className}`}
        >
          <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg"></div>
        </div>
      ))}
    </>
  );
};

export const PortfolioSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="bg-gray-200 rounded-3xl h-80 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="space-y-4">
              <div className="h-16 bg-gray-200 rounded w-full"></div>
              <div className="h-16 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
            <div className="flex space-x-4">
              <div className="h-12 bg-gray-200 rounded-full w-32"></div>
              <div className="h-12 bg-gray-200 rounded-full w-32"></div>
            </div>
          </div>
          <div className="animate-pulse">
            <div className="bg-gray-200 rounded-3xl h-[600px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
