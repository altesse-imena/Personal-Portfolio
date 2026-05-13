"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["About", "Projects", "Skills", "Contact"];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
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

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Hamburger Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="w-6 h-0.5 bg-slate-700 dark:bg-slate-300 rounded-full"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-slate-700 dark:bg-slate-300 rounded-full mt-1.5"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-slate-700 dark:bg-slate-300 rounded-full mt-1.5"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-slate-200 dark:border-slate-700 mt-4">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={`#${item.toLowerCase()}`}
                        onClick={closeMenu}
                        className="block py-2 px-4 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header

