'use client';

import { motion } from 'framer-motion';
import { Check, Heart, Store, ShieldCheck } from 'lucide-react';

const featureGroups = [
  {
    icon: Heart,
    title: 'For Weddings & Celebrations',
    features: [
      'RSVP form so guests can confirm online',
      'Countdown to the big day',
      'Photo gallery and guest photo uploads',
      'Venue map and directions',
      'Programme and timeline of the day',
      'Gift registry or banking details',
      'Accommodation and travel tips for guests',
      'Private, password-protected pages',
    ],
  },
  {
    icon: Store,
    title: 'For Small Businesses',
    features: [
      'Online bookings and appointments',
      'Online shop with card payments (e.g. PayFast, Yoco)',
      'Menu, price list or product catalogue',
      'Click-to-WhatsApp and call buttons',
      'Contact and quote request forms',
      'Customer reviews and testimonials',
      'Opening hours and Google Maps location',
      'Show up when people search on Google',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Included With Every Website',
    features: [
      'Looks great on phones, tablets and computers',
      'Your own web address (e.g. yourname.co.za)',
      'Professional email (e.g. hello@yourname.co.za)',
      'Secure padlock (SSL) for your visitors',
      'Hosting, so your website stays online',
      'Links to Facebook, Instagram and TikTok',
      'Fast loading, even on mobile data',
      'Help with updates whenever you need changes',
    ],
  },
];

export default function WebsiteFeatures() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Features</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight mb-5">
            What your website can do
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Choose the features you need and we&apos;ll build them in. Not sure what you need?
            Just tell us what you want your website to do and we&apos;ll suggest the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featureGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-stone-200"
            >
              <div className="w-12 h-12 bg-brand-soft rounded-xl flex items-center justify-center mb-6">
                <group.icon className="text-brand" size={22} />
              </div>
              <h3 className="font-display text-2xl font-medium text-ink mb-6">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 pb-3 border-b border-stone-100 last:border-0 last:pb-0">
                    <Check className="text-brand shrink-0 mt-0.5" size={18} />
                    <span className="text-stone-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
