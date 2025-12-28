
import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_POINTS } from '../constants';

const Trust: React.FC = () => {
  return (
    <section id="trust" className="py-32 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black font-heading mb-6">Why Choose AvyoraOfficial</h2>
          <p className="text-lg text-neutral-500">The unfair advantage for your business growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_POINTS.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-[40px] bg-white border border-neutral-100 shadow-xl shadow-neutral-500/5 text-center transition-all duration-300 overflow-hidden"
            >
              {/* Corner Glow Effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_0%_0%,rgba(37,99,235,0.1),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(37,99,235,0.1),transparent_35%)]" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-blue-600 transition-colors">{point.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
