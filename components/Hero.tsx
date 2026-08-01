'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base font-mono text-cyber-cyan mb-4 tracking-wider"
        >
          Hello, I am
        </motion.p>

        {/* Main Name: MOE KYAW AUNG */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 
                     font-black leading-none tracking-tight
                     bg-gradient-to-r from-white via-cyber-cyan to-accent-gold 
                     bg-clip-text text-transparent
                     bg-[length:200%_auto]
                     animate-shimmer
                     mb-4"
        >
          MOE KYAW AUNG
        </motion.h1>

        {/* Typing Animation Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 h-12 mb-6"
        >
          <TypeAnimation
            sequence={[
              'Senior Android Developer',
              2000,
              'Kotlin · Jetpack Compose',
              2000,
              'MVVM · Clean Architecture',
              2000,
              'AI-Powered Apps',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        {/* Location Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-gray-500 text-base md:text-lg mb-8"
        >
          Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group px-8 py-3.5 glass hover:bg-white/20 
                       border border-white/20 rounded-xl 
                       text-white font-semibold text-sm
                       transition-all duration-300 hover:shadow-glow-pulse"
          >
            <span className="flex items-center gap-2">
              View Projects
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-cyber-cyan/40 rounded-xl 
                       text-cyber-cyan font-semibold text-sm
                       hover:border-cyber-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]
                       transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} className="text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
