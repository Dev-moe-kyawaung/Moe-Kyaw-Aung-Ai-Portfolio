'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';
import certificatesData from '@/data/certificates.json';

export default function Certificates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [
    { id: 'all', name: 'All', count: '82' },
    { id: 'programming', name: '⌨️ Programming', count: '13' },
    { id: 'web', name: '🌐 Web Dev', count: '13' },
    { id: 'mobile', name: '📱 Mobile', count: '7' },
    { id: 'database', name: '🗄️ Databases', count: '6' },
    { id: 'ai', name: '🤖 AI/ML', count: '11' },
    { id: 'security', name: '🔐 Security', count: '10' },
    { id: 'blockchain', name: '⛓️ Blockchain', count: '4' },
    { id: 'software', name: '🛠️ SE', count: '7' },
    { id: 'business', name: '📈 Business', count: '11' },
  ];

  const filteredCertificates = certificatesData.filter((cert) => {
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || cert.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="certificates" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-title">
            Programming Hub{' '}
            <span className="gradient-text">Certificates</span>
          </h2>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-8"
        >
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 glass rounded-xl text-white placeholder-gray-500 
                       focus:outline-none focus:border-cyber-cyan/50 border border-dark-border"
          />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm transition-all \${
                activeCategory === category.id
                  ? 'bg-cyber-cyan/20 border-cyber-cyan/50 text-cyber-cyan'
                  : 'glass text-gray-400 hover:text-white border-dark-border'
              } border`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Certificate Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredCertificates.map((cert) => (
            <motion.a
              key={cert.id}
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-4 rounded-xl group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs text-cyber-cyan font-mono">{cert.category}</span>
                <ExternalLink
                  size={14}
                  className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-sm font-medium text-white mb-1 group-hover:text-cyber-cyan transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs text-gray-500">{cert.date}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
