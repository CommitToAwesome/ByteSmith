import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  Trophy,
  Upload,
  Star,
  AlignCenterVertical as Certificate,
  Settings,
  LogOut
} from 'lucide-react';

const sidebarLinks = [
  { to: '/dashboard', icon: Home, label: 'Dashboard' },
  { to: '/achievements', icon: Trophy, label: 'My Achievements' },
  { to: '/upload', icon: Upload, label: 'Upload New Proof' },
  { to: '/hall-of-fame', icon: Star, label: 'Hall of Fame' },
  { to: '/certificate-vault', icon: Certificate, label: 'Certificate Vault' },
  { to: '/settings', icon: Settings, label: 'Settings' }
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white/10 backdrop-blur-lg text-white p-6 flex flex-col">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-2xl font-bold">Byte Smiths</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {sidebarLinks.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <NavLink to="/" className="sidebar-link mt-auto text-red-400 hover:text-red-300">
        <LogOut size={20} />
        <span>Logout</span>
      </NavLink>
    </div>
  );
}