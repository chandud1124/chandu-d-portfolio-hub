import React, { useEffect, useRef, Suspense, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Navigation, ParticlesBackground, Footer } from '@/components/lazy-components';
import { X, Download, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type CreativeItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
};

const creativeItems: CreativeItem[] = [
  {
    id: 1,
    title: 'National Science Day 2025',
    category: 'Certificate Design',
    description: 'Professional certificate created for AIMS School of IT recognizing participation in National Science Day 2025. Features a futuristic gradient background, node-network graphics, and a clean academic layout.',
    imageUrl: '/certificates/national-science-day.jpg',
  },
  {
    id: 2,
    title: 'Aurora Club – Badminton Tournament',
    category: 'Sports Event Certificate',
    description: 'Sports event achievement certificate designed for Aurora Club\'s Badminton (Solo) Tournament with a bright two-tone layout and sports visuals.',
    imageUrl: '/certificates/badminton-tournament.jpg',
  },
  {
    id: 3,
    title: 'Best Research Article – Quantum Computing Day',
    category: 'Academic Certificate',
    description: 'Certificate awarded for authoring the Best Research Article for Quantum Computing Day. Clean blue academic design with formal structure.',
    imageUrl: '/certificates/best-research-quantum.jpg',
  },
  {
    id: 4,
    title: 'Best Research Article – Variant Layout',
    category: 'Academic Certificate (Alternate)',
    description: 'A modern alternative design featuring geometric gradients and a refined scholarly presentation.',
    imageUrl: '/certificates/research-variant.jpg',
  },
  {
    id: 5,
    title: 'National Science Day 2025 – Event Poster',
    category: 'Event Poster',
    description: 'Vibrant poster featuring CV Raman, atoms, planets, and scientific illustrations — created for National Science Day celebrations.',
    imageUrl: '/certificates/science-day-poster.jpg',
  },
  {
    id: 6,
    title: 'Best E-Poster Design Certificate',
    category: 'Creative Design Certificate',
    description: 'Certificate featuring an abstract smoke-background and vertical typography, awarded for Best E-Poster Design.',
    imageUrl: '/certificates/best-eposter.jpg',
  },
  {
    id: 7,
    title: 'Online Quiz Competition – Quantum Computing Day',
    category: 'Competition Certificate',
    description: 'Certificate designed for the Online Quiz Competition held during World Quantum Computing Day, featuring quantum-themed visuals and geometric layers.',
    imageUrl: '/certificates/quantum-quiz.jpg',
  },
];

const CreativeWork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxImage, setLightboxImage] = useState<CreativeItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    // Smooth scrolling without snap for better visibility
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = 'smooth';
    }
  }, []);

  const openLightbox = (item: CreativeItem, index: number) => {
    setLightboxImage(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % creativeItems.length
      : (currentIndex - 1 + creativeItems.length) % creativeItems.length;
    setCurrentIndex(newIndex);
    setLightboxImage(creativeItems[newIndex]);
  };

  const downloadImage = () => {
    if (lightboxImage) {
      const link = document.createElement('a');
      link.href = lightboxImage.imageUrl;
      link.download = `${lightboxImage.title.replace(/\s+/g, '-')}.jpg`;
      link.click();
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)] animate-pulse-slow"></div>
      </div>

      <Suspense fallback={<div className="fixed inset-0 bg-background flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
        <ParticlesBackground />
      </Suspense>
      <Suspense fallback={<div />}>
        <Navigation />
      </Suspense>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Page Header */}
      <div className="relative z-10 pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-text">
            Creative & Media Work
          </h1>
          <p className="text-muted-foreground text-lg">Scroll to explore my creative designs</p>
        </motion.div>
      </div>

      {/* Scrollable Sections */}
      <div ref={containerRef} className="relative z-10">
        {creativeItems.map((item, index) => (
          <CreativeSection
            key={item.id}
            item={item}
            index={index}
            isReversed={index % 2 !== 0}
            onImageClick={() => openLightbox(item, index)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-foreground hover:text-primary"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-foreground hover:text-primary"
              onClick={() => navigateLightbox('prev')}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-foreground hover:text-primary"
              onClick={() => navigateLightbox('next')}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image */}
            <div className="relative rounded-lg overflow-hidden border-2 border-primary/50 shadow-2xl">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                className="w-full h-auto object-contain max-h-[80vh]"
              />
            </div>

            {/* Info & Actions */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{lightboxImage.title}</h3>
                <p className="text-primary">{lightboxImage.category}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadImage}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  );
};

type CreativeSectionProps = {
  item: CreativeItem;
  index: number;
  isReversed: boolean;
  onImageClick: () => void;
};

const CreativeSection: React.FC<CreativeSectionProps> = ({ item, index, isReversed, onImageClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ['blur(8px)', 'blur(0px)', 'blur(0px)', 'blur(8px)']);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.9, 1, 1, 0.9]);
  
  // Text slides in from left/right when scrolling down, slides out opposite when scrolling up
  const textX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    isReversed ? [100, 0, 0, -100] : [-100, 0, 0, 100]
  );
  
  // Image slides in from opposite direction, slides out on scroll up
  const imageX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    isReversed ? [-100, 0, 0, 100] : [100, 0, 0, -100]
  );

  // 3D Tilt effect
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, filter: blur, scale }}
      className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 py-16"
    >
      <div className={`w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Text Content */}
        <motion.div
          style={{ x: textX }}
          className={`space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div className="space-y-2">
            <span className="text-sm md:text-base font-medium text-primary tracking-wider uppercase">
              {item.category}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {item.title}
            </h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {item.description}
          </p>
          <div className="pt-4">
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          ref={imageRef}
          style={{ 
            x: imageX,
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            perspective: 1000,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative cursor-pointer ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
          onClick={onImageClick}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-xl opacity-20 group-hover:opacity-50 transition-all duration-500"></div>
            
            {/* Glass-morphism Container */}
            <div className="relative rounded-lg overflow-hidden border border-primary/30 shadow-2xl backdrop-blur-sm bg-background/10 p-1">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-flow"></div>
              
              {/* Image */}
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback placeholder
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23hsl(var(--background))%22/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%23hsl(var(--primary))%22%3E' + encodeURIComponent(item.title) + '%3C/text%3E%3C/svg%3E';
                  }}
                />
                {/* Zoom Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CreativeWork;
