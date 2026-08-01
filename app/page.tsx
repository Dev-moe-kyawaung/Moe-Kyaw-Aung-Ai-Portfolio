'use client';

import { lazy, Suspense } from 'react';
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
import CursorEffect from '@/components/CursorEffect';
import ParticleBackground from '@/components/ParticleBackground';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <CursorEffect />
      <Navbar />
      <ThemeToggle />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Blog />
      <Contact />
      <Footer />
      
      <AIAssistant />
    </main>
  );
}
