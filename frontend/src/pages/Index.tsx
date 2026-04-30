import { Suspense } from 'react';
import {
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
} from '@/components/lazy-components';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Suspense fallback={<div className="fixed inset-0 bg-background flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
        <ParticlesBackground />
      </Suspense>
      <Suspense fallback={<div />}>
        <Navigation />
      </Suspense>
      <main>
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionSkeleton title="About" />}>
          <About />
        </Suspense>
        <Suspense fallback={<SkillsSkeleton />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionSkeleton title="Experience" />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionSkeleton title="Projects" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton title="Certifications" />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionSkeleton title="Contact" />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
