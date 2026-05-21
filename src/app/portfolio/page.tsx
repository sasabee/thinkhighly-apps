'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="min-h-[85vh] bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white flex items-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                <span className="text-sm font-medium">
                   Portfolio Launching Soon
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Our Portfolio is
                <span className="block bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </h1>

              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
                We’re currently building a showcase of our latest work,
                innovative solutions, and success stories.
                Check back soon to see how ThinkHighly Apps is helping
                businesses transform digitally.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold mb-2">
                    Mobile Apps
                  </h3>
                  <p className="text-gray-300">
                    Android & iOS app development
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold mb-2">
                    Web Solutions
                  </h3>
                  <p className="text-gray-300">
                    Modern websites and platforms
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold mb-2">
                    AI & Automation
                  </h3>
                  <p className="text-gray-300">
                    Smart business solutions
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300"
                >
                  Start Your Project
                </a>

                <a
                  href="https://wa.me/27676594016"
                  target="_blank"
                  className="border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}