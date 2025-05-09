"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  return (
    <motion.header
      className="py-6 px-4 sm:px-6 lg:px-8"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-between items-center">
        <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          AI
        </motion.div>
        <ul className="flex space-x-4">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href={`#${item.toLowerCase()}`} className="text-secondary hover:text-accent">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

