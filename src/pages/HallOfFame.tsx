import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';
import FlyingChild from '../components/FlyingChild';

const topAchievers = [
  {
    name: 'Arjun Patel',
    achievements: 25,
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Priya Sharma',
    achievements: 23,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Rahul Verma',
    achievements: 20,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
];

export default function HallOfFame() {
  return (
    <div className="p-8 relative">
      <FlyingChild className="absolute top-10 right-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-white">Hall of Fame</h1>
        <p className="text-lg text-white/80">Celebrating our top achievers</p>
      </motion.div>

      <div className="flex justify-center items-end space-x-8 mb-16">
        {topAchievers.map((achiever, index) => {
          const isCenter = index === 0;
          const height = isCenter ? 'h-80' : 'h-64';
          
          return (
            <motion.div
              key={achiever.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative ${height} w-64 bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden`}
            >
              {isCenter && <Trophy className="absolute top-4 right-4 text-yellow-400" size={24} />}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <img
                src={achiever.image}
                alt={achiever.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{achiever.name}</h3>
                <div className="flex items-center justify-center space-x-2">
                  <Star className="text-yellow-400" size={16} />
                  <span>{achiever.achievements} Achievements</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white"
          >
            <div className="flex items-center space-x-4">
              <img
                src={`https://images.unsplash.com/photo-${1500000000000 + index}?auto=format&fit=crop&w=150&q=80`}
                alt="Student"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">Outstanding Achievement</h3>
                <p className="text-sm opacity-80">in Academic Excellence</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}