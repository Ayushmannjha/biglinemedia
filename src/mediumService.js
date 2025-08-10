// Medium RSS to JSON API service
import envConfig from './utils/envConfig.js';

const MEDIUM_RSS_URL = envConfig.medium.rssUrl;
const RSS_TO_JSON_API = envConfig.medium.rssToJsonApi;
const DEFAULT_FALLBACK_IMAGE = envConfig.images.defaultFallback;
const API_TIMEOUT = envConfig.api.requestTimeout;
const MAX_RETRY_ATTEMPTS = envConfig.api.maxRetryAttempts;

export const fetchMediumBlogs = async () => {
  let lastError;
  
  // Retry logic for better reliability
  for (let attempt = 1; attempt <= MAX_RETRY_ATTEMPTS; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

      const response = await fetch(`${RSS_TO_JSON_API}?rss_url=${encodeURIComponent(MEDIUM_RSS_URL)}`, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to fetch Medium blogs`);
      }
      
      const data = await response.json();
      
      if (data.status !== 'ok') {
        throw new Error(`RSS parsing failed: ${data.message || 'Unknown error'}`);
      }

      // Cache the successful response
      cacheBlogs(data.items);
      
      // Transform Medium RSS data to our blog format
      const transformedBlogs = data.items.map((item, index) => {
        // Extract thumbnail from content
        const thumbnailMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
        const thumbnail = thumbnailMatch ? thumbnailMatch[1] : DEFAULT_FALLBACK_IMAGE;
      
      // Extract first paragraph as excerpt
      const contentWithoutImages = item.content.replace(/<img[^>]*>/g, '');
      const textContent = contentWithoutImages.replace(/<[^>]*>/g, '');
      const excerpt = textContent.substring(0, 200) + '...';
      
      // Extract categories from Medium tags
      const tags = item.categories || [];
      
      return {
        id: `medium-${index + 1}`,
        name: item.title,
        url: item.link,
        category: 'Tech', // Default category, can be improved with tag analysis
        subcategory: 'Medium Article',
        focus: 'Content',
        rating: 4.0, // Default rating
        views: '1K', // Default since Medium doesn't provide this in RSS
        comments: 0,
        shares: 0,
        date: item.pubDate,
        readTime: Math.ceil(textContent.split(' ').length / 200), // Estimate reading time
        keyInsight: excerpt,
        tags: tags.map(tag => `#${tag}`),
        thumbnail: thumbnail,
        content: item.content,
        description: item.description,
        author: item.author || 'Piyush Raj Yadav',
        metrics: {
          design: 4.0,
          content: 4.0,
          seo: 4.0,
          engagement: 4.0,
          performance: 4.0,
          monetization: 3.5
        },
        strengths: ['Quality content', 'Good storytelling', 'Professional writing'],
        weaknesses: ['Limited interactivity', 'Standard Medium layout'],
        traffic: {
          monthly: '1K',
          growth: '+5%',
          sources: { organic: 50, direct: 30, social: 15, referral: 5 }
        },
        featured: index < 3, // Feature first 3 articles
        premium: false,
        source: 'medium'
      };
    });
    
    return transformedBlogs;
    
    } catch (error) {
      lastError = error;
      console.warn(`Attempt ${attempt} failed:`, error.message);
      
      // If this is the last attempt, break and handle error below
      if (attempt === MAX_RETRY_ATTEMPTS) {
        break;
      }
      
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, attempt * 1000));
    }
  }
  
  // All attempts failed, try to return cached data
  console.error('All attempts to fetch Medium blogs failed:', lastError);
  
  if (isCacheFresh()) {
    console.log('Returning cached blogs as fallback');
    return getCachedBlogs();
  }
  
  return [];
};

// Fallback function to get cached blogs in case API fails
export const getCachedBlogs = () => {
  const cached = localStorage.getItem('medium-blogs');
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch (error) {
      console.error('Error parsing cached blogs:', error);
    }
  }
  return [];
};

// Cache blogs to localStorage
export const cacheBlogs = (blogs) => {
  try {
    localStorage.setItem('medium-blogs', JSON.stringify(blogs));
    localStorage.setItem('medium-blogs-timestamp', Date.now().toString());
  } catch (error) {
    console.error('Error caching blogs:', error);
  }
};

// Check if cache is fresh (less than 1 hour old)
export const isCacheFresh = () => {
  const timestamp = localStorage.getItem('medium-blogs-timestamp');
  if (!timestamp) return false;
  
  const cacheAge = Date.now() - parseInt(timestamp);
  const oneHour = 60 * 60 * 1000;
  
  return cacheAge < oneHour;
};
