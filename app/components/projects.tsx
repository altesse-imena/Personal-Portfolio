"use client"

import { motion } from "framer-motion"

const projects = [
  { 
    id: 1, 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Personal Finance Management Application powered by Artificial Intelligence", 
    description: "Designed and developed a financial management app to help users achieve their budgeting and savings goals.",
    details: [
      "Built an AI-powered chatbot to provide personalized financial advice based on user inputs",
      "Implemented features to track income, expenses, and savings while dynamically generating actionable insights",
      "Designed an intuitive user interface focused on ease of use and accessibility for all financial literacy levels",
      "Ensured robust data handling for accurate analysis and secure storage of user financial information",
      "Utilized Python for backend development and AI integration, focusing on automation and data privacy"
    ]
  },
  { 
    id: 2, 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 9.64a3 3 0 010 4.72m-3.536-8.464a5 5 0 010 7.072M19.072 5.929a9 9 0 010 12.142M5.928 5.929a9 9 0 010 12.142" />
      </svg>
    ),
    title: "Clypse – iOS App with Video Recognition Widget", 
    description: "Designed and developed an iOS application that recognizes video content through a Shazam-style widget interface.",
    details: [
      "Designed a fast, user-friendly interface with Swift and SwiftUI",
      "Built an iOS widget for instant video recognition",
      "Utilized AVFoundation, Core ML, and Vision for content analysis and metadata retrieval",
      "Integrated with a custom backend API for real-time processing",
      "Optimized for background efficiency and performance"
    ]
  },
  { 
    id: 3, 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Events Management System", 
    description: "Developed a cross-platform application to manage event listings with CRUD functionality efficiently.",
    details: [
      "Designed and implemented a user-friendly interface for listing, editing, and deleting event details",
      "Built the application using the MAUI framework in C#, ensuring cross-platform compatibility",
      "Integrated a robust database for seamless storage, retrieval, and management of event data",
      "Focused on scalability and performance to support efficient event tracking",
      "Demonstrated expertise in C#, database integration, and UI/UX design for desktop applications"
    ]
  },
]

const Projects = () => {
  return (
    <section id="projects" className="stripe-section relative">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-indigo-500/5 to-transparent dark:from-indigo-500/10 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="stripe-card overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-6 pb-0">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">{project.description}</p>
              </div>
              
              <div className="bg-slate-100/50 dark:bg-slate-800/50 p-6 border-t border-slate-200 dark:border-slate-700/50">
                <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">Key Features</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
    </section>
  )
}

export default Projects

