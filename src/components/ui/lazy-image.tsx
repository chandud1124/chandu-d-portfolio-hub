import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean; // For above-the-fold images
  sizes?: string; // For responsive images
  quality?: number; // Image quality (legacy, kept for compatibility)
}

const LazyImage = ({
  src,
  alt,
  className,
  placeholder,
  onLoad,
  onError,
  priority = false,
  sizes = '100vw',
  quality = 85
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return; // Don't lazy load priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate paths for optimized images
  const getOptimizedImagePath = (baseName: string, format: string, size?: number) => {
    const sizeSuffix = size ? `-${size}` : '-original';
    return `/optimized/${baseName}${sizeSuffix}.${format}`;
  };

  // Extract base name from src (remove @/assets/ and extension)
  const getBaseName = (srcPath: string) => {
    return srcPath
      .replace('@/assets/', '')
      .replace('@/assets/certificates/', '')
      .replace(/\.(jpg|jpeg|png)$/i, '');
  };

  const baseName = getBaseName(src);

  // Generate responsive image sources
  const generateSrcSet = (format: 'webp' | 'avif' | 'jpg') => {
    const sizes = [320, 640, 960];
    return sizes
      .map(size => `${getOptimizedImagePath(baseName, format, size)} ${size}w`)
      .join(', ');
  };

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden', className)}>
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center">
          <div className="text-muted-foreground text-sm text-center p-4">
            <div className="w-8 h-8 mx-auto mb-2 opacity-50">📷</div>
            Failed to load image
          </div>
        </div>
      )}

      {/* Optimized Image */}
      {isInView && (
        <picture>
          {/* AVIF format for best compression */}
          <source
            srcSet={generateSrcSet('avif')}
            sizes={sizes}
            type="image/avif"
          />
          {/* WebP format for modern browsers */}
          <source
            srcSet={generateSrcSet('webp')}
            sizes={sizes}
            type="image/webp"
          />
          {/* Fallback to optimized JPG */}
          <img
            ref={imgRef}
            srcSet={generateSrcSet('jpg')}
            sizes={sizes}
            src={getOptimizedImagePath(baseName, 'jpg')}
            alt={alt}
            className={cn(
              'w-full h-full object-cover transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      )}

      {/* Placeholder/Shimmer Effect */}
      {!isLoaded && !hasError && placeholder && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse" />
      )}
    </div>
  );
};

export default LazyImage;