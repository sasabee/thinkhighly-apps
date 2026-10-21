'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ShoppingBag, Smartphone, Palette, Database, Cpu, Cloud, Link2, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const websiteServices = [
  {
    eyebrow: 'Weddings',
    title: 'Wedding websites',
    description: 'One beautiful place for your guests to find everything about your big day, and to let you know they are coming.',
    image: '/services/wedding-table.jpg',
    imageAlt: 'Elegant wedding table with candles and dried flowers',
    imagePosition: 'object-center',
    features: ['Online RSVP and guest list', 'Countdown to the big day', 'Venue map and directions', 'Programme for the day', 'Photo gallery', 'Gift registry or banking details'],
  },
  {
    eyebrow: 'Birthdays & parties',
    title: 'Party & event websites',
    description: 'A stylish invite for birthdays, baby showers, anniversaries, reunions and church events that guests can open on any phone.',
    image: '/services/party-table.jpg',
    imageAlt: 'Party table set with flowers, gold plates and balloons',
    imagePosition: 'object-[50%_70%]',
    features: ['Guest RSVPs', 'Date, time and dress code', 'Directions to the venue', 'Guest photo uploads', 'Easy sharing on WhatsApp', 'Private, password-protected pages'],
  },
  {
    eyebrow: 'Small businesses',
    title: 'Business websites',
    description: 'A professional online home that helps new customers find you, trust you and get in touch.',
    image: '/services/street-food.jpg',
    imageAlt: 'Woman cooking in large three-legged pots outdoors in the Eastern Cape',
    imagePosition: 'object-[55%_center]',
    features: ['Menu, price list or catalogue', 'Click-to-WhatsApp and contact forms', 'Opening hours and Google Maps', 'Customer reviews', 'Found on Google searches', 'Your own .co.za address and email'],
  },
  {
    eyebrow: 'Salons & services',
    title: 'Booking websites',
    description: 'Let customers see your services and book an appointment any time of day, even while you are busy with a client.',
    image: '/services/salon-chairs.jpg',
    imageAlt: 'Row of salon chairs beside wash basins',
    imagePosition: 'object-center',
    features: ['Online bookings and appointments', 'Services and prices', 'Before and after gallery', 'Booking reminders', 'Reviews from happy clients', 'Works on every phone'],
  },
];

const moreServices = [
  { icon: ShoppingBag, title: 'Online shops', description: 'Sell your products online and get paid by card or EFT, day or night.' },
  { icon: Smartphone, title: 'Mobile apps', description: 'Your own app on Android and iPhone for ordering, loyalty rewards or bookings.' },
  { icon: Palette, title: 'Logos & branding', description: 'A logo, colours and a look that make your business or event stand out.' },
  { icon: Database, title: 'Business systems', description: 'Simple tools to manage bookings, stock, staff or clients, built around how you work.' },
  { icon: Cpu, title: 'AI & automation', description: 'Let technology handle repetitive work, like answering common questions or sending reminders.' },
  { icon: Cloud, title: 'Cloud hosting & setup', description: 'Fast, secure hosting so your website and systems stay online and grow with you.' },
  { icon: Link2, title: 'Blockchain solutions', description: 'Secure, transparent record keeping and smart contracts for businesses that need them.' },
];

const steps = [
  { title: 'Chat', description: 'You tell us about your event or business and what you would like your website to do.' },
  { title: 'Design', description: 'We design a look that fits you, using your photos, colours and words.' },
  { title: 'Build & review', description: 'We build your website and you check it. We make changes until you are happy.' },
  { title: 'Launch & support', description: 'We put it online, give you the link to share and stay on hand for updates.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function Services() {
  return (
    <div className="min-h-screen">
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-6">Services</p>
              <h1 className="font-display text-5xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tight mb-6">
                Everything you need to get online, and to grow.
              </h1>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-8">
                From a wedding website your guests will love to an online shop for your business,
                we design, build and look after it for you.
              </p>
              <div className="flex flex-wrap gap-3">
                {[['Websites', '#websites'], ['More services', '#more'], ['How we work', '#process']].map(([label, href]) => (
                  <a key={href} href={href} className="border border-stone-300 text-ink text-sm font-medium px-4 py-2 rounded-full hover:border-ink transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="websites" className="py-24 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {websiteServices.map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeUp}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className={`object-cover ${service.imagePosition}`}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-3">{service.eyebrow}</p>
                  <h2 className="font-display text-4xl font-medium text-ink tracking-tight mb-4">{service.title}</h2>
                  <p className="text-lg text-stone-600 leading-relaxed mb-8">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-stone-700">
                        <Check className="text-brand shrink-0 mt-0.5" size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center text-ink font-medium border-b border-ink pb-1 hover:text-brand hover:border-brand transition-colors">
                    Get a quote
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="more" className="py-24 bg-stone-50 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">More services</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight mb-5">
                Ready to grow? We build that too.
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Start with a website, then add an online shop, an app or smarter tools whenever you are ready.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
              {moreServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                  className="bg-white p-8"
                >
                  <service.icon className="text-brand mb-6" size={28} strokeWidth={1.5} />
                  <h3 className="font-display text-2xl font-medium text-ink mb-3">{service.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
              <div className="bg-ink p-8 flex flex-col justify-between">
                <div>
                  <MessageCircle className="text-white mb-6" size={28} strokeWidth={1.5} />
                  <h3 className="font-display text-2xl font-medium text-white mb-3">Something else in mind?</h3>
                  <p className="text-stone-300 leading-relaxed mb-6">Tell us what you need and we&apos;ll find a way to build it.</p>
                </div>
                <Link href="/contact" className="inline-flex items-center text-white font-medium hover:text-stone-300 transition-colors">
                  Talk to us
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="py-24 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">How we work</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight mb-5">
                A simple process from start to finish
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                No tech knowledge needed. We guide you through every step.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-t-2 border-ink pt-6"
                >
                  <span className="font-display text-4xl text-stone-300">0{index + 1}</span>
                  <h3 className="font-display text-2xl font-medium text-ink mt-4 mb-3">{step.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-ink">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
              Ready to get started?
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
