'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Smartphone, Monitor, Zap, Blocks } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-primary via-purple-800 to-brand-pink">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            ThinkHighly.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              Build Smarter.
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            We build modern apps, websites, and digital solutions for businesses, startups, and organizations.
          </motion.p>
           <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Your Company. Your Vision. Let's Make It Digital
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact" className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2 group">
              <span>Get a Quote</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-200 flex items-center space-x-2">
              <Play size={20} />
              <span>View Portfolio</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-pink to-brand-accent rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Smartphone className="text-white" size={24} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Mobile Apps</h3>
            <p className="text-gray-300 text-sm">Native and cross-platform mobile applications</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-pink rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Monitor className="text-white" size={24} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Web Solutions</h3>
            <p className="text-gray-300 text-sm">Modern websites and web applications</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-pink to-brand-accent rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">AI Solutions</h3>
            <p className="text-gray-300 text-sm">Cutting-edge AI and automation services</p>
          </div>
         <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="w-12 h-12 bg-gradient-to-r from-brand-pink to-brand-accent rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Blocks className="text-white" size={24} />
          </div>

          <h3 className="text-white font-semibold text-lg mb-2">
            Blockchain Solutions
          </h3>

          <p className="text-gray-300 text-sm">
            Secure blockchain and decentralized technology services
          </p>
        </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </motion.div>
      </div>
    </section>
  );
}
