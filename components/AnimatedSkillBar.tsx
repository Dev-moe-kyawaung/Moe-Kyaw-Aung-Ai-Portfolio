'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
  delay?: number;
}

export default function AnimatedSkillBar({
  name,
  level,
  color = 'bg-cyber-cyan',
  delay = 0,
}: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-xs text-gray-500 font-mono">{level}%</span>
      </div>
      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `\${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: 'easeOut' }}
          className={`h-full rounded-full \${color} shadow-[0_0_10px_rgba(0,229,255,0.3)]`}
        />
      </div>
    </div>
  );
}
