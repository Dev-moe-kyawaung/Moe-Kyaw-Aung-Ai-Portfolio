'use client';

import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

export default function ResumeButton() {
  return (
    <motion.a
      href="/resume/Moe_Kyaw_Aung_Resume.pdf"
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 
                 glass rounded-full text-sm text-cyber-cyan border border-dark-border
                 hover:bg-white/10 hover:border-cyber-cyan/50 transition-all shadow-lg"
    >
      <FileDown size={16} />
      <span className="hidden sm:inline">Download Resume</span>
    </motion.a>
  );
}
