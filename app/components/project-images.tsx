"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Function to generate a placeholder image with a gradient background and icon
const generatePlaceholderImage = (
  canvas: HTMLCanvasElement,
  icon: string,
  title: string,
  color1: string,
  color2: string
) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Set canvas dimensions
  canvas.width = 800
  canvas.height = 600

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop(0, color1)
  gradient.addColorStop(1, color2)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Add a subtle pattern
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * canvas.width
    const y = Math.random() * canvas.height
    const radius = Math.random() * 50 + 10
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }

  // Add icon
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
  ctx.font = 'bold 80px sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(icon, canvas.width / 2, canvas.height / 2 - 40)

  // Add title
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
  ctx.font = '30px sans-serif'
  ctx.fillText(title, canvas.width / 2, canvas.height / 2 + 60)

  // Add a subtle vignette effect
  const radialGradient = ctx.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 3,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width
  )
  radialGradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
  radialGradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)')
  ctx.fillStyle = radialGradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  return canvas.toDataURL('image/jpeg', 0.9)
}

// Component to generate and save project images
const ProjectImageGenerator = () => {
  const router = useRouter()

  useEffect(() => {
    const generateImages = async () => {
      const projects = [
        {
          id: 'finance-app',
          icon: '💰',
          title: 'Finance App',
          color1: '#4F46E5',
          color2: '#7C3AED'
        },
        {
          id: 'ios-app',
          icon: '📱',
          title: 'iOS App',
          color1: '#2563EB',
          color2: '#7C3AED'
        },
        {
          id: 'astrotrip',
          icon: '🚀',
          title: 'AstroTrip',
          color1: '#2563EB',
          color2: '#7C3AED'
        }
      ]

      const canvas = document.createElement('canvas')
      document.body.appendChild(canvas)
      canvas.style.display = 'none'

      for (const project of projects) {
        const dataUrl = generatePlaceholderImage(
          canvas,
          project.icon,
          project.title,
          project.color1,
          project.color2
        )

        // Create a link to download the image
        if (dataUrl) {
          const link = document.createElement('a')
          link.href = dataUrl
          link.download = `${project.id}.jpg`
          link.click()
        }
      }

      document.body.removeChild(canvas)
      
      // Navigate back to home after generating images
      setTimeout(() => {
        router.push('/')
      }, 1000)
    }

    generateImages()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
          Generating Project Images
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Please wait while we generate placeholder images for your projects...
        </p>
        <div className="mt-6 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectImageGenerator
