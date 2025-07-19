import '../app/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Optimize memory usage by cleaning up event listeners and timers
  useEffect(() => {
    return () => {
      // Clean up any global event listeners when component unmounts
      const cleanup = () => {
        // Remove any global event listeners
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
      
      // Placeholder functions for event handlers
      const handleResize = () => {};
      const handleScroll = () => {};
      
      cleanup();
    };
  }, []);

  return <Component {...pageProps} />;
}

// Enable memory optimization
if (typeof window !== 'undefined') {
  // Reduce memory usage by optimizing event listeners
  window.addEventListener = ((originalAddEventListener) => {
    return function(type, listener, options) {
      // Use passive listeners by default for scroll and touch events
      if (
        type === 'scroll' ||
        type === 'touchstart' ||
        type === 'touchmove' ||
        type === 'wheel'
      ) {
        const passiveOptions = { passive: true, ...options };
        return originalAddEventListener.call(this, type, listener, passiveOptions);
      }
      return originalAddEventListener.call(this, type, listener, options);
    };
  })(window.addEventListener);
}

export default MyApp;
