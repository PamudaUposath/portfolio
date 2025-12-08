// Site configuration - Update with your personal information
import { getProjectsCompletedCount, getYearsOfExperience, getTopTechStack } from "../utils/statsCalculator";

export const siteConfig = {
  name: "Pamuda U. de A. Goonatilake",
  title: "Full Stack Developer & Cloud Enthusiast",
  tagline: "Passionate about cloud technologies, software quality, volunteering, and empowering tech communities.",
  email: "pamudaugoonatilake@gmail.com",
  phone: "+94716813566", // Optional
  location: "Colombo, Sri Lanka",
  
  // Social links
  social: {
    github: "https://github.com/PamudaUposath",
    linkedin: "https://linkedin.com/in/pamuda-u-goonatilake",
    whatsapp: "https://wa.me/94716813566", // Format: country code + number (no + or spaces)
    twitter: "https://twitter.com/goonatilakeP", // Optional
    instagram: "https://instagram.com/pamudauposath",
    medium: "https://medium.com/@pamudaugoonatilake",
    tiktok: "https://tiktok.com/@pamudaugoonatilake",
    youtube: "https://youtube.com/@pamutech",
    discord: "994596701174239242", // Discord User ID
    devto: "https://dev.to/pamuda_uposath",
    hashnode: "https://hashnode.com/@pamudauposath",
    kaggle: "https://kaggle.com/pamudagoonatilake",
  },
  
  // Resume/CV link
  cvUrl: "/path-to-your-cv.pdf", // Place your CV in the public folder
  
  // Stats for hero section - Dynamically calculated from data files
  get stats() {
    return {
      yearsExperience: getYearsOfExperience(),
      projectsCompleted: getProjectsCompletedCount(),
    };
  },
  
  // Tech stack badges for hero section - Dynamically calculated from projects
  get techStack() {
    return getTopTechStack(8);
  },
  
  // Contact form service (using Formspree - get your endpoint from formspree.io)
  formspreeEndpoint: "https://formspree.io/f/mrbnkjpk", // Replace with your Formspree form ID
};
