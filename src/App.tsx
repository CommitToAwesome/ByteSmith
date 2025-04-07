import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import Achievements from './pages/Achievements';
import Upload from './pages/Upload';
import HallOfFame from './pages/HallOfFame';
import CertificateVault from './pages/CertificateVault';
import Settings from './pages/Settings';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/hall-of-fame" element={<HallOfFame />} />
              <Route path="/certificate-vault" element={<CertificateVault />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </AnimatePresence>
        <Chatbot />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App