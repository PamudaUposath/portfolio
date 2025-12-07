# Quick Start Guide

## ✅ Your Portfolio is Ready!

Your portfolio has been successfully built with all the components and features. Here's what to do next:

## 🎯 Step 1: Update Your Information

Edit these files in `src/data/` with your personal information:

### 1. `siteConfig.ts`
```typescript
export const siteConfig = {
  name: "Your Full Name",
  title: "Your Professional Title",
  tagline: "Your catchy one-liner",
  email: "your.email@example.com",
  // ... update all fields
}
```

### 2. `projects.ts`
- Add your actual projects
- Update image paths
- Add GitHub/live demo links

### 3. `experience.ts`
- Add your work experience
- Include leadership roles
- Update dates and descriptions

### 4. `skills.ts`
- List your technical skills by category
- Add/remove categories as needed

### 5. `achievements.ts`
- Add your certifications
- Include awards and recognitions
- Add certificate links

## 📸 Step 2: Add Your Images

Place images in the `public/` folder:

1. **Profile photo**: `public/profile.jpg` (400x400px recommended)
2. **Project screenshots**: `public/projects/` folder
3. **CV/Resume**: `public/cv.pdf` (optional)

See `public/IMAGE_GUIDE.md` for detailed instructions.

## 🔧 Step 3: Setup Contact Form

1. Visit [formspree.io](https://formspree.io)
2. Sign up for free
3. Create a new form
4. Copy your form endpoint
5. Update `formspreeEndpoint` in `src/data/siteConfig.ts`

## 🚀 Step 4: Run Development Server

The dev server is already running at:
**http://localhost:5173/portfolio/**

To start it again later:
```bash
npm run dev
```

## 🎨 Step 5: Customize (Optional)

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#ff7300",    // Your brand color
  dark: "#111827",
  lightbg: "#f9fafb",
}
```

### Change Font
Edit `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont...');
body { font-family: 'YourFont', sans-serif; }
```

## 📦 Step 6: Deploy to GitHub Pages

### A. Update Repository Name
In `vite.config.ts`, change the base if your repo name isn't "portfolio":
```typescript
base: '/your-repo-name/',
```

### B. Push to GitHub
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

### C. Configure GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Select "GitHub Actions"
4. The workflow will deploy automatically

Your site will be live at:
`https://yourusername.github.io/portfolio/`

## 📝 Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎉 You're All Set!

Your portfolio includes:
- ✅ Responsive Hero section with profile photo
- ✅ Filterable Projects showcase
- ✅ Timeline-based Experience section
- ✅ Categorized Skills display
- ✅ Achievements & Certifications grid
- ✅ Working Contact form
- ✅ Smooth navigation with sticky navbar
- ✅ Professional footer
- ✅ GitHub Actions deployment workflow

## 🆘 Need Help?

Check the main `README.md` for detailed documentation.

---

**Current Status:**
- ✅ Project structure created
- ✅ All components built
- ✅ Tailwind CSS configured
- ✅ Data files ready for customization
- ✅ Development server running
- ✅ Build tested successfully
- ✅ GitHub Actions workflow ready

**Next Steps:** Update data files with your information and add your images!
