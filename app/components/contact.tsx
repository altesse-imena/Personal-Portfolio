"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const Contact = () => {
  const [copyStatus, setCopyStatus] = useState<string | null>(null)
  
  const copyToClipboard = () => {
    const email = "imenaaltesse@gmail.com"
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopyStatus("Email copied!")
        setTimeout(() => setCopyStatus(null), 2000)
      })
      .catch(() => {
        setCopyStatus("Failed to copy")
        setTimeout(() => setCopyStatus(null), 2000)
      })
  }
  return (
    <motion.section
      id="contact"
      className="py-16 md:py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8 text-center">Contact Me</h2>
        
        <p className="text-slate-600 dark:text-slate-300 mb-8 md:mb-10 text-base sm:text-lg">
          Feel free to reach out to me via email. I'm always open to discussing new projects, 
          creative ideas, or opportunities to be part of your vision.
        </p>
        
        <motion.a
          href="mailto:imenaaltesse@gmail.com?subject=Portfolio%20Contact&body=Hello%20Altesse,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20about..."
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            // Fallback for mailto links not working
            if (!window.open(`mailto:imenaaltesse@gmail.com`, '_blank')) {
              // If window.open fails, try location.href
              window.location.href = `mailto:imenaaltesse@gmail.com`;
            }
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Send email to Altesse Imena"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-5 h-5 sm:w-6 sm:h-6"
            aria-hidden="true"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          Email Me
        </motion.a>
        
        <div className="mt-6 md:mt-4 relative">
          <button 
            onClick={copyToClipboard}
            className="text-sm sm:text-base py-2 px-4 text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            aria-label="Copy email address to clipboard"
          >
            Or click here to copy my email address
          </button>
          
          {copyStatus && (
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-slate-800 text-white text-xs sm:text-sm px-4 py-2 rounded-md shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              role="status"
              aria-live="polite"
            >
              {copyStatus}
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
