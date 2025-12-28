
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PenTool, Users } from 'lucide-react';

const About: React.FC = () => {
  const icons = [
    { icon: <TrendingUp className="w-10 h-10 text-blue-600" />, label: 'Digital Growth' },
    { icon: <PenTool className="w-10 h-10 text-purple-600" />, label: 'Branding' },
    { icon: <Users className="w-10 h-10 text-emerald-600" />, label: 'Customer Engagement' }
  ];

  return (
    <section id="about" className="py-32 px-6 bg-white border-b border-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black font-heading mb-8"
          >
            AvyoraOfficial is a modern growth partner.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-500 leading-relaxed"
          >
            Providing end-to-end solutions including website development, social media management, influencer collaborations, and on-ground marketing activities. We bridge the gap between digital excellence and physical presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {icons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ rotateY: 360, scale: 1.1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center mb-6 transform-style-3d border border-neutral-50"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold font-heading">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
