"use client"

import { motion } from "framer-motion"
import { useState, FormEvent } from "react"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        })
        // Clear form
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        {submitStatus.type && (
          <motion.div 
            className={`mb-6 p-4 rounded ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {submitStatus.message}
          </motion.div>
        )}
        
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input 
            type="text" 
            id="name" 
            className="w-full p-2 bg-gray-800 rounded" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <input 
            type="email" 
            id="email" 
            className="w-full p-2 bg-gray-800 rounded" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
          <textarea 
            id="message" 
            rows={4} 
            className="w-full p-2 bg-gray-800 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </motion.div>
        <motion.button
          type="submit"
          className="w-full bg-accent text-background py-2 rounded hover:bg-accent/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>
      </form>
    </motion.section>
  )
}

export default Contact

