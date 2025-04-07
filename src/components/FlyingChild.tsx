import React from 'react';
import { motion } from 'framer-motion';

interface FlyingChildProps {
  className?: string;
}

export default function FlyingChild({ className = '' }: FlyingChildProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="relative w-40 h-40"
        whileHover={{ scale: 1.05 }}
      >
        {/* Silhouette */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50 20 C60 20, 80 40, 80 60 C80 80, 60 90, 50 90 C40 90, 20 80, 20 60 C20 40, 40 20, 50 20"
              fill="#2B4C7E"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Wings */}
        <motion.div
          className="absolute -left-12 top-1/2 w-16 h-32"
          animate={{
            rotateY: [0, 45, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-l-full transform -translate-y-1/2" />
        </motion.div>
        <motion.div
          className="absolute -right-12 top-1/2 w-16 h-32"
          animate={{
            rotateY: [0, -45, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-l from-blue-400/50 to-purple-400/50 rounded-r-full transform -translate-y-1/2" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}