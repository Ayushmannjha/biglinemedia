# Environment Variables Security Guide

## 🔒 Security Best Practices for Environment Variables

### 1. **File Structure**
```
project/
├── .env                    # Your actual environment variables (NEVER commit)
├── .env.example           # Template file (safe to commit)
├── .env.local             # Local overrides (NEVER commit)
├── .env.development       # Development-specific variables
├── .env.production        # Production-specific variables
└── .gitignore             # Must include .env files
```

### 2. **Vite Environment Variable Rules**

#### ✅ Safe for Frontend (use VITE_ prefix)
```env
# These are exposed to the client-side code
VITE_API_BASE_URL=https://api.example.com
VITE_APP_NAME=BigLine Media
VITE_ENVIRONMENT=development
```

#### ❌ Never Expose to Frontend
```env
# These should NEVER have VITE_ prefix
API_SECRET_KEY=super_secret_key        # Backend only
DATABASE_PASSWORD=secret_password      # Backend only
STRIPE_SECRET_KEY=sk_test_...          # Backend only
```

### 3. **EmailJS Configuration Security**

#### ✅ Safe to Expose
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key    # Designed to be public
VITE_EMAILJS_SERVICE_ID=service_123        # Service identifier
VITE_EMAILJS_TEMPLATE_ID=template_456      # Template identifier
```

#### ⚠️ Handle with Care
```env
VITE_EMAILJS_API_KEY=your_api_key          # Limit usage in EmailJS dashboard
```

### 4. **Current Project Environment Variables**

#### Required Variables
```env
# EmailJS - Essential for contact form
VITE_EMAILJS_PUBLIC_KEY=qerOD5mGkKdJCfBhT
VITE_EMAILJS_SERVICE_ID=service_480qowx
VITE_EMAILJS_TEMPLATE_ID=template_6wz8k56

# Medium Integration - Required for blog
VITE_MEDIUM_RSS_URL=https://medium.com/feed/@piyushrajyadav28
VITE_RSS_TO_JSON_API=https://api.rss2json.com/v1/api.json

# Image CDNs - Required for optimization
VITE_UNSPLASH_BASE_URL=https://images.unsplash.com
VITE_PLACEHOLDER_IMAGE_URL=https://placehold.co
```

#### Optional Variables
```env
# Cloudinary - Advanced image optimization
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_API_KEY=your_api_key

# Social Media - Company profiles
VITE_COMPANY_INSTAGRAM=https://www.instagram.com/aashikant_slays/
VITE_COMPANY_LINKEDIN=https://www.linkedin.com/company/yourcompany
```

### 5. **Gitignore Configuration**

Ensure your `.gitignore` includes:
```gitignore
# Environment variables
.env
.env.local
.env.*.local

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp
*.swo
```

### 6. **Production Deployment**

#### Vercel Deployment
```bash
# Set environment variables in Vercel dashboard
vercel env add VITE_EMAILJS_PUBLIC_KEY
vercel env add VITE_EMAILJS_SERVICE_ID
vercel env add VITE_EMAILJS_TEMPLATE_ID
```

#### Netlify Deployment
```bash
# Set in Netlify dashboard or CLI
netlify env:set VITE_EMAILJS_PUBLIC_KEY your_key_here
netlify env:set VITE_EMAILJS_SERVICE_ID your_service_id
```

### 7. **Environment Validation**

#### Development Check
```javascript
// src/utils/envConfig.js validates environment variables
import envConfig from './utils/envConfig';

// Check if required config is present
if (!envConfig.validateEmailJSConfig()) {
  console.error('Missing required EmailJS configuration');
}
```

#### Build-time Validation
```javascript
// vite.config.js
export default defineConfig({
  define: {
    __EMAIL_CONFIGURED__: JSON.stringify(!!process.env.VITE_EMAILJS_PUBLIC_KEY),
    __CLOUDINARY_CONFIGURED__: JSON.stringify(!!process.env.VITE_CLOUDINARY_CLOUD_NAME)
  }
});
```

### 8. **Security Monitoring**

#### Regular Security Checks
- [ ] Rotate API keys quarterly
- [ ] Monitor EmailJS usage for abuse
- [ ] Check for exposed secrets in git history
- [ ] Validate environment variables on deployment

#### Detection Tools
```bash
# Check for accidentally committed secrets
git log -p | grep -i "api_key\|secret\|password"

# Use git-secrets to prevent commits
git secrets --register-aws
git secrets --install
```

### 9. **Emergency Response**

#### If Secrets Are Exposed
1. **Immediately** rotate the compromised keys
2. Check git history: `git log --all --full-history -- .env`
3. Remove from git history: `git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch .env' --prune-empty --tag-name-filter cat -- --all`
4. Force push: `git push origin --force --all`
5. Notify team members to re-clone repository

### 10. **Development Team Guidelines**

#### For New Developers
1. Copy `.env.example` to `.env`
2. Get actual values from team lead (never from git)
3. Set up EmailJS account with team email
4. Configure local development environment

#### Code Review Checklist
- [ ] No hardcoded API keys or URLs
- [ ] All external URLs use environment variables
- [ ] Sensitive data uses proper VITE_ prefix rules
- [ ] No .env files in pull requests

### 11. **Current Implementation Status**

#### ✅ Completed Security Measures
- [x] Centralized environment configuration (`src/utils/envConfig.js`)
- [x] Environment variable validation
- [x] Masked logging for sensitive data
- [x] Timeout and retry configurations
- [x] Image URL utilities with fallbacks
- [x] Comprehensive `.env.example` template

#### 🔄 Recommended Next Steps
- [ ] Set up git hooks to prevent secret commits
- [ ] Implement environment-specific configurations
- [ ] Add automated security scanning in CI/CD
- [ ] Set up monitoring for API usage limits

### 12. **API Key Management**

#### EmailJS Security
- Set usage limits in EmailJS dashboard
- Monitor monthly email quota
- Configure CORS origins for production domain
- Use EmailJS user access control

#### Image CDN Security
- Unsplash: Free tier, no authentication needed
- Cloudinary: Set up usage limits and hotlink protection
- Implement image caching for better performance

This comprehensive security approach ensures your application remains secure while maintaining functionality across different environments.
