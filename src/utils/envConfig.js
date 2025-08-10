// Environment configuration - centralized access to environment variables
// This file provides a secure and organized way to access environment variables

class EnvironmentConfig {
  constructor() {
    // Validate that we're in a browser environment with import.meta
    if (typeof import.meta === 'undefined') {
      console.warn('Environment config: import.meta not available');
    }
  }

  // EmailJS Configuration
  get emailjs() {
    return {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
      userId: import.meta.env.VITE_EMAILJS_USER_ID || '',
      apiUrl: import.meta.env.VITE_EMAILJS_API_URL || 'https://api.emailjs.com/api/v1.0/email/send',
      apiKey: import.meta.env.VITE_EMAILJS_API_KEY || '',
      timeout: parseInt(import.meta.env.VITE_EMAILJS_TIMEOUT) || 5000,
      debugMode: import.meta.env.VITE_EMAILJS_DEBUG_MODE === 'true',
      defaultFrom: import.meta.env.VITE_EMAILJS_DEFAULT_FROM || 'noreply@example.com'
    };
  }

  // Medium/Blog Configuration
  get medium() {
    return {
      rssUrl: import.meta.env.VITE_MEDIUM_RSS_URL || 'https://medium.com/feed/@piyushrajyadav28',
      rssToJsonApi: import.meta.env.VITE_RSS_TO_JSON_API || 'https://api.rss2json.com/v1/api.json'
    };
  }

  // Image CDN Configuration
  get images() {
    return {
      unsplashBaseUrl: import.meta.env.VITE_UNSPLASH_BASE_URL || 'https://images.unsplash.com',
      defaultFallback: import.meta.env.VITE_DEFAULT_FALLBACK_IMAGE || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
      placeholderUrl: import.meta.env.VITE_PLACEHOLDER_IMAGE_URL || 'https://placehold.co'
    };
  }

  // Cloudinary Configuration
  get cloudinary() {
    return {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '',
      apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY || '',
      apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET || '', // Should not be exposed in frontend
      baseUrl: import.meta.env.VITE_CLOUDINARY_BASE_URL || 'https://res.cloudinary.com',
      isConfigured: !!(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME && import.meta.env.VITE_CLOUDINARY_API_KEY)
    };
  }

  // Social Media URLs
  get social() {
    return {
      youtube: {
        baseUrl: import.meta.env.VITE_YOUTUBE_BASE_URL || 'https://www.youtube.com/embed'
      },
      instagram: {
        baseUrl: import.meta.env.VITE_INSTAGRAM_BASE_URL || 'https://www.instagram.com',
        company: import.meta.env.VITE_COMPANY_INSTAGRAM || 'https://www.instagram.com/aashikant_slays/'
      },
      linkedin: {
        company: import.meta.env.VITE_COMPANY_LINKEDIN || 'https://www.linkedin.com/company/yourcompany'
      },
      facebook: {
        company: import.meta.env.VITE_COMPANY_FACEBOOK || 'https://facebook.com/yourcompany'
      },
      twitter: {
        company: import.meta.env.VITE_COMPANY_TWITTER || 'https://twitter.com/yourcompany'
      }
    };
  }

  // Google Services
  get google() {
    return {
      mapsBaseUrl: import.meta.env.VITE_GOOGLE_MAPS_BASE_URL || 'https://maps.google.com'
    };
  }

  // API Configuration
  get api() {
    return {
      requestTimeout: parseInt(import.meta.env.VITE_API_REQUEST_TIMEOUT) || 10000,
      maxRetryAttempts: parseInt(import.meta.env.VITE_MAX_RETRY_ATTEMPTS) || 3,
      cacheDuration: parseInt(import.meta.env.VITE_CACHE_DURATION) || 3600000 // 1 hour
    };
  }

  // App Configuration
  get app() {
    return {
      envMode: import.meta.env.VITE_ENV_MODE || 'development',
      debugMode: import.meta.env.VITE_DEBUG_MODE === 'true',
      analyticsEnabled: import.meta.env.VITE_ANALYTICS_ENABLED === 'true',
      isDevelopment: import.meta.env.DEV,
      isProduction: import.meta.env.PROD
    };
  }

  // Validation methods
  validateEmailJSConfig() {
    const config = this.emailjs;
    const required = ['publicKey', 'serviceId', 'templateId'];
    const missing = required.filter(key => !config[key]);
    
    if (missing.length > 0) {
      console.warn(`EmailJS missing required config: ${missing.join(', ')}`);
      return false;
    }
    return true;
  }

  validateCloudinaryConfig() {
    const config = this.cloudinary;
    return config.isConfigured;
  }

  // Security helpers
  getMaskedConfig() {
    const mask = (str) => str ? `${str.substring(0, 4)}****${str.substring(str.length - 4)}` : 'Not set';
    
    return {
      emailjs: {
        ...this.emailjs,
        publicKey: mask(this.emailjs.publicKey),
        apiKey: mask(this.emailjs.apiKey)
      },
      cloudinary: {
        ...this.cloudinary,
        apiKey: mask(this.cloudinary.apiKey),
        apiSecret: '****' // Never show this
      }
    };
  }

  // Debug information
  logConfig() {
    if (this.app.debugMode) {
      console.group('Environment Configuration');
      console.log('Environment Mode:', this.app.envMode);
      console.log('EmailJS Configured:', this.validateEmailJSConfig());
      console.log('Cloudinary Configured:', this.validateCloudinaryConfig());
      console.log('Masked Config:', this.getMaskedConfig());
      console.groupEnd();
    }
  }
}

// Create singleton instance
const envConfig = new EnvironmentConfig();

// Log configuration in development
if (envConfig.app.isDevelopment) {
  envConfig.logConfig();
}

export default envConfig;
