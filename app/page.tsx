'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import ThemeToggle from '@/components/ThemeToggle';
import ResumeButton from '@/components/ResumeButton';
import ScrollToTop from '@/components/ScrollToTop';

// Dynamically import heavy components
const ParticleBackground = dynamic(
  () => import('@/components/ParticleBackground'),
  { ssr: false }
);

const CursorEffect = dynamic(
  () => import('@/components/CursorEffect'),
  { ssr: false }
);

const ThreeDModel = dynamic(
  () => import('@/components/ThreeDModel'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Effects */}
      <ParticleBackground />
      <ThreeDModel />
      <CursorEffect />

      {/* Navigation & Controls */}
      <Navbar />
      <ThemeToggle />
      <ResumeButton />
      <ScrollToTop />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Blog />
      <Contact />
      <Footer />

      {/* AI Assistant */}
      <AIAssistant />
    </main>
  );
}
