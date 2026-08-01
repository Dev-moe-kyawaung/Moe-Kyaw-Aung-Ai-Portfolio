'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Award, MapPin, Briefcase } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Certificates', value: '82+' },
  { icon: Code2, label: 'Languages', value: '15+' },
  { icon: Briefcase, label: 'Years Experience', value: '3+' },
  { icon: MapPin, label: 'Locations', value: '2 Countries' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">About</p>
          <h2 className="section-title">
            Developer by{' '}
            <span className="gradient-text">passion</span>,<br />
            learner by{' '}
            <span className="text-cyber-cyan">nature</span>.
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-400 leading-relaxed text-lg">
              I am a passionate and self-motivated Senior Android Developer who believes in
              continuous learning and growth. From mobile applications to backend systems,
              databases to AI — I consistently expand my skill set across the full technology
              spectrum.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              My development philosophy is simple: <strong className="text-white">code with culture, build with purpose.</strong> I specialize in Kotlin, Jetpack Compose, MVVM, and Clean Architecture, delivering high-performance applications that users love.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Currently building{' '}
              <span className="text-cyber-cyan font-semibold">MoekyawTranslator</span> — an
              AI-powered translation app, and expanding my expertise in on-device machine
              learning with TensorFlow Lite.
            </p>

            {/* Tech Focus Areas */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Mobile', value: 'Kotlin · Jetpack Compose · MVVM' },
                { label: 'Backend', value: 'Firebase · REST APIs · Python' },
                { label: 'Security', value: 'Ethical Hacking · Cybersecurity' },
                { label: 'AI / ML', value: 'Claude API · TFLite · On-Device ML' },
              ].map((item) => (
                <div key={item.label} className="glass-card p-4 rounded-xl">
                  <p className="text-xs text-cyber-cyan font-mono mb-1">{item.label}</p>
                  <p className="text-sm text-gray-300">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Info & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-6 rounded-xl text-center hover:border-cyber-cyan/30 transition-all"
                >
                  <stat.icon size={24} className="text-cyber-cyan mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="glass p-6 rounded-xl space-y-4">
              {[
                { label: 'Full Name', value: 'Moe Kyaw Aung' },
                { label: 'Role', value: 'Senior Android Developer' },
                { label: 'Philosophy', value: 'Code with culture. Build with purpose.' },
                { label: 'Status', value: 'Open to Work 🟢' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{item.label}</span>
                  <span className="text-white text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
