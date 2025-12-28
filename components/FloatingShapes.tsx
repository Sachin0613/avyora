
import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Circle 1 */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 -left-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"
      />
      {/* Circle 2 */}
      <motion.div
        animate={{
          y: [0, 60, 0],
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-40 -right-20 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl"
      />
      {/* 3D-ish Square */}
      <motion.div
        animate={{
          rotateX: [45, 90, 45],
          rotateY: [45, 90, 45],
          x: [-100, 100, -100],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/4 w-32 h-32 border border-blue-200/30 rounded-2xl opacity-40 transform-style-3d"
      />
    </div>
  );
};

export default FloatingShapes;
