'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Smartphone,
  MonitorSmartphone,
  Bot,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';

export default function PortfolioShowcase() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-5 py-2 text-sm font-medium text-purple-700 mb-6">
            <Briefcase size={16} />
            Portfolio Launching Soon
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio is
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are currently building a showcase of our latest
            work, innovative solutions, and digital products.
            Soon you will be able to explore how ThinkHighly Apps
            helps businesses transform through technology.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Mobile Apps */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-purple-100 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Smartphone
                className="text-white"
                size={30}
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Mobile Apps
            </h3>

            <p className="text-gray-600 leading-relaxed">
              High-performance Android and iOS applications
              designed for scale, usability, and business
              growth.
            </p>
          </motion.div>

          {/* Web Solutions */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-purple-100 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <MonitorSmartphone
                className="text-white"
                size={30}
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Web Solutions
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Modern websites, business systems, and digital
              platforms tailored to your organisation’s
              needs.
            </p>
          </motion.div>

          {/* AI & Automation */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-purple-100 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Bot
                className="text-white"
                size={30}
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              AI & Automation
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Smart automation and AI-powered solutions
              built to improve efficiency and streamline
              operations.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            View Portfolio Page
            <ArrowRight
              className="ml-2"
              size={20}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}