// Hero Section - Landing page with profile and CTA
import React from "react";
import { Button, Badge, Container } from "../common";
import { siteConfig } from "../../data/siteConfig";
import { getAssetPath } from "../../utils/assets";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-start bg-gradient-to-br from-white to-lightbg pt-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2  items-start top-10">
          {/* Right side - Text content */}
          <div className="order-2 lg:order-2 space-y-6 left  ml-[-28%]">
            {/* Greeting */}
            <div className="inline-block">
              <Badge variant="primary" size="md">
                Hello, I'm
              </Badge>
            </div>

            {/* Name and Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight whitespace-nowrap">
              {siteConfig.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              {siteConfig.title}
            </h2>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {siteConfig.tagline}
            </p>

            {/* Stats */}
            <div className="flex gap-6 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {siteConfig.stats.yearsExperience}
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {siteConfig.stats.projectsCompleted}
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" size="lg" href="#contact">
                Contact Me
              </Button>
              <Button variant="outline" size="lg" href={siteConfig.cvUrl}>
                Download CV
              </Button>
            </div>

            {/* Tech Stack
            <div className="pt-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Tech Stack:
              </p>
              <div className="flex flex-wrap gap-2">
                {siteConfig.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div> */}
          </div>

          {/* Left side - Profile Image with Orange Shape */}
          <div className="order-1 lg:order-1 flex justify-left items-start mt-7 ml-[-5%]">
            <div className="relative">
              {/* Orange angular shape background */}
              <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="absolute inset-0 bg-primary rounded-3xl transform -rotate-3 scale-110 opacity-10"></div>
              
              {/* Profile Image Container */}
              <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                {/* Placeholder for profile image */}
                <img
                  src={getAssetPath("/profile.jpg")} // Replace with your actual image in public folder
                  alt={siteConfig.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.currentTarget.src = "https://via.placeholder.com/400x400/ff7300/ffffff?text=Your+Photo";
                  }}
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-dark">
                    Available for projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
