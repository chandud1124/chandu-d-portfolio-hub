import { Suspense, lazy } from 'react';
import { SkeletonCard, SkeletonText, Skeleton } from '@/components/ui/skeleton';

// Lazy load components
const Navigation = lazy(() => import('@/components/Navigation'));
const Hero = lazy(() => import('@/components/Hero'));
const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const Experience = lazy(() => import('@/components/Experience'));
const Projects = lazy(() => import('@/components/Projects'));
const Certifications = lazy(() => import('@/components/Certifications'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));
const ParticlesBackground = lazy(() => import('@/components/ParticlesBackground'));

// Loading components
const HeroSkeleton = () => (
  <section className="section-container">
    <div className="max-container">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 space-y-6">
          <Skeleton className="h-6 w-64 mx-auto lg:mx-0" />
          <Skeleton className="h-12 w-full max-w-lg mx-auto lg:mx-0" />
          <Skeleton className="h-6 w-96 mx-auto lg:mx-0" />
          <SkeletonText lines={3} className="max-w-2xl mx-auto lg:mx-0" />
          <div className="flex gap-4 justify-center lg:justify-start">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
        <div className="flex-shrink-0">
          <Skeleton variant="circular" className="w-80 h-80 lg:w-96 lg:h-96" />
        </div>
      </div>
    </div>
  </section>
);

const SectionSkeleton = ({ title }: { title?: string }) => (
  <section className="section-container">
    <div className="max-container">
      <div className="text-center mb-16">
        <Skeleton className="h-8 w-64 mx-auto mb-6" />
        <Skeleton className="h-1 w-20 mx-auto mb-6" />
        <SkeletonText lines={2} className="max-w-2xl mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  </section>
);

const SkillsSkeleton = () => (
  <section className="section-container">
    <div className="max-container">
      <div className="text-center mb-16">
        <Skeleton className="h-8 w-48 mx-auto mb-6" />
        <Skeleton className="h-1 w-20 mx-auto mb-6" />
        <SkeletonText lines={2} className="max-w-2xl mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export {
  Navigation,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Certifications,
  Contact,
  Footer,
  ParticlesBackground,
  HeroSkeleton,
  SectionSkeleton,
  SkillsSkeleton
};