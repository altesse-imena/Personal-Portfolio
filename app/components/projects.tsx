"use client"

import { useState, useEffect, useCallback } from "react"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import dynamic from "next/dynamic"

// Dynamically import the ProjectModal component for code splitting
const ProjectModal = dynamic(() => import('./ProjectModal'), {
  loading: () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-xl">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 dark:bg-slate-700 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ssr: false // Disable server-side rendering for this component
})

const projects = [
  { 
    id: 1, 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    title: "AstroTrip: Interactive Space Exploration Web Application", 
    description: "Developed a responsive React application that delivers personalized space exploration experiences through interactive features including NASA astronomy picture integration, ISS tracking, and virtual planet trips.",
    image: null,
    images: [],
    bgColor: "from-blue-600 to-purple-600",
    category: "Web",
    technologies: ["React", "NASA APIs", "Leaflet", "Axios", "Tailwind CSS"],
    demoUrl: "https://astrotrip.netlify.app/",
    githubUrl: "https://github.com/altesse-imena/AstroTrip",
    details: [
      "Implemented RESTful API integration with NASA's APOD API and ISS location services using Axios, enabling real-time data retrieval and display of astronomical imagery and space station positioning",
      "Engineered an interactive ISS tracking system using Leaflet maps that displays real-time International Space Station location, calculates flyover times, and performs reverse geocoding",
      "Created a personalized 'Birthdate in Space' feature that retrieves and displays NASA's Astronomy Picture of the Day from a user's birth date",
      "Developed a virtual planet exploration feature that allows users to learn about planets through interactive 3D models and educational content",
      "Implemented secure API key management using environment variables to protect sensitive credentials while maintaining functionality"
    ]
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AgentCollab: Multi-Agent Coding Assistant",
    description: "Production-grade multi-agent system where specialized AI agents collaborate on software development tasks. Features code generation, review, testing, and security analysis with LangGraph orchestration.",
    image: "/images/placeholder-multi-agent.jpg",
    images: ["/images/placeholder-multi-agent.jpg"],
    bgColor: "from-emerald-600 to-cyan-600",
    category: "AI/ML",
    technologies: ["Python", "LangGraph", "OpenAI API", "FastAPI", "React", "PostgreSQL", "Docker", "GitHub API"],
    demoUrl: "#",
    githubUrl: "#",
    details: [
      "Architected multi-agent system with specialized roles: CodeWriter, CodeReviewer, TestGenerator, and SecurityAnalyzer agents",
      "Implemented LangGraph workflow orchestration managing agent communication, shared state, and graceful failure handling",
      "Built cost-optimization strategies for compound LLM call chains, reducing API costs by 40% through intelligent caching",
      "Integrated GitHub API for automated issue resolution, demonstrating real-world problem-solving capabilities",
      "Developed production-grade error handling and recovery mechanisms for agent coordination failures",
      "Created intuitive web interface showing agent collaboration in real-time with detailed workflow visualization"
    ]
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "VoiceFlow: Real-Time Conversational Voice Agent",
    description: "Advanced voice agent with real-time interruption handling, turn-taking, and low-latency response. Includes PII guardrails and compliance filters for production deployment.",
    image: "/images/placeholder-voice-agent.jpg",
    images: ["/images/placeholder-voice-agent.jpg"],
    bgColor: "from-purple-600 to-pink-600",
    category: "AI/ML",
    technologies: ["Python", "Whisper", "WebSockets", "OpenAI API", "TTS", "FastAPI", "React", "WebRTC"],
    demoUrl: "#",
    githubUrl: "#",
    details: [
      "Implemented real-time speech-to-text using OpenAI Whisper with sub-200ms latency for natural conversation flow",
      "Built sophisticated barge-in detection allowing users to interrupt mid-sentence with seamless context switching",
      "Developed turn-taking algorithms analyzing speech patterns, pauses, and intonation for natural conversation dynamics",
      "Integrated PII detection and redaction system ensuring GDPR and HIPAA compliance for sensitive conversations",
      "Created streaming LLM pipeline with incremental response generation reducing perceived latency by 60%",
      "Deployed WebSocket-based architecture supporting concurrent voice sessions with real-time audio processing"
    ]
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AutoPilot: Autonomous Computer-Use Agent",
    description: "Vision-powered agent that controls computers autonomously - navigating browsers, filling forms, extracting data using multimodal AI for screen interpretation and action execution.",
    image: "/images/placeholder-computer-agent.jpg",
    images: ["/images/placeholder-computer-agent.jpg"],
    bgColor: "from-orange-600 to-red-600",
    category: "AI/ML",
    technologies: ["Python", "OpenAI Vision", "Selenium", "PyAutoGUI", "OpenCV", "FastAPI", "React", "WebDriver"],
    demoUrl: "#",
    githubUrl: "#",
    details: [
      "Developed computer vision system using GPT-4V for real-time screen interpretation and UI element detection",
      "Implemented spatial reasoning algorithms for precise click coordinates and drag-and-drop operations",
      "Built multimodal understanding pipeline combining visual context with text instructions for complex task execution",
      "Created robust error handling and recovery mechanisms for failed actions with intelligent retry strategies",
      "Integrated browser automation with form filling, data extraction, and navigation across multiple websites",
      "Designed safety constraints preventing unauthorized actions and maintaining user control over agent behavior"
    ]
  },
  {
    id: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "EvalGuard: LLM Evaluation Framework",
    description: "Comprehensive evaluation pipeline testing LLM outputs for correctness, hallucination, toxicity, and consistency. Production-ready safety framework for regulated industries.",
    image: "/images/placeholder-eval-framework.jpg",
    images: ["/images/placeholder-eval-framework.jpg"],
    bgColor: "from-red-600 to-orange-600",
    category: "AI/ML",
    technologies: ["Python", "Pytest", "OpenAI API", "Anthropic API", "PostgreSQL", "FastAPI", "React", "MLflow"],
    demoUrl: "#",
    githubUrl: "#",
    details: [
      "Built comprehensive evaluation suite testing LLM outputs across correctness, hallucination, and toxicity metrics",
      "Implemented automated hallucination detection using fact-checking algorithms and knowledge base validation",
      "Created toxicity and bias detection pipeline with configurable thresholds for different industry requirements",
      "Developed prompt variant testing framework ensuring consistent performance across different input formulations",
      "Integrated safety fallback strategies with graceful degradation for high-risk scenarios",
      "Built detailed reporting dashboard with compliance tracking for regulated industries (healthcare, finance)"
    ]
  },
  {
    id: 6,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V5a1 1 0 011-1h3a1 1 0 001-1V2a2 2 0 114 0z" />
      </svg>
    ),
    title: "MCPHub: AI Assistant with Custom Tool Servers",
    description: "Cutting-edge AI assistant leveraging Anthropic's Model Context Protocol (MCP) with custom FastMCP servers for dynamic tool discovery and execution.",
    image: "/images/placeholder-mcp-assistant.jpg",
    images: ["/images/placeholder-mcp-assistant.jpg"],
    bgColor: "from-indigo-600 to-purple-600",
    category: "AI/ML",
    technologies: ["Python", "FastMCP", "Anthropic API", "FastAPI", "React", "PostgreSQL", "Docker", "WebSockets"],
    demoUrl: "#",
    githubUrl: "#",
    details: [
      "Implemented Model Context Protocol integration for standardized AI-tool communication following Anthropic's 2026 specifications",
      "Built custom FastMCP servers handling file operations, web search, database queries, and external API integrations",
      "Developed dynamic tool discovery system allowing runtime addition of new capabilities without code changes",
      "Created intelligent tool routing based on query analysis and context understanding",
      "Implemented secure sandboxing for tool execution with permission management and audit logging",
      "Built real-time interface showing tool discovery, selection, and execution with detailed result visualization"
    ]
  },
  {
    id: 7,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "MultiRAG: Multimodal Document Intelligence",
    description: "Advanced RAG system processing documents, images, and tables. Routes queries across text chunks, image descriptions, and structured data with unified cited responses.",
    image: "/images/placeholder-multimodal-rag.jpg",
    images: ["/images/placeholder-multimodal-rag.jpg"],
    bgColor: "from-teal-600 to-green-600",
    category: "AI/ML",
    technologies: ["Python", "LangChain", "OpenAI API", "Chroma", "Tesseract", "FastAPI", "React", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    details: [
      "Built multimodal RAG pipeline processing PDFs with embedded charts, scanned receipts, and mixed-format documents",
      "Implemented intelligent query routing across text chunks, image descriptions, and structured data tables",
      "Developed OCR and image analysis pipeline extracting text and visual elements from complex documents",
      "Created unified response generation with proper citation tracking across all modalities",
      "Integrated table detection and parsing for structured data extraction and querying",
      "Built confidence scoring system for multimodal responses with source attribution and verification"
    ]
  },
  {
    id: 8,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "DomainLLM: Fine-Tuned Specialist Model",
    description: "Custom fine-tuned LLM using QLoRA on domain-specific data (legal contracts, medical notes, or specialized code). Demonstrates advanced model training and evaluation.",
    image: "/images/placeholder-fine-tuned-llm.jpg",
    images: ["/images/placeholder-fine-tuned-llm.jpg"],
    bgColor: "from-yellow-600 to-orange-600",
    category: "AI/ML",
    technologies: ["Python", "PyTorch", "Transformers", "QLoRA", "Unsloth", "Weights & Biases", "FastAPI", "Gradio"],
    demoUrl: "#",
    githubUrl: "#",
    details: [
      "Fine-tuned Llama 3 model using QLoRA technique on specialized domain dataset with 95% memory efficiency",
      "Implemented comprehensive evaluation framework with domain-specific metrics and benchmark comparisons",
      "Built data preprocessing pipeline handling domain-specific formatting and quality filtering",
      "Created training monitoring system with Weights & Biases integration for loss tracking and hyperparameter optimization",
      "Developed inference API with optimized serving for production deployment",
      "Documented complete training process with reproducible results and performance analysis"
    ]
  },
  {
    id: 9,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "EmotiSense: Real-Time Emotion Detection System",
    description: "Cross-modal emotion detection system fusing facial micro-expressions and vocal tone analysis for real-time emotional state inference with applications in coaching and healthcare.",
    image: "/images/placeholder-emotion-detection.jpg",
    images: ["/images/placeholder-emotion-detection.jpg"],
    bgColor: "from-pink-600 to-rose-600",
    category: "AI/ML",
    technologies: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "WebRTC", "FastAPI", "React", "WebSockets"],
    demoUrl: "#",
    githubUrl: "#",
    details: [
      "Developed real-time facial expression analysis using MediaPipe and custom CNN models for micro-expression detection",
      "Implemented audio emotion recognition analyzing vocal tone, pitch, and speech patterns",
      "Built cross-modal fusion algorithm combining visual and audio signals for improved emotion accuracy",
      "Created real-time processing pipeline handling 30fps video and continuous audio streams",
      "Integrated privacy-preserving techniques with on-device processing and encrypted data transmission",
      "Built applications for interview coaching, mental health monitoring, and customer service quality assessment"
    ]
  },
  {
    id: 10,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "CodeGuard: AI-Powered Code Review Bot",
    description: "Production-grade GitHub App providing automated PR reviews with security analysis, performance checks, and inline comments using LLM with structured outputs.",
    image: "/images/placeholder-code-review-bot.jpg",
    images: ["/images/placeholder-code-review-bot.jpg"],
    bgColor: "from-gray-700 to-slate-600",
    category: "Developer Tools",
    technologies: ["Python", "GitHub API", "OpenAI API", "FastAPI", "PostgreSQL", "Redis", "Docker", "Webhooks"],
    demoUrl: "#",
    githubUrl: "#",
    details: [
      "Built production GitHub App with webhook integration for automated PR review triggering",
      "Implemented security vulnerability detection using static analysis and LLM-powered pattern recognition",
      "Created performance regression analysis comparing code complexity and resource usage patterns",
      "Developed test coverage gap detection with suggestions for missing test scenarios",
      "Built structured output system for consistent, actionable review comments with severity levels",
      "Integrated with CI/CD pipelines providing review status checks and blocking merge capabilities"
    ]
  },
  {
    id: 11,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "EdgeAI: On-Device Inference System",
    description: "Optimized computer vision and NLP models deployed on constrained hardware (Raspberry Pi, mobile) with real-time inference under 50ms latency and offline capabilities.",
    image: "/images/placeholder-edge-ai.jpg",
    images: ["/images/placeholder-edge-ai.jpg"],
    bgColor: "from-green-600 to-emerald-600",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow Lite", "ONNX", "OpenCV", "Raspberry Pi", "Core ML", "React Native", "C++"],
    demoUrl: "#",
    githubUrl: "#",
    details: [
      "Optimized deep learning models for edge deployment using TensorFlow Lite and ONNX quantization",
      "Achieved real-time inference with sub-50ms latency on Raspberry Pi 4 for computer vision tasks",
      "Implemented model compression techniques reducing model size by 90% while maintaining 95% accuracy",
      "Built cross-platform deployment supporting iOS (Core ML), Android (TensorFlow Lite), and embedded Linux",
      "Created offline-first architecture with local data processing and optional cloud synchronization",
      "Developed power optimization strategies extending battery life by 40% on mobile deployments"
    ]
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  // Open modal with selected project
  const openModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }
  
  // Close modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])
  
  // Add event listener for keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [isModalOpen, closeModal]);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 relative">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-indigo-500/5 to-transparent dark:from-indigo-500/10 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="stripe-heading">Projects</h2>
          <p className="stripe-subheading">Some of my recent work</p>
        </div>
        
        {/* Projects Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
            key={project.id}
            className="stripe-card overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative w-full h-80 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent z-10" />
                <div className="w-full h-full bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                  {/* Project Image or Fallback */}
                  {project.image && !project.image.includes('placeholder') ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.bgColor} flex items-center justify-center relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                      </div>
                      {/* Main Icon */}
                      <div className="text-white/90 scale-[2.5] z-10">
                        {project.icon}
                      </div>
                      {/* Category Badge */}
                      <div className="absolute bottom-4 right-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white/80 text-xs font-medium">{project.category}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-600/80 text-white">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              {/* Project Brief */}
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex space-x-2">
                    <a 
                      href={project.demoUrl} 
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                  
                  <button 
                    className="text-xs font-medium px-3 py-1.5 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-colors flex items-center gap-1 shadow-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                  >
                    Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal - Using dynamically imported component */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
    </section>
  )
}

export default Projects
