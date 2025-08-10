import { useState, useEffect } from 'react';

/**
 * Custom hook to preload images for better user experience
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @returns {Object} - { preloaded: boolean, failed: string[] }
 */
export const useImagePreloader = (imageUrls = []) => {
  const [preloaded, setPreloaded] = useState(false);
  const [failed, setFailed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!imageUrls.length) {
      setPreloaded(true);
      setLoading(false);
      return;
    }

    let loadedCount = 0;
    const failedImages = [];

    const handleImageLoad = (url, success) => {
      loadedCount++;
      
      if (!success) {
        failedImages.push(url);
      }

      // If all images have been processed (loaded or failed)
      if (loadedCount === imageUrls.length) {
        setFailed(failedImages);
        setPreloaded(true);
        setLoading(false);
      }
    };

    // Preload each image
    imageUrls.forEach(url => {
      if (!url) {
        handleImageLoad(url, false);
        return;
      }

      const img = new Image();
      
      img.onload = () => handleImageLoad(url, true);
      img.onerror = () => handleImageLoad(url, false);
      
      // Set src to trigger loading
      img.src = url;
    });

    // Cleanup function
    return () => {
      setPreloaded(false);
      setFailed([]);
      setLoading(true);
    };
  }, [imageUrls]);

  return { preloaded, failed, loading };
};

/**
 * Hook to check if a single image is valid
 * @param {string} imageUrl - Single image URL to validate
 * @returns {Object} - { isValid: boolean, isLoading: boolean }
 */
export const useImageValidator = (imageUrl) => {
  const [isValid, setIsValid] = useState(null);
  const [isLoading, setIsLoading] = useState(!!imageUrl);

  useEffect(() => {
    if (!imageUrl) {
      setIsValid(false);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    const img = new Image();
    
    img.onload = () => {
      setIsValid(true);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setIsValid(false);
      setIsLoading(false);
    };
    
    img.src = imageUrl;

    return () => {
      setIsValid(null);
      setIsLoading(true);
    };
  }, [imageUrl]);

  return { isValid, isLoading };
};

/**
 * Generate optimized image URL with parameters
 * @param {string} baseUrl - Base image URL
 * @param {Object} options - Optimization options
 * @returns {string} - Optimized URL
 */
export const generateOptimizedImageUrl = (baseUrl, options = {}) => {
  if (!baseUrl) return '';

  const {
    width = 150,
    height = 150,
    fit = 'crop',
    crop = 'face',
    quality = 80,
    format = 'auto'
  } = options;

  // Check if it's an Unsplash URL
  if (baseUrl.includes('unsplash.com')) {
    const params = new URLSearchParams({
      w: width,
      h: height,
      fit: fit,
      crop: crop,
      q: quality
    });
    
    return `${baseUrl}&${params.toString()}`;
  }

  // Check if it's a Cloudinary URL
  if (baseUrl.includes('cloudinary.com')) {
    // Extract the cloudinary URL parts
    const urlParts = baseUrl.split('/upload/');
    if (urlParts.length === 2) {
      const transformations = `w_${width},h_${height},c_${fit},g_${crop},q_${quality},f_${format}`;
      return `${urlParts[0]}/upload/${transformations}/${urlParts[1]}`;
    }
  }

  // For other URLs, return as-is
  return baseUrl;
};

export default useImagePreloader;
