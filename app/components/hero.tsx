"use client"

import { motion } from "framer-motion"
import ProfileImage from "./ProfileImage"
import { Button } from "@/components/ui/button"
import { LinkedinIcon, GithubIcon } from "lucide-react"

const Hero = () => {
  return (
    <motion.section
      className="min-h-[80vh] flex flex-col justify-center items-center py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProfileImage />
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="text-5xl font-bold mb-4">Altesse Imena</h1>
        <h2 className="text-2xl text-secondary mb-6">Software Engineer</h2>
        <p className="text-lg max-w-xl mx-auto text-secondary/80 mb-8">
          Passionate about creating innovative solutions and building impactful applications. Currently focused on
          full-stack development and cloud technologies.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://www.linkedin.com/in/altesse-imena-5a2a2a242/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-5 h-5" />
              GitHub
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Hero

