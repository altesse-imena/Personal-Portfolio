"use client"

import { motion } from "framer-motion"

const skills = ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS"]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="bg-gray-800 px-4 py-2 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

