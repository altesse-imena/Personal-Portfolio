"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-accent">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">African Leadership University</h4>
                <p className="text-secondary">Computer Science</p>
                <p className="text-sm text-secondary/80">2021 - Present</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-accent">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Software Engineering Intern</h4>
                <p className="text-secondary">Andela</p>
                <p className="text-sm text-secondary/80">2023</p>
                <ul className="list-disc list-inside text-sm text-secondary mt-2 space-y-1">
                  <li>Developed and maintained web applications</li>
                  <li>Collaborated with cross-functional teams</li>
                  <li>Worked with modern JavaScript frameworks</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About

