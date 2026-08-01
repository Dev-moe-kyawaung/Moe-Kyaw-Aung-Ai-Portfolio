'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hello! I'm Moekyaw AI, your personal assistant for exploring Moe's portfolio. I can explain projects, architecture decisions, or tech stack details. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulated AI response (in production, call Claude API)
    setTimeout(() => {
      const responses: Record<string, string> = {
        'pulsesync':
          'PulseSync is a flagship project demonstrating senior-level Android architecture. It uses a multi-module setup with Clean Architecture, offline-first with Firebase, and full CI/CD. The key challenge was real-time conflict resolution, solved using CRDTs.',
        'architecture':
          'Moe specializes in Clean Architecture with MVVM/MVI patterns. Projects are structured with separate data, domain, and presentation layers for testability and scalability. Coroutines and Flow handle asynchronous operations.',
        'kotlin':
          'Kotlin is Moe\'s primary language. He leverages features like coroutines, sealed classes, extension functions, and Flow for building robust Android applications.',
        'ai': 'Moe integrates AI using TensorFlow Lite for on-device ML and the Claude API for cloud-based NLP tasks. The MoekyawTranslator app is a prime example of this hybrid approach.',
      };

      const lowercaseInput = input.toLowerCase();
      let responseText =
        "I can provide detailed information about Moe's projects, architecture patterns, tech stack choices, or specific technologies. Feel free to ask about PulseSync, architecture, Kotlin, or AI implementations.";

      for (const [key, value] of Object.entries(responses)) {
        if (lowercaseInput.includes(key)) {
          responseText = value;
          break;
        }
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: responseText,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 glass rounded-full text-cyber-cyan 
                   hover:bg-white/20 transition-all shadow-lg hover:shadow-cyber-cyan/20"
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 z-40 w-80 md:w-96 h-[500px] glass rounded-2xl 
                       border border-dark-border overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-dark-border">
              <div className="w-8 h-8 rounded-full bg-cyber-cyan/20 flex items-center justify-center">
                <Bot size={16} className="text-cyber-cyan" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Moekyaw AI</h3>
                <p className="text-xs text-gray-500">Ask me about Moe&apos;s work</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl text-sm \${
                      msg.role === 'user'
                        ? 'bg-cyber-cyan/20 text-cyber-cyan'
                        : 'bg-white/5 text-gray-300'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-3 rounded-xl">
                    <span className="text-gray-400 text-sm">Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-dark-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                  placeholder="Ask about a project..."
                  className="flex-1 px-4 py-2 bg-white/5 rounded-lg text-sm text-white 
                             placeholder-gray-500 focus:outline-none border border-dark-border"
                />
                <button
                  onClick={handleSend}
                  disabled={isTyping}
                  className="p-2 bg-cyber-cyan/20 rounded-lg text-cyber-cyan 
                             hover:bg-cyber-cyan/30 transition-all disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
