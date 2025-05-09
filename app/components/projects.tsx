"use client"

import { motion } from "framer-motion"

const projects = [
  { id: 1, title: "E-commerce Platform", description: "A full-stack e-commerce solution with React and Node.js" },
  { id: 2, title: "Task Management App", description: "A productivity app built with Next.js and GraphQL" },
  { id: 3, title: "Portfolio Website", description: "A responsive portfolio website using Gatsby and Tailwind CSS" },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-secondary">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

