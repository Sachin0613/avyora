
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 px-6 overflow-hidden bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading mb-8">Complete Brand Ecosystem.</h2>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed">
            From your domain to your menu, we manage every touchpoint of your brand's growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                rotateX: 5,
                rotateY: 5,
                scale: 1.05,
                y: -10
              }}
              className="group relative p-10 rounded-[40px] bg-white border border-neutral-100 shadow-xl shadow-neutral-500/5 transition-all duration-300 transform-style-3d perspective-1000 overflow-hidden"
            >
              {/* Corner Glow Effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_0%_0%,rgba(37,99,235,0.15),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(37,99,235,0.15),transparent_40%)]" />
              <div className="absolute -top-1 -left-1 w-24 h-24 bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-neutral-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-blue-600 group-hover:shadow-blue-500/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-neutral-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
