import { useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
  currentImageIndex: number;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectModal = memo(({ project, isOpen, onClose, currentImageIndex, setCurrentImageIndex }: ProjectModalProps) => {
  // Image navigation functions - memoized to prevent unnecessary re-renders
  const nextImage = useCallback(() => {
    if (project?.images?.length > 1) {
      setCurrentImageIndex((prev) => {
        const newIndex = prev === project.images.length - 1 ? 0 : prev + 1;
        return newIndex;
      });
    }
  }, [project, setCurrentImageIndex]);

  const prevImage = useCallback(() => {
    if (project?.images?.length > 1) {
      setCurrentImageIndex((prev) => {
        const newIndex = prev === 0 ? project.images.length - 1 : prev - 1;
        return newIndex;
      });
    }
  }, [project, setCurrentImageIndex]);
  
  // Use a longer interval to reduce CPU usage
  useEffect(() => {
    if (isOpen && project?.images?.length > 1) {
      const timer = setInterval(() => {
        nextImage();
      }, 8000); // Increased from 5000ms to 8000ms to reduce CPU usage
      
      return () => clearInterval(timer);
    }
  }, [isOpen, project, nextImage]); // Removed currentImageIndex dependency to prevent unnecessary effect runs

  // Handle escape key to close modal and arrow keys for image navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (project?.images?.length > 1) {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
          onClick={onClose}
          onKeyDown={handleKeyDown as any}
          tabIndex={0}
        >
          <motion.div 
            className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Modal Header with Image Carousel */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 bg-slate-200 dark:bg-slate-800 overflow-hidden">
              {/* Custom background for Clypse app */}
              {project.id === 2 ? (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 z-0">
                  <div className="absolute inset-0 opacity-20">
                    {/* Abstract pattern for mobile app background */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      {[...Array(20)].map((_, i) => (
                        <div 
                          key={i}
                          className="absolute rounded-full bg-white/10"
                          style={{
                            width: `${Math.random() * 100 + 50}px`,
                            height: `${Math.random() * 100 + 50}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.1,
                            transform: `scale(${Math.random() * 1 + 0.5})`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
              )}
              
              {/* Image Carousel */}
              {project.images && project.images.length > 0 ? (
                <div className="relative w-full h-full">
                  {/* Current Image */}
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentImageIndex}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-black/20" />
                        {/* Mobile device frame for Clypse app */}
                        {project.id === 2 ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="relative h-full mx-auto flex items-center">
                              {/* Mobile device frame */}
                              <div className="relative max-h-[90%] mx-auto">
                                {/* Phone outer frame */}
                                <div className="absolute inset-0 bg-black rounded-[36px] shadow-2xl z-10" />
                                {/* Screen bezel */}
                                <div className="absolute inset-2 bg-black rounded-[30px] z-20">
                                  {/* Notch */}
                                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-6 bg-black rounded-b-xl z-30" />
                                </div>
                                {/* Actual screenshot with proper aspect ratio preservation */}
                                <div className="relative z-20 p-2 pt-2 pb-2">
                                  <div className="relative rounded-[24px] overflow-hidden">
                                    <Image 
                                      src={project.images[currentImageIndex]}
                                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                      width={400}
                                      height={800}
                                      className="max-h-[70vh] w-auto"
                                      style={{ display: 'block' }}
                                      quality={75}
                                      loading="lazy"
                                      sizes="(max-width: 768px) 100vw, 400px"
                                      placeholder="blur"
                                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjgwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjMzMzIi8+PC9zdmc+"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-full relative">
                            <Image 
                              src={project.images[currentImageIndex]}
                              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                              width={1200}
                              height={800}
                              className="w-full h-full object-cover"
                              quality={75}
                              loading="lazy"
                              sizes="(max-width: 768px) 100vw, 1200px"
                              placeholder="blur"
                              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiMzMzMiLz48L3N2Zz4="
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Navigation Arrows - only show if there are multiple images */}
                  {project.images.length > 1 && (
                    <>
                      <button 
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                        {project.images.map((_: any, index: number) => (
                          <button
                            key={index}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                // Fallback if no images
                <div className={`w-full h-full bg-gradient-to-br ${project.bgColor} flex items-center justify-center`}>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-full">
                    <div className="text-white w-16 h-16 flex items-center justify-center">
                      {project.icon}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                onClick={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Project Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-600/80 text-white">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-24rem)]">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Overview</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, i: number) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Links</h4>
                <div className="flex gap-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Key Features</h4>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  {project.details.map((detail: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});

export default ProjectModal;
