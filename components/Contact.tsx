'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, Linkedin, Github, Twitter, Globe, MapPin } from 'lucide-react';
import socialsData from '@/data/socials.json';
import emailsData from '@/data/emails.json';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  website: Globe,
};

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Primary Email */}
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={20} className="text-cyber-cyan" />
                <h3 className="text-lg font-semibold text-white">Email</h3>
              </div>
              <div className="space-y-3">
                {emailsData.slice(0, 5).map((email) => (
                  <div key={email} className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm font-mono">{email}</span>
                    <button
                      onClick={() => copyToClipboard(email)}
                      className="text-xs text-cyber-cyan hover:text-accent-gold transition-colors"
                    >
                      {copiedEmail === email ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                ))}
                <button className="text-sm text-gray-500 hover:text-cyber-cyan transition-colors">
                  + Show all {emailsData.length} emails
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
              <div className="flex flex-wrap gap-3">
                {socialsData.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm 
                               text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/30 
                               border border-dark-border transition-all"
                  >
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Also find me on: Tumblr, Flickr, Bluesky, Vimeo, YouTube, Twitch, Reddit, Pinterest
              </p>
            </div>

            {/* Location */}
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-cyber-cyan" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-400 text-sm">
                    Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="glass p-8 rounded-xl space-y-6">
              <div>
                <label htmlFor="name" className="text-sm text-gray-400 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-dark-border 
                             text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email-input" className="text-sm text-gray-400 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email-input"
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-dark-border 
                             text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-gray-400 block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-dark-border 
                             text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan/50 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyber-cyan/20 border border-cyber-cyan/50 
                           rounded-lg text-cyber-cyan font-semibold hover:bg-cyber-cyan/30 
                           transition-all flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
