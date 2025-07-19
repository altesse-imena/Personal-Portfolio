import { useEffect, useRef } from 'react';

/**
 * Custom hook to optimize memory usage in the application
 * - Cleans up resources when components unmount
 * - Optimizes event listeners
 * - Implements debouncing for expensive operations
 */
export function useMemoryOptimization() {
  const cleanupFns = useRef<Array<() => void>>([]);

  // Register a cleanup function to be called when the component unmounts
  const registerCleanup = (fn: () => void) => {
    cleanupFns.current.push(fn);
  };

  // Create a debounced function to prevent excessive calls
  const debounce = <T extends (...args: any[]) => any>(
    fn: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Clean up the timeout when component unmounts
    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    return (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  // Clean up all registered functions when the component unmounts
  useEffect(() => {
    return () => {
      cleanupFns.current.forEach(fn => fn());
      cleanupFns.current = [];
    };
  }, []);

  // Optimize image loading by using IntersectionObserver
  const optimizeImageLoading = (imageRef: React.RefObject<HTMLImageElement>) => {
    useEffect(() => {
      if (!imageRef.current || typeof IntersectionObserver === 'undefined') return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && imageRef.current) {
              const img = imageRef.current;
              const src = img.getAttribute('data-src');
              
              if (src) {
                img.src = src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
              }
            }
          });
        },
        { rootMargin: '200px' }
      );

      observer.observe(imageRef.current);

      // Clean up the observer when component unmounts
      registerCleanup(() => {
        if (imageRef.current) {
          observer.unobserve(imageRef.current);
        }
        observer.disconnect();
      });
    }, [imageRef]);
  };

  return {
    registerCleanup,
    debounce,
    optimizeImageLoading,
  };
}
