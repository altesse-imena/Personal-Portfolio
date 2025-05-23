"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when clicking on a link or when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsMenuOpen(false);
      }
    };
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };
  
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
            className="text-2xl font-bold z-20" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <span className="stripe-gradient-text">AI</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
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
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 z-20">
            <ThemeToggle />
            
            <button
              id="menu-button"
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span 
                className={`block w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              />
              <span 
                className={`block w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ease-out mt-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <span 
                className={`block w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ease-out mt-1.5 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              />
            </button>
          </div>
          
          {/* Mobile Navigation Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-menu"
                className="fixed inset-0 bg-white/95 dark:bg-slate-900/95 z-10 flex flex-col md:hidden"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <ul className="flex flex-col items-center space-y-8 text-center">
                    {navItems.map((item) => (
                      <motion.li 
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * navItems.indexOf(item) }}
                        className="w-full"
                      >
                        <Link 
                          href={`#${item.toLowerCase()}`} 
                          className="text-slate-800 dark:text-slate-100 text-2xl font-medium block py-3 px-8 w-full"
                          onClick={handleMenuItemClick}
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
        </nav>
      </div>
    </motion.header>
  )
}

export default Header

