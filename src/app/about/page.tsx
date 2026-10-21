'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const facts = [
  { label: 'Founded', value: '2026' },
  { label: 'Based in', value: 'Pretoria' },
  { label: 'Serving', value: 'All of South Africa' },
  { label: 'Registration', value: '2026/370706/07' },
];

const focusAreas = ['Weddings & events', 'Small businesses', 'Apps & systems'];

const pillars = [
  {
    title: 'Mission',
    text: 'To give every person and business, big or small, a beautiful website that works for them, without the stress or the jargon.',
  },
  {
    title: 'Vision',
    text: 'To be the most trusted digital partner in Africa, known for care, reliability and work our clients are proud to share.',
  },
];

const values = ['Integrity', 'Excellence', 'Innovation', 'Collaboration', 'Clients first'];

const differences = [
  {
    title: 'We speak your language',
    text: 'No tech terms, no confusion. We explain everything simply and guide you through each step.',
  },
  {
    title: 'Fresh, modern design',
    text: 'Our young, creative team brings new ideas to every project, so your website feels current and personal.',
  },
  {
    title: 'Quality you can rely on',
    text: 'Every website is tested on phones, tablets and computers before it goes live, so your visitors get the best experience.',
  },
  {
    title: 'A partner for the long run',
    text: 'We stay with you after launch, making updates and adding features like bookings or an online shop as you grow.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="bg-stone-50 pt-32 lg:pt-40 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-6">About us</p>
              <h1 className="font-display text-5xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tight mb-6">
                We make getting online simple, personal and beautiful.
              </h1>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-xl">
                ThinkHighly Apps is a South African digital studio. We design websites for life&apos;s big
                moments, like weddings and birthdays, and for the small businesses that keep our communities going.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl bg-ink text-white p-10 md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 mb-8">How we work</p>
                <blockquote className="font-display text-3xl md:text-4xl leading-snug mb-8">
                  &ldquo;Every website we build starts with a conversation, not a template.&rdquo;
                </blockquote>
                <p className="text-stone-400 mb-10">The ThinkHighly Apps team</p>
                <div className="grid grid-cols-3 gap-4 border-t border-stone-700 pt-8">
                  {focusAreas.map((area) => (
                    <div key={area} className="text-sm text-stone-300">
                      <Check className="text-white mb-2" size={18} />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 hidden md:block bg-white border border-stone-200 shadow-xl rounded-2xl px-5 py-3">
                <span className="text-sm font-medium text-ink">Proudly South African</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-200">
            {facts.map((fact) => (
              <div key={fact.label} className="py-8 px-4 md:px-8 first:pl-0">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500 mb-2">{fact.label}</div>
                <div className="font-display text-xl md:text-2xl text-ink">{fact.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Our story</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight">
                Why we started
              </h2>
            </motion.div>
            <motion.div {...fadeUp} className="lg:col-span-8 space-y-6 text-lg text-stone-600 leading-relaxed">
              <p className="font-display text-2xl md:text-3xl text-ink leading-snug">
                We believe everyone deserves a great website, not only big companies with big budgets.
              </p>
              <p>
                ThinkHighly Apps was founded to help people and businesses turn their ideas into something real online.
                Too often, getting a website feels confusing and expensive. We wanted to change that.
              </p>
              <p>
                Today we build wedding and event websites, business websites, online shops, mobile apps and simple
                business systems, each one designed around the people who will use it.
              </p>
              <p>
                Whether it&apos;s a couple sharing their big day or a bakery taking orders online, our goal is the same:
                a website that looks beautiful, works on every phone and makes life easier.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">What guides us</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight">
                Our mission, vision and values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-t-2 border-ink pt-6"
                >
                  <h3 className="font-display text-3xl font-medium text-ink mb-4">{pillar.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{pillar.text}</p>
                </motion.div>
              ))}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border-t-2 border-ink pt-6"
              >
                <h3 className="font-display text-3xl font-medium text-ink mb-4">Values</h3>
                <ul className="space-y-2">
                  {values.map((value) => (
                    <li key={value} className="flex items-center gap-3 text-stone-700">
                      <Check className="text-brand shrink-0" size={18} />
                      {value}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Why ThinkHighly</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight">
                What makes us different
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
              {differences.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 md:p-10"
                >
                  <span className="font-display text-4xl text-stone-300">0{index + 1}</span>
                  <h3 className="font-display text-2xl font-medium text-ink mt-4 mb-3">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-ink">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
              Let&apos;s build something you&apos;ll be proud to share
            </h2>
            <p className="text-lg text-stone-300 leading-relaxed mb-10">
              Tell us about your event or business and we&apos;ll come back to you with ideas and a quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-ink px-8 py-4 rounded-full font-medium hover:bg-stone-200 transition-colors inline-flex items-center justify-center gap-2 group">
                Get a Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link href="/#examples" className="border border-stone-600 text-white px-8 py-4 rounded-full font-medium hover:border-white transition-colors inline-flex items-center justify-center">
                See Examples
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
