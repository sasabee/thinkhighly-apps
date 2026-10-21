'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, CalendarCheck, Heart } from 'lucide-react';
import Link from 'next/link';
import { BrowserFrame, WeddingPreview } from '@/components/sections/WebsiteExamples';

const highlights = ['No tech skills needed', 'Looks great on every phone', 'Friendly local support'];

const audiences = ['Weddings', 'Birthdays & Parties', 'Restaurants & Cafés', 'Salons & Beauty', 'Shops & Retail', 'Churches & NGOs'];

export default function HeroSection() {
  return (
    <section className="relative bg-stone-50 pt-28 lg:pt-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center pb-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-6">
            Website design · South Africa
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tight mb-6">
            Websites for your celebrations and your business.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-10 max-w-xl">
            From wedding RSVPs to online bookings for your salon, we design and build
            beautiful websites for you. You tell us what you want. We take care of the rest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/contact" className="bg-ink text-white px-8 py-4 rounded-full font-medium hover:bg-stone-700 transition-colors duration-200 inline-flex items-center justify-center gap-2 group">
              Get a Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link href="#examples" className="border border-stone-300 text-ink px-8 py-4 rounded-full font-medium hover:border-ink transition-colors duration-200 inline-flex items-center justify-center">
              See Examples
            </Link>
          </div>

          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
                <Check className="text-brand" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <BrowserFrame url="thandiandsipho.co.za">
            <WeddingPreview eager />
          </BrowserFrame>

          <div className="absolute -left-8 -bottom-8 bg-white rounded-2xl shadow-xl border border-stone-200 p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center">
              <CalendarCheck className="text-brand" size={20} />
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">New RSVP</div>
              <div className="text-xs text-stone-500">Nomsa is coming, plus 1</div>
            </div>
          </div>

          <div className="absolute -right-4 -top-6 bg-white rounded-2xl shadow-xl border border-stone-200 px-4 py-3 flex items-center gap-2">
            <Heart className="text-rose-400 fill-rose-400" size={16} />
            <span className="text-sm font-medium text-ink">124 guests confirmed</span>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row md:items-center gap-4">
          <span className="text-sm font-medium text-stone-500 shrink-0">We build websites for</span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {audiences.map((audience) => (
              <span key={audience} className="font-display text-lg text-ink">{audience}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
