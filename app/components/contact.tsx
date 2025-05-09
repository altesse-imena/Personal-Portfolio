"use client"

import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
      <form className="max-w-md mx-auto">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input type="text" id="name" className="w-full p-2 bg-gray-800 rounded" />
        </motion.div>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input type="email" id="email" className="w-full p-2 bg-gray-800 rounded" />
        </motion.div>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea id="message" rows={4} className="w-full p-2 bg-gray-800 rounded"></textarea>
        </motion.div>
        <motion.button
          type="submit"
          className="w-full bg-accent text-background py-2 rounded hover:bg-accent/80 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  )
}

export default Contact

