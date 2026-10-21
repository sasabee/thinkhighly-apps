'use client';

import { motion } from 'framer-motion';
import { Smartphone, Monitor, Palette, Cpu, Database, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Monitor,
    title: 'Business Websites',
    description: 'A professional online home where customers can find you, see what you offer and get in touch.',
    bestFor: 'Shops, salons, restaurants, churches, NGOs'
  },
  {
    icon: ShoppingBag,
    title: 'Online Shops',
    description: 'Sell your products online and get paid by card, EFT or SnapScan, day or night.',
    bestFor: 'Clothing, crafts, food, beauty products'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Your own app that customers can download on Android and iPhone.',
    bestFor: 'Ordering, loyalty rewards, bookings'
  },
  {
    icon: Palette,
    title: 'Logos & Branding',
    description: 'A logo, colours and a look that make your business or event stand out.',
    bestFor: 'New businesses and fresh starts'
  },
  {
    icon: Database,
    title: 'Business Systems',
    description: 'Simple tools to keep track of bookings, stock, staff or clients, built around how you work.',
    bestFor: 'Growing businesses leaving paper and Excel behind'
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Let technology handle repetitive work, like answering common questions or sending reminders.',
    bestFor: 'Busy teams that want to save time'
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Services</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight mb-5">
              More ways we can help
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Ready to grow? We also build online shops, apps and tools that make running your business easier.
            </p>
          </div>
          <Link
            href="/services"
            className="shrink-0 inline-flex items-center text-ink font-medium border-b border-ink pb-1 hover:text-brand hover:border-brand transition-colors"
          >
            View all services
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 group"
            >
              <service.icon className="text-brand mb-6" size={28} strokeWidth={1.5} />
              <h3 className="font-display text-2xl font-medium text-ink mb-3">
                {service.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="text-sm text-stone-500">
                Great for: {service.bestFor}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
