// Image URL helper utilities
import envConfig from './envConfig.js';

/**
 * Generate optimized image URLs with fallbacks
 * @param {string} imageUrl - Base image URL
 * @param {Object} options - Optimization options
 * @returns {string} - Optimized URL with fallback
 */
export const getOptimizedImageUrl = (imageUrl, options = {}) => {
  const {
    width = 150,
    height = 150,
    fit = 'crop',
    crop = 'face',
    quality = 80,
    format = 'auto'
  } = options;

  // If no URL provided, return default fallback
  if (!imageUrl) {
    return envConfig.images.defaultFallback;
  }

  // Check if it's already an optimized URL
  if (imageUrl.includes('w=') && imageUrl.includes('h=')) {
    return imageUrl;
  }

  // Check if it's an Unsplash URL
  if (imageUrl.includes('unsplash.com')) {
    const params = new URLSearchParams({
      w: width,
      h: height,
      fit: fit,
      crop: crop,
      'auto': format,
      q: quality
    });
    
    const separator = imageUrl.includes('?') ? '&' : '?';
    return `${imageUrl}${separator}${params.toString()}`;
  }

  // Check if it's a Cloudinary URL and we have Cloudinary configured
  if (imageUrl.includes('cloudinary.com') && envConfig.cloudinary.isConfigured) {
    const urlParts = imageUrl.split('/upload/');
    if (urlParts.length === 2) {
      const transformations = `w_${width},h_${height},c_${fit},g_${crop},q_${quality},f_${format}`;
      return `${urlParts[0]}/upload/${transformations}/${urlParts[1]}`;
    }
  }

  // For other URLs, return as-is
  return imageUrl;
};

/**
 * Get placeholder image URL
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} text - Placeholder text
 * @param {string} bgColor - Background color (hex without #)
 * @param {string} textColor - Text color (hex without #)
 * @returns {string} - Placeholder URL
 */
export const getPlaceholderImageUrl = (width = 150, height = 150, text = 'Image', bgColor = 'cccccc', textColor = '333333') => {
  const baseUrl = envConfig.images.placeholderUrl;
  return `${baseUrl}/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(text)}`;
};

/**
 * Get YouTube embed URL from various YouTube URL formats
 * @param {string} youtubeUrl - YouTube URL
 * @returns {string} - Embed URL
 */
export const getYouTubeEmbedUrl = (youtubeUrl) => {
  if (!youtubeUrl) return '';

  // If it's already an embed URL, return as is
  if (youtubeUrl.includes('/embed/')) {
    return youtubeUrl;
  }

  // Extract video ID from various YouTube URL formats
  const videoIdMatch = youtubeUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  
  if (videoIdMatch && videoIdMatch[1]) {
    return `${envConfig.social.youtube.baseUrl}/${videoIdMatch[1]}`;
  }

  return youtubeUrl; // Return original if no video ID found
};

/**
 * Get social media profile URL
 * @param {string} platform - Social media platform (instagram, linkedin, facebook, twitter)
 * @param {string} handle - User handle (without @)
 * @returns {string} - Profile URL
 */
export const getSocialUrl = (platform, handle) => {
  if (!handle) return '';

  const socialConfig = envConfig.social;
  
  switch (platform.toLowerCase()) {
    case 'instagram':
      return `${socialConfig.instagram.baseUrl}/${handle.replace('@', '')}`;
    case 'linkedin':
      return `https://linkedin.com/in/${handle}`;
    case 'facebook':
      return `https://facebook.com/${handle}`;
    case 'twitter':
      return `https://twitter.com/${handle.replace('@', '')}`;
    default:
      return handle;
  }
};

/**
 * Get Google Maps URL for an address
 * @param {string} address - Address string
 * @returns {string} - Google Maps URL
 */
export const getGoogleMapsUrl = (address) => {
  if (!address) return '';
  return `${envConfig.google.mapsBaseUrl}?q=${encodeURIComponent(address)}`;
};

/**
 * Validate image URL by checking if it loads
 * @param {string} url - Image URL to validate
 * @returns {Promise<boolean>} - Whether the image loads successfully
 */
export const validateImageUrl = (url) => {
  return new Promise((resolve) => {
    if (!url) {
      resolve(false);
      return;
    }

    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
    
    // Timeout after 5 seconds
    setTimeout(() => resolve(false), 5000);
  });
};

/**
 * Get avatar URL with initials fallback
 * @param {string} imageUrl - Profile image URL
 * @param {string} name - Person's name for initials
 * @param {Object} options - Image options
 * @returns {Object} - Image URL and fallback info
 */
export const getAvatarUrl = (imageUrl, name, options = {}) => {
  const optimizedUrl = getOptimizedImageUrl(imageUrl, options);
  
  // Generate initials from name
  const initials = name ? name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2) : '??';
  
  // Generate placeholder with initials
  const fallbackUrl = getPlaceholderImageUrl(
    options.width || 150,
    options.height || 150,
    initials,
    '4F46E5', // Purple background
    'FFFFFF'  // White text
  );

  return {
    primary: optimizedUrl,
    fallback: fallbackUrl,
    initials
  };
};

/**
 * Preload critical images for better performance
 * @param {string[]} imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls) => {
  if (!Array.isArray(imageUrls)) return;

  imageUrls.forEach(url => {
    if (url) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    }
  });
};

/**
 * Create responsive image srcset
 * @param {string} baseUrl - Base image URL
 * @param {number[]} sizes - Array of sizes for responsive images
 * @returns {string} - srcset string
 */
export const createResponsiveSrcSet = (baseUrl, sizes = [150, 300, 600]) => {
  if (!baseUrl) return '';

  return sizes.map(size => {
    const optimizedUrl = getOptimizedImageUrl(baseUrl, { width: size, height: size });
    return `${optimizedUrl} ${size}w`;
  }).join(', ');
};

export default {
  getOptimizedImageUrl,
  getPlaceholderImageUrl,
  getYouTubeEmbedUrl,
  getSocialUrl,
  getGoogleMapsUrl,
  validateImageUrl,
  getAvatarUrl,
  preloadImages,
  createResponsiveSrcSet
};
