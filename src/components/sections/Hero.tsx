// Hero Section - Landing page with profile and CTA
import React from "react";
import { Button, Badge, Container } from "../common";
import { siteConfig } from "../../data/siteConfig";

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

            {/* Leadership Titles */}
            <div className="pt-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Current Positions:
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <span className="text-sm font-semibold">AWS Cloud Club Captain</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-sm font-semibold">Program Team Lead - IEEE SB UOJ</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold">QA Engineer - Enfera</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm font-semibold">Volunteer Management Lead - STEMUP</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold">Finance Team Member - IEEE INSL</span>
                </div>
                
              </div>
            </div>

            
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
                  src="/profile.jpg" // Replace with your actual image in public folder
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
