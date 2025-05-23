"use client"

import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        
        <p className="text-slate-600 dark:text-slate-300 mb-10">
          Feel free to reach out to me via email. I'm always open to discussing new projects, 
          creative ideas, or opportunities to be part of your vision.
        </p>
        
        <motion.a
          href="mailto:imenaaltesse@gmail.com"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          Email Me
        </motion.a>
      </div>
    </motion.section>
  )
}

export default Contact
