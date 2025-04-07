import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import AnimatedSky from './AnimatedSky';

export default function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <button
        onClick={toggleTheme}
        className="theme-toggle"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      <div className="flex-1 relative">
        <AnimatedSky />
        <main className="relative z-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}