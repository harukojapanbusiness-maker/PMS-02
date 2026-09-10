# 🚀 Deployment Guide - Power Management Solutions

## সহজ Deploy Options

---

## Option 1: Vercel (সবচেয়ে সহজ - Recommended) ⭐

### Step 1: Vercel Account তৈরি করুন
1. https://vercel.com এ যান
2. "Sign Up" ক্লিক করুন
3. GitHub account দিয়ে sign up করুন

### Step 2: Project Import করুন
1. Vercel dashboard এ "Add New..." → "Project" ক্লিক করুন
2. আপনার GitHub repository select করুন
3. "Import" ক্লিক করুন

### Step 3: Settings Configure করুন
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Step 4: Deploy করুন
- "Deploy" বাটনে ক্লিক করুন
- 2-3 মিনিট অপেক্ষা করুন
- আপনার site live হয়ে যাবে!

### Live URL পাবেন:
```
https://power-management-solutions.vercel.app
```

---

## Option 2: Netlify (সহজ Alternative)

### Method A: GitHub দিয়ে
1. https://netlify.com এ যান
2. "Sign up" করুন (GitHub দিয়ে)
3. "Add new site" → "Import an existing project"
4. GitHub repository select করুন
5. Build settings:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
6. "Deploy site" ক্লিক করুন

### Method B: Drag & Drop
1. Local এ build করুন:
   ```bash
   npm run build
   ```
2. https://app.netlify.com/drop এ যান
3. `dist` folder drag & drop করুন
4. Done! Site live হয়ে যাবে

---

## Option 3: GitHub Pages (Free Hosting)

### Step 1: gh-pages install করুন
```bash
npm install -D gh-pages
```

### Step 2: vite.config.js এ basePath যোগ করুন
```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/power-management-solutions/', // আপনার repo name
})
```

### Step 3: package.json এ scripts যোগ করুন
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 4: Deploy করুন
```bash
npm run deploy
```

### Step 5: GitHub Settings এ Pages enable করুন
1. Repository → Settings → Pages
2. Source: "gh-pages" branch select করুন
3. Save করুন

### Live URL:
```
https://YOUR_USERNAME.github.io/power-management-solutions/
```

---

## Option 4: Custom Server (Advanced)

### Build করুন
```bash
npm run build
```

### dist folder upload করুন
- আপনার hosting provider এ `dist` folder এর সব ফাইল upload করুন
- Apache/Nginx configure করুন

### Nginx Configuration Example:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/power-management-solutions/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🌐 Custom Domain যোগ করা

### Vercel এ:
1. Project Settings → Domains
2. আপনার domain যোগ করুন
3. DNS records update করুন

### Netlify এ:
1. Site Settings → Domain management
2. "Add custom domain" ক্লিক করুন
3. DNS records configure করুন

---

## 📱 Environment Variables (যদি দরকার হয়)

### Vercel এ:
1. Project Settings → Environment Variables
2. Add variables

### Netlify এ:
1. Site Settings → Environment variables
2. Add variables

### .env ফাইল তৈরি করুন (local development এ):
```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Power Management Solutions
```

---

## 🔍 SEO Optimization

### robots.txt তৈরি করুন (public folder এ):
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### sitemap.xml তৈরি করুন:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/projects</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## ⚡ Performance Tips

### Build Optimization:
```bash
# Production build
npm run build

# Analyze bundle size
npm run build -- --mode production
```

### Image Optimization:
- WebP format ব্যবহার করুন
- Lazy loading enable করুন
- CDN ব্যবহার করুন images এর জন্য

---

## 🔒 Security Checklist

- [ ] HTTPS enable করা আছে
- [ ] Environment variables secure আছে
- [ ] .env ফাইল .gitignore এ আছে
- [ ] API keys exposed নেই
- [ ] CORS properly configured

---

## 📊 Analytics যোগ করা

### Google Analytics:
index.html এ যোগ করুন:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🎯 Quick Deploy Commands

### Vercel CLI:
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify CLI:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## 🆘 Troubleshooting

### Problem: Build failed
```bash
# Solution:
npm install
npm run build
# Error message চেক করুন
```

### Problem: 404 on refresh
```bash
# Solution: SPA routing configure করুন
# Vercel: vercel.json তৈরি করুন
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Problem: Assets not loading
```bash
# Solution: vite.config.js এ base path চেক করুন
export default defineConfig({
  base: '/your-repo-name/'
})
```

---

## ✅ Post-Deployment Checklist

- [ ] Website properly load হচ্ছে
- [ ] All pages working
- [ ] Images loading
- [ ] Forms working
- [ ] Mobile responsive
- [ ] SSL certificate active
- [ ] Custom domain configured (if needed)
- [ ] Analytics tracking

---

<div align="center">

**Deploy সফল হয়েছে! 🎉**

আপনার site এখন live!

</div>
