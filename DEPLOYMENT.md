# 🚀 Deployment Guide - Honda Head Kim Châu

## Vercel Deployment (Recommended)

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI**

```bash
npm i -g vercel
```

2. **Deploy**

```bash
vercel --prod
```

### Method 2: GitHub Integration

1. **Push to GitHub**

```bash
git add .
git commit -m "Deploy Honda dealership website"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the static site

### Method 3: Drag & Drop

1. **Zip the project** (exclude node_modules, .git)
2. **Drag to Vercel** dashboard
3. **Deploy instantly**

## Configuration Files

✅ `vercel.json` - Routing and build configuration
✅ `package.json` - Project metadata  
✅ `.vercelignore` - Files to exclude from deployment

## URL Structure

After deployment, your URLs will be:

```
https://your-site.vercel.app/           → index.html
https://your-site.vercel.app/products  → products.html
https://your-site.vercel.app/services  → services.html
https://your-site.vercel.app/promotions → promotions.html
https://your-site.vercel.app/contact   → contact.html
https://your-site.vercel.app/login     → login.html
https://your-site.vercel.app/register  → register.html
https://your-site.vercel.app/admin     → admin.html
```

## Environment Variables

No environment variables needed for this static site.

## Custom Domain

1. **Add domain in Vercel dashboard**
2. **Update DNS records**
3. **SSL automatically configured**

## Performance Optimizations

- ✅ Clean URLs enabled
- ✅ Trailing slash handling
- ✅ Security headers configured
- ✅ Static asset caching
- ✅ Placeholder images proxied

## Troubleshooting

### 404 Errors

- Ensure `vercel.json` is in root directory
- Check file paths in routes configuration
- Verify all HTML files exist

### CSS/JS Not Loading

- Check file paths are relative
- Ensure files are not in `.vercelignore`
- Verify MIME types

### Local Testing

```bash
npm run dev
# or
vercel dev
```

## Alternative Deployments

### Netlify

1. Drag & drop project folder
2. Add `_redirects` file:

```
/products  /products.html  200
/services  /services.html  200
/promotions /promotions.html 200
/contact   /contact.html   200
/login     /login.html     200
/register  /register.html  200
/admin     /admin.html     200
/*         /index.html     200
```

### GitHub Pages

1. Push to `gh-pages` branch
2. Enable GitHub Pages in settings
3. May need path adjustments

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit properly
- [ ] Images display
- [ ] Mobile responsive
- [ ] Performance test
- [ ] SEO verification

## Support

For deployment issues:

1. Check Vercel logs
2. Verify `vercel.json` syntax
3. Test locally first
4. Contact support if needed

---

**🎉 Your Honda dealership website is now live!**
