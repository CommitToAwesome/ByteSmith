import React from 'react';
import { motion } from 'framer-motion';
import { AlignCenterVertical as Certificate, Download, Eye } from 'lucide-react';

const certificates = [
  {
    title: 'Web Development Certification',
    issuer: 'Tech Academy',
    date: 'March 2024',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&q=80'
  },
  {
    title: 'Machine Learning Fundamentals',
    issuer: 'AI Institute',
    date: 'February 2024',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=300&q=80'
  },
  {
    title: 'Leadership Excellence',
    issuer: 'Management School',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80'
  }
];

export default function CertificateVault() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-white">Certificate Vault</h1>
        <p className="text-white/80 mt-2">All your certifications in one place</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden"
          >
            <div className="aspect-[4/3]">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <Certificate className="mb-3" size={24} />
              <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
              <p className="text-sm opacity-80">{cert.issuer}</p>
              <p className="text-sm opacity-80">{cert.date}</p>
              
              <div className="flex items-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex items-center space-x-2 hover:text-blue-400">
                  <Eye size={16} />
                  <span>View</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-400">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}