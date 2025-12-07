# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Designed for showcasing projects, experience, skills, and achievements with a clean, professional look.

## 🚀 Features

- **Responsive Design**: Mobile-first approach, looks great on all devices
- **Modern UI**: Clean design with orange accent color (#ff7300) and smooth animations
- **Section Navigation**: Smooth scrolling navigation with sticky header
- **Project Filtering**: Filter projects by category (Mobile, Web, Cloud, IoT)
- **Timeline Experience**: Professional timeline layout for work history
- **Skills Showcase**: Categorized skills display with icons
- **Contact Form**: Integrated contact form using Formspree
- **GitHub Pages Ready**: Pre-configured for easy deployment
- **Type-Safe**: Built with TypeScript for better code quality
- **Data-Driven**: Easy to update - all content in separate data files

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                      # Static assets (images, CV, etc.)
├── src/
│   ├── components/
│   │   ├── common/             # Reusable components
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   └── index.ts
│   │   └── sections/           # Page sections
│   │       ├── Achievements.tsx
│   │       ├── Contact.tsx
│   │       ├── Experience.tsx
│   │       ├── Footer.tsx
│   │       ├── Hero.tsx
│   │       ├── Navbar.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       └── index.ts
│   ├── data/                   # Content data files
│   │   ├── achievements.ts     # Certifications and awards
│   │   ├── experience.ts       # Work experience and leadership
│   │   ├── projects.ts         # Project portfolio
│   │   ├── skills.ts           # Technical skills
│   │   └── siteConfig.ts       # Personal info and settings
│   ├── App.tsx                 # Main app component
│   ├── index.css               # Global styles with Tailwind
│   └── main.tsx                # App entry point
├── index.html
├── package.json
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json
└── vite.config.ts              # Vite configuration
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Formspree** - Contact form backend
- **GitHub Actions** - CI/CD for deployment
- **GitHub Pages** - Hosting

## 📦 Installation & Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Update personal information

Edit the data files in `src/data/` with your information:

- `siteConfig.ts` - Name, contact info, social links, tech stack
- `projects.ts` - Your projects (add images to `public/projects/`)
- `experience.ts` - Work experience and leadership roles
- `skills.ts` - Your technical skills by category
- `achievements.ts` - Certifications and awards

### 3. Add your images

Place these images in the `public/` folder:
- `profile.jpg` - Your profile photo (recommended: 400x400px)
- `projects/` - Project screenshots
- Your CV file (update path in `siteConfig.ts`)

### 4. Setup Formspree (Contact Form)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form endpoint
3. Update `formspreeEndpoint` in `src/data/siteConfig.ts`

### 5. Run development server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

## 🚀 Deployment to GitHub Pages

### Step 1: Update Vite Config

In `vite.config.ts`, the `base` URL is already set to `/portfolio/`. If your repository has a different name, update it:

```typescript
base: '/your-repo-name/',
```

### Step 2: Configure GitHub Repository

1. Push your code to GitHub
2. Go to your repository **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### Step 3: Deploy

The workflow will automatically run when you push to the `main` branch:

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

Your site will be live at: `https://yourusername.github.io/portfolio/`

## 🎨 Customization

### Colors

Update colors in `tailwind.config.js`:

```javascript
colors: {
  primary: "#ff7300",    // Main orange color
  dark: "#111827",       // Dark text
  lightbg: "#f9fafb",   // Light background
}
```

### Fonts

Change font in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

## 📱 Sections Overview

1. **Hero** - Introduction with profile photo, tech stack, and CTA buttons
2. **Projects** - Filterable project showcase with links
3. **Experience** - Timeline of work experience and leadership
4. **Skills** - Categorized technical skills
5. **Achievements** - Certifications, awards, and publications
6. **Contact** - Contact form and social links

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

⭐ Built with React + TypeScript + Vite + Tailwind CSS

