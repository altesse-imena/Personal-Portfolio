"use client"

import { useTheme } from "../context/theme-provider"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="py-2 px-3 text-sm flex items-center gap-2 rounded-full font-medium transition-all duration-300 border border-slate-300 hover:border-indigo-500/50 hover:bg-slate-100/80 dark:border-slate-700 dark:hover:border-indigo-500/50 dark:hover:bg-slate-800/50"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <>
          <Moon className="h-4 w-4" />
          <span className="hidden sm:inline-block">Dark</span>
        </>
      ) : (
        <>
          <Sun className="h-4 w-4" />
          <span className="hidden sm:inline-block">Light</span>
        </>
      )}
    </motion.button>
  )
}
