"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

const Header = () => {
  const navItems = ["About", "Projects", "Skills", "Contact"];
  
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b dark:bg-slate-900/70 dark:border-slate-800/50 bg-white/70 border-slate-200/50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto py-4 px-6 sm:px-8 lg:px-12">
        <nav className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <span className="stripe-gradient-text">AI</span>
          </motion.div>
          
          {/* Navigation */}
          <div className="flex items-center">
            <ul className="flex items-center space-x-8 mr-4">
              {navItems.map((item) => (
                <motion.li 
                  key={item} 
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white text-sm font-medium transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header

