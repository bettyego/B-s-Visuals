// Performance monitoring utilities

export const measurePerformance = (name, fn) => {
  return async (...args) => {
    const start = performance.now();
    const result = await fn(...args);
    const end = performance.now();
    
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  };
};

export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export const trackImageLoad = (src) => {
  const start = performance.now();
  
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      const end = performance.now();
      console.log(`Image ${src} loaded in ${end - start}ms`);
      resolve(img);
    };
    
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadCriticalImages = (images) => {
  return Promise.all(
    images.map(src => trackImageLoad(src))
  );
};

// Lazy loading utility
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px'
  };

  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = performance.memory;
    console.log({
      usedJSHeapSize: `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
      totalJSHeapSize: `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
      jsHeapSizeLimit: `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`
    });
  }
};

// Network information
export const getNetworkInfo = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    };
  }
  return null;
};
