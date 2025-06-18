import { useEffect } from 'react';

/**
 * SEO Component for dynamic meta tag management
 * @param {Object} props - SEO properties
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.image - Page image URL
 * @param {string} props.url - Page URL
 * @param {string} props.type - Page type (website, article, etc.)
 */
const SEO = ({ 
  title = "Onuoha-Mba Bethel | Creative Graphic Designer Portfolio",
  description = "Professional graphic designer specializing in logos, flyers, and social media designs. View my portfolio of brand identity development, print materials, and digital graphics.",
  image = "/b.JPG",
  url = "https://b-graphic.vercel.app/",
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('title', title);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image.startsWith('http') ? image : `${url}${image}`, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Update Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image.startsWith('http') ? image : `${url}${image}`, true);
    updateMetaTag('twitter:url', url, true);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  }, [title, description, image, url, type]);

  return null; // This component doesn't render anything
};

export default SEO;
