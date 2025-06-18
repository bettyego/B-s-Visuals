// Utility functions for the portfolio

/**
 * Filter designs by category
 * @param {Array} designs - Array of design objects
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered designs
 */
export const filterDesignsByCategory = (designs, category) => {
  if (category === 'All') return designs;
  return designs.filter(design => design.category === category);
};

/**
 * Get image URL with fallback
 * @param {string} src - Image source
 * @returns {string} Image URL
 */
export const getImageUrl = (src) => {
  if (src.startsWith('http')) return src;
  return src.startsWith('/') ? src : `/${src}`;
};

/**
 * Generate mailto link with subject and body
 * @param {string} email - Email address
 * @param {string} subject - Email subject
 * @param {string} body - Email body
 * @returns {string} Mailto URL
 */
export const generateMailtoLink = (email, subject = '', body = '') => {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  
  const queryString = params.toString();
  return `mailto:${email}${queryString ? `?${queryString}` : ''}`;
};

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Check if image is loaded
 * @param {string} src - Image source
 * @returns {Promise} Promise that resolves when image is loaded
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Format file name for better SEO
 * @param {string} filename - Original filename
 * @returns {string} Formatted filename
 */
export const formatFileName = (filename) => {
  return filename
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9.-]/g, '');
};
