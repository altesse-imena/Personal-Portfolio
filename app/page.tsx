"use client"

import { motion } from "framer-motion"
import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Contact from "./components/contact"

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Header />
      <main className="container mx-auto">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </motion.div>
  )
}

