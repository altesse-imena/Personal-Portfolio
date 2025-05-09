"use client"

import { motion } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

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

