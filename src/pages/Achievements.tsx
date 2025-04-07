import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Book } from 'lucide-react';

const categories = [
  { icon: Trophy, label: 'Academic', color: 'from-yellow-400 to-yellow-600' },
  { icon: Medal, label: 'Sports', color: 'from-blue-400 to-blue-600' },
  { icon: Award, label: 'Co-curricular', color: 'from-green-400 to-green-600' },
  { icon: Book, label: 'Others', color: 'from-purple-400 to-purple-600' }
];

export default function Achievements() {
  return (
    <div className="p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-white"
      >
        My Achievements
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {categories.map(({ icon: Icon, label, color }) => (
          <motion.button
            key={label}
            whileHover={{ scale: 1.05 }}
            className={`relative overflow-hidden rounded-xl p-6 text-white bg-gradient-to-br ${color}`}
          >
            <Icon size={24} className="mb-2" />
            <h3 className="text-lg font-semibold">{label}</h3>
          </motion.button>
        ))}
      </div>

      <div className="grid gap-6">
        {[1, 2, 3].map((achievement) => (
          <motion.div
            key={achievement}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">First Prize in National Coding Competition</h3>
                <p className="text-sm opacity-80 mb-4">Achieved on March 15, 2024</p>
                <p className="mb-4">
                  Won first place in the national coding competition organized by Tech University.
                  Demonstrated exceptional problem-solving skills and algorithmic thinking.
                </p>
                <div className="flex items-center space-x-2">
                  <Trophy size={16} />
                  <span className="text-sm">Academic Achievement</span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=200&q=80"
                alt="Achievement"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}