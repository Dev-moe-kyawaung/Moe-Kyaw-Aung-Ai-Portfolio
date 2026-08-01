'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code2, BarChart3 } from 'lucide-react';
import projectsData from '@/data/projects.json';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const currentProject = projectsData[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    setExpandedProject(null);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    setExpandedProject(null);
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">Case Studies</p>
          <h2 className="section-title">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 glass rounded-full text-white hover:bg-white/20 transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-3 glass rounded-full text-white hover:bg-white/20 transition-all"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>

          {/* Project Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-dark-border">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br \${currentProject.gradient} opacity-10`} />

                {/* Main Content */}
                <div className="relative p-6 md:p-10 lg:p-16">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left: Image / Video Placeholder */}
                    <div className="aspect-video rounded-xl bg-white/5 border border-dark-border overflow-hidden flex items-center justify-center">
                      <div className="text-center p-8">
                        <Code2 size={48} className="text-cyber-cyan mx-auto mb-4" />
                        <p className="text-gray-500 text-sm">Interactive demo coming soon</p>
                      </div>
                    </div>

                    {/* Right: Project Details */}
                    <div className="space-y-6">
                      {/* Title */}
                      <div>
                        <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider">
                          {currentProject.category}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">
                          {currentProject.title}
                        </h3>
                        <p className="text-xl text-gray-400 mt-1">{currentProject.subtitle}</p>
                      </div>

                      {/* Overview */}
                      <p className="text-gray-500 leading-relaxed">
                        {currentProject.overview}
                      </p>

                      {/* Tech Stack */}
                      <div>
                        <p className="text-sm text-gray-400 mb-2 font-mono">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-300 border border-dark-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <a
                          href={currentProject.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyber-cyan transition-colors"
                        >
                          <Github size={16} />
                          Source Code
                        </a>
                        {currentProject.links.live && (
                          <a
                            href={currentProject.links.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyber-cyan transition-colors"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                      </div>

                      {/* Expand Details Button */}
                      <button
                        onClick={() =>
                          setExpandedProject(
                            expandedProject === currentProject.id ? null : currentProject.id
                          )
                        }
                        className="flex items-center gap-2 text-sm text-cyber-cyan hover:text-accent-gold transition-colors"
                      >
                        <BarChart3 size={16} />
                        {expandedProject === currentProject.id
                          ? 'Hide Technical Details'
                          : 'View Technical Details'}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Technical Details */}
                  <AnimatePresence>
                    {expandedProject === currentProject.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden mt-8"
                      >
                        <div className="border-t border-dark-border pt-8">
                          <div className="grid md:grid-cols-3 gap-8">
                            {/* Architecture */}
                            <div className="glass-card p-6 rounded-xl">
                              <h4 className="text-cyber-cyan font-semibold mb-3 font-mono text-sm">
                                Architecture
                              </h4>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {currentProject.architecture}
                              </p>
                            </div>

                            {/* Challenges */}
                            <div className="glass-card p-6 rounded-xl">
                              <h4 className="text-cyber-cyan font-semibold mb-3 font-mono text-sm">
                                Challenges
                              </h4>
                              <ul className="space-y-2">
                                {currentProject.challenges.map((challenge, idx) => (
                                  <li
                                    key={idx}
                                    className="text-gray-400 text-sm flex items-start gap-2"
                                  >
                                    <span className="text-accent-gold mt-1">▸</span>
                                    {challenge}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Solutions */}
                            <div className="glass-card p-6 rounded-xl">
                              <h4 className="text-cyber-cyan font-semibold mb-3 font-mono text-sm">
                                Solutions
                              </h4>
                              <ul className="space-y-2">
                                {currentProject.solutions.map((solution, idx) => (
                                  <li
                                    key={idx}
                                    className="text-gray-400 text-sm flex items-start gap-2"
                                  >
                                    <span className="text-green-400 mt-1">✦</span>
                                    {solution}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setExpandedProject(null);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 \${
                  index === currentIndex
                    ? 'bg-cyber-cyan w-8'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to project \${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
