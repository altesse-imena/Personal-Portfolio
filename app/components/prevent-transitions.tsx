"use client"

import { useEffect } from "react"

/**
 * This component prevents transitions on initial page load
 * by adding and removing a class that disables all transitions
 */
export function PreventTransitions() {
  useEffect(() => {
    // Add no-transitions class to prevent animations on page load
    document.documentElement.classList.add('no-transitions')
    
    // Remove the class after a short delay to allow transitions after page load
    const timeoutId = setTimeout(() => {
      document.documentElement.classList.remove('no-transitions')
    }, 100)
    
    return () => clearTimeout(timeoutId)
  }, [])
  
  // This component doesn't render anything
  return null
}
