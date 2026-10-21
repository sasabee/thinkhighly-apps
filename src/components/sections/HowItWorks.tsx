'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Palette, ThumbsUp, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Tell Us Your Idea',
    description: 'Email us or fill in our contact form. Tell us about your event or business in your own words. No tech knowledge needed.',
  },
  {
    icon: Palette,
    title: 'We Design It',
    description: 'Send us your photos, colours and details. We design a website that looks and feels like you.',
  },
  {
    icon: ThumbsUp,
    title: 'You Approve It',
    description: 'Have a look before anything goes live. Ask for changes until you\'re happy with it.',
  },
  {
    icon: Rocket,
    title: 'Share It With the World',
    description: 'We put your website online and give you a link to share with guests or customers.',
  },
];

export default function HowItWorks() {
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">How it works</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight mb-5">
            Four simple steps to your website
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Getting a website is easier than you think. We handle all the technical parts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-t-2 border-ink pt-6"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-4xl text-stone-300">0{index + 1}</span>
                <step.icon className="text-brand" size={24} />
              </div>
              <h3 className="font-display text-2xl font-medium text-ink mb-3">{step.title}</h3>
              <p className="text-stone-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
