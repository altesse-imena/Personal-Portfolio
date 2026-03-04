"use client"

import { motion } from "framer-motion"
import { LinkedinIcon, GithubIcon, ArrowRightIcon } from "lucide-react"
import AnimatedCodeBackground from "./animated-code-background"


const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-24 px-4 min-h-screen flex items-center">
      {/* Animated code background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedCodeBackground />
        {/* Single subtle gradient overlay */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-indigo-500/3 to-transparent dark:from-indigo-500/5" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center md:text-left">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="stripe-heading mb-6">
              <span className="stripe-gradient-text">Altesse Imena</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-slate-700 dark:text-slate-300">
              Software Engineer
            </h2>
            
            <p className="stripe-subheading mb-8 md:max-w-2xl md:mx-0">
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
              className="px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white group"
            >
              View My Projects
              <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/altesseimena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 border border-slate-300 hover:border-indigo-500/50 hover:bg-slate-100/80 dark:border-slate-700 dark:hover:border-indigo-500/50 dark:hover:bg-slate-800/50"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              
              <a 
                href="https://github.com/altesse-imena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 border border-slate-300 hover:border-indigo-500/50 hover:bg-slate-100/80 dark:border-slate-700 dark:hover:border-indigo-500/50 dark:hover:bg-slate-800/50"
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

