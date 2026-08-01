'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Android / Mobile',
    icon: '📱',
    skills: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Material 3', 'Gradle', 'ADB'],
  },
  {
    title: 'Architecture',
    icon: '🏗️',
    skills: ['MVVM', 'MVI', 'Clean Architecture', 'Multi-module', 'SOLID', 'OOP'],
  },
  {
    title: 'Backend & Cloud',
    icon: '☁️',
    skills: ['Firebase', 'REST APIs', 'Retrofit', 'OkHttp', 'Node.js', 'Python'],
  },
  {
    title: 'AI / Machine Learning',
    icon: '🤖',
    skills: ['Claude API', 'TFLite', 'On-Device ML', 'Python ML', 'NLP', 'Data Analysis'],
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub Actions', 'CI/CD', 'Docker', 'Linux', 'Figma'],
  },
  {
    title: 'Security',
    icon: '🔐',
    skills: ['Ethical Hacking', 'Kali Linux', 'Network Security', 'Cryptography', 'OWASP', 'Pen Testing'],
  },
];

const allSkills = [
  'Kotlin', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Dart',
  'Jetpack Compose', 'Android', 'Firebase', 'MVVM', 'Clean Architecture',
  'Git', 'Docker', 'CI/CD', 'REST APIs', 'Machine Learning',
  'TFLite', 'Cybersecurity', 'Linux', 'Figma', 'Agile/Scrum',
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        {/* Skill Clouds - All Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16 justify-center"
        >
          {allSkills.map((skill, index) => (
            <span
              key={skill}
              className="px-4 py-2 glass rounded-full text-sm text-gray-300 
                         hover:bg-cyber-cyan/10 hover:border-cyber-cyan/30 
                         border border-dark-border transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-400 
                               border border-dark-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

