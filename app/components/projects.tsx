"use client"

import { useState, useEffect, useCallback, memo, lazy, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  { 
    id: 1, 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    title: "AstroTrip: Interactive Space Exploration Web Application", 
    description: "Developed a responsive React application that delivers personalized space exploration experiences through interactive features including NASA astronomy picture integration, ISS tracking, and virtual planet trips.",
    image: "/images/Astrotrip Home Page.png",
    images: [
      "/images/Astrotrip Home Page.png",
      "/images/Birthday.png",
      "/images/Planet Trip.png"
    ],
    bgColor: "from-blue-600 to-purple-600",
    category: "Web",
    technologies: ["React", "NASA APIs", "Leaflet", "Axios", "Tailwind CSS"],
    demoUrl: "https://astrotrip.netlify.app/",
    githubUrl: "https://github.com/altesse-imena/AstroTrip",
    details: [
      "Implemented RESTful API integration with NASA's APOD API and ISS location services using Axios, enabling real-time data retrieval and display of astronomical imagery and space station positioning",
      "Engineered an interactive ISS tracking system using Leaflet maps that displays real-time International Space Station location, calculates flyover times, and performs reverse geocoding",
      "Created a personalized 'Birthdate in Space' feature that retrieves and displays NASA's Astronomy Picture of the Day from a user's birth date",
      "Built a modern, responsive UI inspired by SpaceX design principles using custom CSS and Tailwind, featuring dark mode, animated space backgrounds, and mobile-friendly layouts",
      "Implemented secure API key management using environment variables and deployed a production-ready application using Netlify CI/CD pipeline"
    ]
  },
  { 
    id: 2, 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Personal Finance Management Application powered by Artificial Intelligence", 
    description: "Designed and developed a financial management app to help users achieve their budgeting and savings goals.",
    image: "/images/finance-app.jpg",
    images: ["/images/finance-app.jpg"],
    bgColor: "from-indigo-500 to-purple-500",
    category: "Web & Mobile",
    technologies: ["Python", "React", "TensorFlow", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    details: [
      "Built an AI-powered chatbot to provide personalized financial advice based on user inputs",
      "Implemented features to track income, expenses, and savings while dynamically generating actionable insights",
      "Designed an intuitive user interface focused on ease of use and accessibility for all financial literacy levels",
      "Ensured robust data handling for accurate analysis and secure storage of user financial information",
      "Utilized Python for backend development and AI integration, focusing on automation and data privacy"
    ]
  },
  { 
    id: 3, 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 9.64a3 3 0 010 4.72m-3.536-8.464a5 5 0 010 7.072M19.072 5.929a9 9 0 010 12.142M5.928 5.929a9 9 0 010 12.142" />
      </svg>
    ),
    title: "Clypse – iOS App with Video Recognition Widget", 
    description: "Designed and developed an iOS application that recognizes video content through a Shazam-style widget interface.",
    image: "/images/IMG_3506.PNG",
    images: [
      "/images/IMG_3506.PNG",
      "/images/IMG_3507.PNG",
      "/images/IMG_3509.PNG",
      "/images/IMG_3510.PNG",
      "/images/IMG_3511.PNG"
    ],
    bgColor: "from-blue-500 to-indigo-600",
    category: "Mobile",
    technologies: ["Swift", "SwiftUI", "Core ML", "Vision"],
    demoUrl: "#",
    githubUrl: "#",
    details: [
      "Designed a fast, user-friendly interface with Swift and SwiftUI",
      "Built an iOS widget for instant video recognition",
      "Utilized AVFoundation, Core ML, and Vision for content analysis and metadata retrieval",
      "Integrated with a custom backend API for real-time processing",
      "Optimized for background efficiency and performance"
    ]
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset image index when opening modal
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = '';
  };

  // Handle escape key to close modal and arrow keys for image navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (selectedProject?.images?.length > 1) {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    }
  };

  // Image navigation functions
  const nextImage = useCallback(() => {
    if (selectedProject?.images?.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject?.images?.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);
  
  // Auto-rotate images every 5 seconds
  useEffect(() => {
    if (isModalOpen && selectedProject?.images?.length > 1) {
      const timer = setInterval(() => {
        nextImage();
      }, 5000);
      
      return () => clearInterval(timer);
    }
  }, [isModalOpen, selectedProject, currentImageIndex, nextImage]);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 relative">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-indigo-500/5 to-transparent dark:from-indigo-500/10 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="stripe-heading">Projects</h2>
          <p className="stripe-subheading">Some of my recent work</p>
        </motion.div>
        
        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="stripe-card overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openModal(project)}
              style={{ gridRow: `span ${index === 0 ? 2 : 1}` }}
            >
              {/* Project Image */}
              <div className="relative w-full h-64 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent z-10" />
                <div className="w-full h-full bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                  {/* Project Image or Fallback */}
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out`}>
                      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-full">
                        <div className="text-white w-10 h-10 flex items-center justify-center">
                          {project.icon}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-600/80 text-white">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              {/* Project Brief */}
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex space-x-2">
                    <a 
                      href={project.demoUrl} 
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                  
                  <button 
                    className="text-xs font-medium px-3 py-1.5 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-colors flex items-center gap-1 shadow-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                  >
                    Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div 
              className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Modal Header with Image Carousel */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                {/* Custom background for Clypse app */}
                {selectedProject.id === 2 ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 z-0">
                    <div className="absolute inset-0 opacity-20">
                      {/* Abstract pattern for mobile app background */}
                      <div className="absolute top-0 left-0 w-full h-full">
                        {[...Array(20)].map((_, i) => (
                          <div 
                            key={i}
                            className="absolute rounded-full bg-white/10"
                            style={{
                              width: `${Math.random() * 100 + 50}px`,
                              height: `${Math.random() * 100 + 50}px`,
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              opacity: Math.random() * 0.5 + 0.1,
                              transform: `scale(${Math.random() * 1 + 0.5})`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                )}
                
                {/* Image Carousel */}
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <div className="relative w-full h-full">
                    {/* Current Image */}
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={currentImageIndex}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-black/20" />
                          {/* Mobile device frame for Clypse app */}
                          {selectedProject.id === 2 ? (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="relative h-full mx-auto flex items-center">
                                {/* Mobile device frame */}
                                <div className="relative max-h-[90%] mx-auto">
                                  {/* Phone outer frame */}
                                  <div className="absolute inset-0 bg-black rounded-[36px] shadow-2xl z-10" />
                                  {/* Screen bezel */}
                                  <div className="absolute inset-2 bg-black rounded-[30px] z-20">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-6 bg-black rounded-b-xl z-30" />
                                  </div>
                                  {/* Actual screenshot with proper aspect ratio preservation */}
                                  <div className="relative z-20 p-2 pt-2 pb-2">
                                    <div className="relative rounded-[24px] overflow-hidden">
                                      <img 
                                        src={selectedProject.images[currentImageIndex]}
                                        alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                                        className="max-h-[70vh] w-auto"
                                        style={{ display: 'block' }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-full relative">
                              <img 
                                src={selectedProject.images[currentImageIndex]}
                                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Navigation Arrows - only show if there are multiple images */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button 
                          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          aria-label="Previous image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          aria-label="Next image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(index);
                              }}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  // Fallback if no images
                  <div className={`w-full h-full bg-gradient-to-br ${selectedProject.bgColor} flex items-center justify-center`}>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-full">
                      <div className="text-white w-16 h-16 flex items-center justify-center">
                        {selectedProject.icon}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Close Button */}
                <button 
                  className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                  onClick={closeModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Project Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-600/80 text-white">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-24rem)]">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Overview</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Links</h4>
                  <div className="flex gap-4">
                    <a 
                      href={selectedProject.demoUrl} 
                      className="px-4 py-2 rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors flex items-center gap-2 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Live Demo
                    </a>
                    <a 
                      href={selectedProject.githubUrl} 
                      className="px-4 py-2 rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Source
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Key Features</h4>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    {selectedProject.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
    </section>
  )
}

export default Projects

