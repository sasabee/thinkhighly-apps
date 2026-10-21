'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-ink relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
            Let&apos;s Create Your Website
          </h2>
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us about your wedding, party or business. We&apos;ll come back to you with
            ideas and a quote. No jargon, no stress.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.div
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/contact" className="bg-white text-ink px-8 py-4 rounded-full font-medium hover:bg-stone-200 transition-colors duration-200 flex items-center space-x-2 group">
                <span>Get a Quote</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
            
            <motion.div
              whileTap={{ scale: 0.98 }}
            >
              <a href="mailto:info@thinkhighlyapps.co.za" className="border border-stone-600 text-white px-8 py-4 rounded-full font-medium hover:border-white transition-colors duration-200 flex items-center space-x-2">
                <Mail size={20} />
                <span>Email Us</span>
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 border border-stone-700"
            >
              <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-stone-400 text-sm mb-2">Get a quote within 24 hours</p>
              <a href="mailto:info@thinkhighlyapps.co.za" className="text-white hover:text-stone-300 underline-offset-4 hover:underline transition-colors">
                info@thinkhighlyapps.co.za
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 border border-stone-700"
            >
              <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Based in Pretoria</h3>
              <p className="text-stone-400 text-sm mb-2">Working with clients across South Africa</p>
              <Link href="/contact" className="text-white hover:text-stone-300 underline-offset-4 hover:underline transition-colors">
                Send us a message
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
