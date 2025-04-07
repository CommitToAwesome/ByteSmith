import React from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Lock, Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-white"
      >
        Settings
      </motion.h1>

      <div className="max-w-2xl space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white"
        >
          <div className="flex items-center space-x-4 mb-6">
            <User size={24} />
            <h2 className="text-xl font-semibold">Profile Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Display Name</label>
              <input type="text" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea className="input-field min-h-[100px]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Bell size={24} />
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox" />
              <span>Email notifications</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox" />
              <span>Achievement milestones</span>
            </label>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Lock size={24} />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
          
          <button className="text-blue-400 hover:text-blue-300">
            Change Password
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Globe size={24} />
            <h2 className="text-xl font-semibold">Preferences</h2>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
              <span>Theme</span>
            </div>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {theme === 'light' ? 'Light' : 'Dark'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}