'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, Clock, Shield, Users, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle,
    title: 'Affordable Solutions',
    description: 'Competitive pricing without compromising on quality'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Event coming up soon? We can get your website live quickly'
  },
  {
    icon: Zap,
    title: 'No Tech Skills Needed',
    description: 'We handle everything: your web address, hosting, design and updates'
  },
  {
    icon: Users,
    title: 'Youth-Driven Innovation',
    description: 'A young, creative team with fresh, modern designs'
  },
  {
    icon: Shield,
    title: 'Reliable Support',
    description: 'Need a change? Just send us a message and we\'ll sort it out'
  },
  {
    icon: TrendingUp,
    title: 'Grows With You',
    description: 'Start simple and add bookings, a shop or an app later'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Why ThinkHighly</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight mb-5">
            Why people choose us
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Friendly people who explain things simply and build websites you&apos;ll be proud to share.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 shrink-0 bg-brand-soft rounded-xl flex items-center justify-center">
                <reason.icon className="text-brand" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink mb-1">
                  {reason.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-stone-50 border border-stone-200 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-display text-3xl font-medium text-ink mb-4">
                Ready to get online?
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Whether you&apos;re planning a wedding, throwing a party or growing a business,
                we&apos;ll help you get a website that works for you.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-stone-500 mb-4">
                Who we build for
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {['Weddings', 'Birthdays & Parties', 'Restaurants & Cafés', 'Salons & Beauty', 'Shops & Retail', 'Churches & NGOs', 'Healthcare', 'Education'].map((industry) => (
                  <div key={industry} className="flex items-center gap-2">
                    <CheckCircle className="text-brand shrink-0" size={16} />
                    <span className="text-stone-700 text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
