"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Sample code snippets that will animate
const codeSnippets = [
  "const portfolio = new Developer();",
  "function createAwesome() {",
  "  return innovation + passion;",
  "}",
  "class SoftwareEngineer {",
  "  constructor() {",
  "    this.skills = ['React', 'TypeScript'];",
  "  }",
  "}",
  "const buildFuture = async () => {",
  "  const result = await solve(problems);",
  "  return result;",
  "};",
  "import { creativity } from 'mind';",
  "export default Excellence;",
  "// Building tomorrow's solutions",
  "let dreams = code + dedication;",
  "if (challenge.isHard()) {",
  "  developer.levelUp();",
  "}",
]

interface CodeLine {
  id: number
  text: string
  x: number
  y: number
  delay: number
  duration: number
  opacity: number
}

const AnimatedCodeBackground = () => {
  const [codeLines, setCodeLines] = useState<CodeLine[]>([])

  useEffect(() => {
    // Generate random code lines
    const lines: CodeLine[] = []
    for (let i = 0; i < 12; i++) {
      lines.push({
        id: i,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 15 + Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.15,
      })
    }
    setCodeLines(lines)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute font-mono text-xs md:text-sm text-indigo-500/60 dark:text-indigo-400/50 whitespace-nowrap"
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
          }}
          initial={{ 
            opacity: 0, 
            x: -100,
            rotate: -5 + Math.random() * 10 
          }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            x: [0, 50, 100],
            y: [0, -20 + Math.random() * 40],
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {line.text}
        </motion.div>
      ))}
      
      {/* Additional floating code symbols */}
      {['{', '}', '(', ')', ';', '=', '>', '<', '/', '*'].map((symbol, i) => (
        <motion.div
          key={`symbol-${i}`}
          className="absolute font-mono text-lg text-indigo-500/40 dark:text-indigo-400/35"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 360],
            x: [0, (Math.random() - 0.5) * 200],
            y: [0, (Math.random() - 0.5) * 200],
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedCodeBackground
