"use client"

import { motion } from "framer-motion"

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

// Fixed-seed random numbers: the layout looks random but is the same on the server and in
// the browser, so the page hydrates cleanly and the component stays pure.
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const random = seeded(20251029)

const codeLines = Array.from({ length: 12 }, (_, id) => ({
  id,
  text: codeSnippets[Math.floor(random() * codeSnippets.length)],
  x: random() * 100,
  y: random() * 100,
  delay: random() * 10,
  duration: 15 + random() * 10,
  rotate: -5 + random() * 10,
  driftY: -20 + random() * 40,
}))

const symbols = ['{', '}', '(', ')', ';', '=', '>', '<', '/', '*'].map((symbol) => ({
  symbol,
  left: random() * 100,
  top: random() * 100,
  dx: (random() - 0.5) * 200,
  dy: (random() - 0.5) * 200,
  duration: 20 + random() * 15,
  delay: random() * 8,
}))

const AnimatedCodeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute font-mono text-xs md:text-sm text-ultramarine-500/60 dark:text-ultramarine-400/50 whitespace-nowrap"
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
          }}
          initial={{ 
            opacity: 0, 
            x: -100,
            rotate: line.rotate
          }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            x: [0, 50, 100],
            y: [0, line.driftY],
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
      {symbols.map((s, i) => (
        <motion.div
          key={`symbol-${i}`}
          className="absolute font-mono text-lg text-ultramarine-500/40 dark:text-ultramarine-400/35"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 360],
            x: [0, s.dx],
            y: [0, s.dy],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.symbol}
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedCodeBackground
