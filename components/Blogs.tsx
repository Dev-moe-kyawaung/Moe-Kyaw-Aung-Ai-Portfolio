'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Clean Architecture in Android: A Senior Developer\'s Guide',
    excerpt: 'Exploring the principles of Clean Architecture and how they apply to modern Android development with Jetpack Compose.',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    category: 'Architecture',
  },
  {
    title: 'Optimizing Kotlin Coroutines for Production Apps',
    excerpt: 'Best practices for managing coroutine scopes, error handling, and performance optimization in large-scale Android applications.',
    date: 'Nov 28, 2024',
    readTime: '6 min read',
    category: 'Kotlin',
  },
  {
    title: 'On-Device AI with TensorFlow Lite: A Practical Guide',
    excerpt: 'How to integrate machine learning models directly into Android apps for real-time, offline-capable AI features.',
    date: 'Oct 10, 2024',
    readTime: '10 min read',
    category: 'AI/ML',
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label">Insights</p>
          <h2 className="section-title">
            Latest{' '}
            <span className="gradient-text">Blog Posts</span>
          </h2>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card p-6 rounded-xl group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <FileText size={14} className="text-cyber-cyan" />
                <span className="text-xs text-cyber-cyan font-mono">{post.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <ArrowRight
                  size={16}
                  className="text-cyber-cyan opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
