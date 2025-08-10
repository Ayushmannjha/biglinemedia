# 🚨 GitHub Security Guide - What NOT to Commit

## ❌ **NEVER COMMIT THESE FILES**

### 🔐 **1. Environment Variables & API Keys**
```bash
# CRITICAL SECURITY RISK
.env                    # Contains API keys, secrets, passwords
.env.local
.env.production
.env.development
config/secrets/
*.key
*.pem
```

**Why?** These files contain sensitive information that could be used to:
- Access your EmailJS account
- Use your APIs without permission
- Compromise your third-party services
- Cost you money if someone abuses your keys

### 📦 **2. Dependencies & Build Files**
```bash
# TOO LARGE FOR GIT
node_modules/           # 100MB+ of dependencies
dist/                   # Generated build files
build/                  # Compiled assets
.cache/                 # Cache directories
```

**Why?** These are regenerated files that:
- Make your repository huge
- Slow down clones and pulls
- Can be regenerated with `npm install` and `npm run build`

### 🔧 **3. IDE & Editor Files**
```bash
# PERSONAL PREFERENCES
.vscode/settings.json   # Your personal VS Code settings
.idea/                  # IntelliJ IDEA configuration
*.swp                   # Vim swap files
.DS_Store              # macOS system files
```

**Why?** These are personal configuration files that:
- Don't affect the project functionality
- Can conflict with other developers' setups
- Clutter the repository

### 📊 **4. Logs & Debugging Files**
```bash
# TEMPORARY DATA
*.log                   # Application logs
npm-debug.log*         # NPM debug information
coverage/              # Test coverage reports
test-results/          # Test outputs
```

## ✅ **SHOULD COMMIT THESE FILES**

### 📋 **1. Configuration Templates**
```bash
✅ .env.example         # Template showing required variables
✅ .gitignore           # Git ignore rules
✅ package.json         # Project dependencies and scripts
✅ README.md            # Project documentation
```

### 💻 **2. Source Code**
```bash
✅ src/                 # All your React components
✅ public/              # Static assets (images, fonts)
✅ index.html           # Entry point
✅ vite.config.js       # Build configuration
✅ tailwind.config.js   # Styling configuration
```

### 📚 **3. Documentation**
```bash
✅ README.md            # Project overview
✅ ENVIRONMENT_SECURITY_GUIDE.md
✅ IMAGE_OPTIMIZATION_GUIDE.md
✅ docs/                # Project documentation
```

## 🛡️ **Security Best Practices**

### **Before Every Commit:**
```bash
# 1. Check what you're about to commit
git status

# 2. Review changes carefully
git diff

# 3. Only add specific files (don't use git add .)
git add src/
git add public/
git add package.json
git add README.md

# 4. Never use git add . or git add -A blindly
```

### **Environment Variable Security:**
```bash
# ✅ CORRECT - Use template
.env.example            # Commit this (shows structure)

# ❌ WRONG - Contains real keys
.env                    # NEVER commit this
```

### **Example .env.example (Safe to commit):**
```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here

# Medium Configuration
VITE_MEDIUM_RSS_URL=https://medium.com/feed/@your_username
```

### **Example .env (NEVER commit):**
```env
# Contains real sensitive data
VITE_EMAILJS_PUBLIC_KEY=qerOD5mGkKdJCfBhT
VITE_EMAILJS_SERVICE_ID=service_480qowx
```

## 🚨 **If You Accidentally Commit Sensitive Data**

### **Immediate Actions:**
1. **Don't panic, but act quickly**
2. **Change all exposed API keys immediately**
3. **Remove the sensitive data from git history**

```bash
# Remove file from git but keep locally
git rm --cached .env

# Commit the removal
git commit -m "Remove sensitive .env file"

# For removing from history (use carefully)
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch .env' \
--prune-empty --tag-name-filter cat -- --all
```

## 📋 **Quick Checklist Before Pushing**

- [ ] `.env` files are in `.gitignore`
- [ ] No API keys in source code
- [ ] `node_modules/` is ignored
- [ ] Build files (`dist/`, `build/`) are ignored
- [ ] Personal IDE files are ignored
- [ ] `.env.example` is up to date
- [ ] Sensitive URLs use environment variables

## 🔄 **Safe Commit Workflow**

```bash
# 1. Check status
git status

# 2. Add only source files
git add src/components/
git add src/utils/
git add package.json
git add README.md

# 3. Check what's being committed
git diff --cached

# 4. Commit with descriptive message
git commit -m "feat: add environment variable support for API keys"

# 5. Push to GitHub
git push origin main
```

## 📱 **Repository Structure (What Gets Committed)**

```
BigLineMedai/
├── .env.example        ✅ (Template - safe)
├── .env               ❌ (Real keys - dangerous)
├── .gitignore         ✅ (Essential)
├── package.json       ✅ (Required)
├── README.md          ✅ (Documentation)
├── src/               ✅ (Source code)
│   ├── components/    ✅
│   ├── utils/         ✅
│   └── assets/        ✅
├── public/            ✅ (Static assets)
├── node_modules/      ❌ (Too large)
├── dist/              ❌ (Generated)
└── *.log              ❌ (Temporary)
```

## 🎯 **Remember:**
- **When in doubt, don't commit it**
- **Use `.env.example` for templates**
- **Keep sensitive data in `.env` (local only)**
- **Review every commit before pushing**
- **Use descriptive commit messages**

This approach ensures your repository is secure, clean, and professional! 🚀
