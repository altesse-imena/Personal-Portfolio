"use client"

import { motion, useAnimation, Variants } from "framer-motion"
import { LinkedinIcon, GithubIcon, ArrowRightIcon } from "lucide-react"
import { useEffect } from "react"

// Animated background blob variants
const blobVariants: Variants = {
  initial: (custom: number) => ({
    scale: 0.8,
    opacity: 0.5,
    x: 0,
    y: 0,
  }),
  animate: (custom: number) => ({
    scale: [0.8, 1.1, 0.9],
    opacity: [0.5, 0.7, 0.5],
    x: [0, custom * 30, 0],
    y: [0, custom * -20, 0],
    transition: {
      duration: 15 + custom * 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }),
}

// Floating particles variants
const particleVariants: Variants = {
  initial: (custom: number) => ({
    opacity: 0.2 + (custom * 0.3),
    y: 0,
    x: 0,
    scale: 0.5 + (custom * 0.5),
  }),
  animate: (custom: number) => ({
    opacity: [0.2 + (custom * 0.3), 0.5 + (custom * 0.3), 0.2 + (custom * 0.3)],
    y: [0, custom * -30, 0],
    x: [0, custom * 20, 0],
    scale: [0.5 + (custom * 0.5), 0.7 + (custom * 0.5), 0.5 + (custom * 0.5)],
    transition: {
      duration: 10 + custom * 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }),
}

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 px-4 min-h-[90vh] md:min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main gradient backgrounds - optimized for mobile */}
        <motion.div 
          className="absolute top-0 right-0 w-2/3 md:w-1/2 h-1/2 bg-gradient-to-b from-indigo-500/5 to-transparent dark:from-indigo-500/10"
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ 
            opacity: [0.5, 0.7, 0.5],
            scale: [0.9, 1.05, 0.9],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/2 md:w-1/3 h-1/3 bg-gradient-to-t from-purple-500/5 to-transparent dark:from-purple-500/10"
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ 
            opacity: [0.5, 0.7, 0.5],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Animated blobs - adjusted for mobile */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-indigo-500/5 rounded-full blur-3xl dark:bg-indigo-500/10"
          variants={blobVariants}
          initial="initial"
          animate="animate"
          custom={1}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-56 md:w-80 h-56 md:h-80 bg-purple-500/5 rounded-full blur-3xl dark:bg-purple-500/10"
          variants={blobVariants}
          initial="initial"
          animate="animate"
          custom={-0.7}
        />
        
        {/* Floating particles - responsive positioning */}
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/30 dark:to-purple-500/30"
            style={{
              width: 3 + i * 2.5,
              height: 3 + i * 2.5,
              left: `${10 + i * 10}%`,
              top: `${5 + (i % 5) * 18}%`,
            }}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            custom={i * 0.1}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center md:text-left">
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
              <span className="stripe-gradient-text">Altesse Imena</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 md:mb-6 text-slate-700 dark:text-slate-300">
              Software Engineer
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 md:max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400 mb-6 md:mb-8">
              Passionate about creating innovative solutions and building impactful applications.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white group text-base"
            >
              View My Projects
              <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a 
                href="https://www.linkedin.com/in/altesseimena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 border border-slate-300 hover:border-indigo-500/50 hover:bg-slate-100/80 dark:border-slate-700 dark:hover:border-indigo-500/50 dark:hover:bg-slate-800/50"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              
              <a 
                href="https://github.com/altesse-imena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 border border-slate-300 hover:border-indigo-500/50 hover:bg-slate-100/80 dark:border-slate-700 dark:hover:border-indigo-500/50 dark:hover:bg-slate-800/50"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
    </section>
  )
}

export default Hero

