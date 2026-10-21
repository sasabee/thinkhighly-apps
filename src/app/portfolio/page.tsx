'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { BrowserFrame, WeddingPreview, BirthdayPreview, BakeryPreview, SalonPreview } from '@/components/sections/WebsiteExamples';

type Category = 'Celebrations' | 'Businesses';

const projects: {
  title: string;
  category: Category;
  type: string;
  url: string;
  description: string;
  highlights: string[];
  preview: ReactNode;
}[] = [
  {
    title: 'Thandi & Sipho',
    category: 'Celebrations',
    type: 'Wedding website',
    url: 'thandiandsipho.co.za',
    description: 'A warm, elegant wedding site in cream and deep brown, with the day’s programme, venue details and dress code in one place.',
    highlights: ['RSVP', 'Programme of the day', 'Dress code', 'Venue details'],
    preview: <WeddingPreview eager />,
  },
  {
    title: 'Lerato’s Thirtieth',
    category: 'Celebrations',
    type: 'Birthday invitation',
    url: 'lerato30.co.za',
    description: 'A glamorous black-and-gold invite that guests can reply to, with a shared photo wall for after the party.',
    highlights: ['Guest RSVPs', 'Event details', 'Guest photo uploads'],
    preview: <BirthdayPreview />,
  },
  {
    title: 'Mama’s Kitchen',
    category: 'Businesses',
    type: 'Bakery website',
    url: 'mamaskitchen.co.za',
    description: 'A homely bakery site with today’s menu and prices, opening hours, directions and ordering on WhatsApp.',
    highlights: ['Menu & prices', 'WhatsApp orders', 'Opening hours', 'Directions'],
    preview: <BakeryPreview />,
  },
  {
    title: 'Glow Beauty Studio',
    category: 'Businesses',
    type: 'Salon booking website',
    url: 'glowbeauty.co.za',
    description: 'A sleek, dark salon site where clients browse services and prices, pick a time slot and book online.',
    highlights: ['Online booking', 'Price list', 'Client reviews'],
    preview: <SalonPreview />,
  },
];

const filters: ('All' | Category)[] = ['All', 'Celebrations', 'Businesses'];

const alsoBuild = ['Online shops', 'Mobile apps', 'Logos & branding', 'Business systems', 'AI & automation'];

export default function Portfolio() {
  const [filter, setFilter] = useState<'All' | Category>('All');
  const visible = projects.filter((project) => filter === 'All' || project.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="bg-stone-50 pt-32 lg:pt-40 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-6">Portfolio</p>
              <h1 className="font-display text-5xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tight mb-6">
                Designs made to be shared.
              </h1>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                A selection of sample designs that show the style and care you can expect from us.
                Hover over a design to explore the full page.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
              <div className="flex gap-2" role="tablist" aria-label="Filter designs">
                {filters.map((option) => (
                  <button
                    key={option}
                    role="tab"
                    aria-selected={filter === option}
                    onClick={() => setFilter(option)}
                    className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                      filter === option ? 'bg-ink text-white border-ink' : 'border-stone-300 text-stone-600 hover:border-ink hover:text-ink'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <p className="text-sm text-stone-500">
                Sample designs · Client case studies coming soon
              </p>
            </div>

            <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
              <AnimatePresence mode="popLayout">
                {visible.map((project) => (
                  <motion.article
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4 }}
                  >
                    <BrowserFrame url={project.url}>{project.preview}</BrowserFrame>
                    <div className="mt-6">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-stone-500 mb-2">
                        <span>{project.type}</span>
                        <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                        <span className="text-brand">{project.category}</span>
                      </div>
                      <h2 className="font-display text-3xl font-medium text-ink mb-3">{project.title}</h2>
                      <p className="text-stone-600 leading-relaxed mb-4">{project.description}</p>
                      <ul className="flex flex-wrap gap-x-5 gap-y-2">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-center gap-1.5 text-sm text-stone-700">
                            <Check className="text-brand" size={15} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <section className="bg-stone-50 border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="text-sm font-medium text-stone-500 shrink-0">We also build</span>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {alsoBuild.map((item) => (
                  <span key={item} className="font-display text-lg text-ink">{item}</span>
                ))}
              </div>
            </div>
            <Link href="/services" className="shrink-0 inline-flex items-center text-ink font-medium border-b border-ink pb-1 hover:text-brand hover:border-brand transition-colors">
              View all services
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </section>

        <section className="py-24 bg-ink">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
              Your website could be next
            </h2>
            <p className="text-lg text-stone-300 leading-relaxed mb-10">
              Like what you see? Tell us about your event or business and we&apos;ll design something just for you.
            </p>
            <Link href="/contact" className="bg-white text-ink px-8 py-4 rounded-full font-medium hover:bg-stone-200 transition-colors inline-flex items-center justify-center gap-2 group">
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
