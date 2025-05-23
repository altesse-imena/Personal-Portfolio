"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="stripe-section relative">
      {/* Background gradient elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="stripe-heading">About Me</h2>
          <p className="stripe-subheading">My education and professional experience</p>
        </motion.div>
        
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2">
          <motion.div
            className="stripe-card p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Education</h3>
            </div>
            
            <div className="pl-4 border-l border-indigo-500/30">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Southern Alberta Institute of Technology</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-1">Bachelor of Technology – Software Development</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">2023 - 2027 (in progress)</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="stripe-card p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Experience</h3>
            </div>
            
            <div className="pl-4 border-l border-indigo-500/30">
              <div>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Avenue Living Residential</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-1">Calgary, AB</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">September 2024 – April 2025</p>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Worked with a multidisciplinary team to design and develop an application for analyzing and consolidating real estate data.</p>
                
                <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                    <span>Integrated data from various sources (CoStar Group, Yardi Matrix, Zillow) to provide comprehensive market insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                    <span>Implemented data aggregation, filtering, and advanced screening features to support real estate investment decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                    <span>Led frontend development using React and designed a user-friendly interface for efficient data analysis and visualization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                    <span>Managed data storage and retrieval with a PostgreSQL database, ensuring scalability and performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                    <span>Demonstrated proficiency in full-stack development, data integration, and enterprise-level application design</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
    </section>
  )
}

export default About

