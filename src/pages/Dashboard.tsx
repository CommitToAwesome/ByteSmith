import React from 'react';
import { motion } from 'framer-motion';
import FlyingChild from '../components/FlyingChild';
import { Award, Book, Medal, Trophy } from 'lucide-react';

const achievements = [
  { icon: Trophy, label: 'Academic Excellence', count: 12 },
  { icon: Medal, label: 'Sports Achievements', count: 5 },
  { icon: Award, label: 'Co-curricular', count: 8 },
  { icon: Book, label: 'Certifications', count: 15 }
];

export default function Dashboard() {
  return (
    <div className="p-8 relative min-h-screen">
      <FlyingChild className="absolute top-20 right-20" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl font-bold mb-8 text-white">Welcome Back, Student!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {achievements.map(({ icon: Icon, label, count }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white"
            >
              <Icon size={24} className="mb-2" />
              <h3 className="text-lg font-semibold">{label}</h3>
              <p className="text-2xl font-bold">{count}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white"
          >
            <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10">
                  <Trophy size={20} />
                  <div>
                    <h3 className="font-semibold">First Prize in Coding Competition</h3>
                    <p className="text-sm opacity-80">2 days ago</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white"
          >
            <h2 className="text-xl font-bold mb-4">Academic Progress</h2>
            <div className="space-y-4">
              {['CGPA: 9.2', 'Semester: 6th', 'Department Rank: 5'].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10">
                  <span>{item}</span>
                  <Book size={20} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}