'use client';

import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {currentYear} Moe Kyaw Aung. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm flex items-center gap-1">
          Built with <Heart size={14} className="text-red-400" /> using Next.js, Tailwind CSS & Framer Motion
        </p>
        <div className="flex gap-4">
          <span className="text-gray-600 text-xs font-mono">v2.0.0</span>
          <span className="text-gray-600 text-xs">|</span>
          <span className="text-gray-600 text-xs font-mono">2026 Portfolio</span>
        </div>
      </div>
    </footer>
  );
}
