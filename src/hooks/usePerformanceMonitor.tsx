import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  largestContentfulPaint: number;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries.find(entry => entry.entryType === 'largest-contentful-paint');

      if (lcpEntry) {
        setMetrics(prev => ({
          ...prev,
          largestContentfulPaint: lcpEntry.startTime
        } as PerformanceMetrics));
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP observation not supported');
    }

    // Measure basic load times
    const loadTime = performance.now();

    const handleDOMContentLoaded = () => {
      setMetrics(prev => ({
        ...prev,
        domContentLoaded: performance.now(),
        loadTime
      } as PerformanceMetrics));
    };

    const handleLoad = () => {
      // First paint approximation
      setMetrics(prev => ({
        ...prev,
        firstPaint: performance.now()
      } as PerformanceMetrics));
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
      window.addEventListener('load', handleLoad);
    } else {
      handleDOMContentLoaded();
      handleLoad();
    }

    return () => {
      observer.disconnect();
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return metrics;
};

// Hook for monitoring component load times
export const useComponentLoadTime = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();

    return () => {
      const loadTime = performance.now() - startTime;
      console.log(`${componentName} loaded in ${loadTime.toFixed(2)}ms`);

      // In production, you might want to send this to analytics
      if (process.env.NODE_ENV === 'production') {
        // gtag('event', 'component_load_time', {
        //   component: componentName,
        //   load_time: loadTime
        // });
      }
    };
  }, [componentName]);
};