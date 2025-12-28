
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.2em] text-blue-600 bg-blue-50/50 border border-blue-100 rounded-full">
            ESTABLISHED 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-black font-heading tracking-tight leading-[0.9] mb-8 text-black"
        >
          AvyoraOfficial
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-neutral-800">
            Complete Digital, Website & Ground Growth Solutions
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We help brands, cafes, and businesses grow through digital marketing, on-ground strategies, and premium web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#plans" 
            className="group relative w-full md:w-auto px-10 py-5 bg-black text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-2xl"
          >
            View Subscription Plans
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-10 py-5 bg-white text-black border-2 border-neutral-100 rounded-full font-bold text-lg hover:bg-neutral-50 transition-all shadow-sm"
          >
            Start Your Growth
          </button>
        </motion.div>
      </div>

      {/* 3D Abstract Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            rotateX: [0, 180],
            y: [0, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-64 h-64 border border-blue-100 rounded-[60px] transform-style-3d opacity-20"
        />
        <motion.div
          animate={{ 
            rotateZ: [0, 360],
            x: [0, 40, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-80 h-80 border border-purple-100 rounded-full transform-style-3d opacity-20"
        />
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-400 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView()}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
