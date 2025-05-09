"use client"

import { motion } from "framer-motion"

// Programming Languages
const programmingLanguages = ["Python", "JavaScript", "TypeScript", "Swift", "Rust", "Go", "Java", "C#", "C++"]

// Web Development
const webDevelopment = ["React", "Angular", "Node.js", "Django", "FastAPI", "HTML", "CSS"]

// Databases
const databases = ["Oracle", "MySQL", "PostgreSQL", "Firebase"]

// Cloud Platforms
const cloudPlatforms = ["AWS", "Google Cloud Platform"]

// Skill categories with icons
const skillCategories = [
  {
    id: 1,
    title: "Programming Languages",
    skills: programmingLanguages,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Web Development",
    skills: webDevelopment,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Databases",
    skills: databases,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Cloud Platforms",
    skills: cloudPlatforms,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Languages",
    skills: ["English (Native)", "French (Native)"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    )
  }
]

const Skills = () => {
  return (
    <section id="skills" className="stripe-section relative">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-purple-500/5 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="stripe-heading">Technical Skills</h2>
          <p className="stripe-subheading">Technologies and languages I work with</p>
        </motion.div>
        
        <div className="grid gap-12 md:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              className="stripe-card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={`${category.id}-${index}`}
                    className="bg-slate-800/80 border border-slate-700/50 px-4 py-2 rounded-full hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                    whileHover={{ y: -2 }}
                  >
                    <span className="text-slate-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  )
}

export default Skills

