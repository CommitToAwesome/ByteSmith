import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedSky from '../components/AnimatedSky';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedSky />
      
      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            {isLogin ? 'Welcome Back!' : 'Join the Journey'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input-field"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input-field"
                    required
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  className="input-field"
                />
                <select className="input-field" required>
                  <option value="">Select University/Institute</option>
                  {/* Add options */}
                </select>
                <select className="input-field" required>
                  <option value="">Select Program</option>
                  <option value="btech">B.Tech</option>
                  <option value="barch">B.Arch</option>
                  {/* Add more options */}
                </select>
                <select className="input-field" required>
                  <option value="">Select Field</option>
                  <option value="cse">Computer Science Engineering</option>
                  {/* Add more options */}
                </select>
                <select className="input-field" required>
                  <option value="">Select Year</option>
                  {[1, 2, 3, 4, 5].map(year => (
                    <option key={year} value={year}>Year {year}</option>
                  ))}
                </select>
              </>
            )}
            
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              required
            />
            
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="input-field"
                required
              />
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
          
          {isLogin && (
            <p className="text-center mt-4">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </p>
          )}
          
          <p className="text-center mt-4">
            {isLogin ? "Haven't registered yet? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:underline font-medium"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}