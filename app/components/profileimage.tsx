"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProfileImage() {
  return (
    <motion.div
      className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1140-OiCvESKnp6wlTwIZwi3uKtLNctTZdA.jpeg"
        alt="Profile"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 256px"
        priority
      />
    </motion.div>
  )
}

