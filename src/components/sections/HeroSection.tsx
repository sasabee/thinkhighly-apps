'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: '/hero/business.jpg',
    alt: 'Smiling business owner at her studio desk beside a Support Small Businesses sign',
    position: 'object-[62%_center]',
    background: '#7a7068',
    eyebrow: 'Small business websites',
    title: 'Your business, open around the clock',
    script: 'made to impress',
    text: 'Professional websites that help new customers find you, trust you and get in touch, even while you sleep.',
  },
  {
    image: '/hero/wedding.jpg',
    alt: 'Smiling bride holding a bouquet of red and white roses',
    position: 'object-[50%_18%]',
    background: '#8c7b70',
    eyebrow: 'Wedding websites',
    title: 'Your love story, beautifully told',
    script: 'made to be shared',
    text: 'Elegant wedding websites with RSVPs, venue details and your story, all in one place for your guests.',
  },
  {
    image: '/hero/celebration.jpg',
    alt: 'Woman in a sparkly dress beside gold balloons',
    position: 'object-[62%_22%]',
    background: '#3b2a22',
    eyebrow: 'Birthdays & celebrations',
    title: 'Celebrate in style',
    script: "you're invited",
    text: 'Stylish invitations for birthdays, baby showers and parties that guests can open, reply to and share.',
  },
];

const audiences = ['Weddings', 'Birthdays & Parties', 'Restaurants & Cafés', 'Salons & Beauty', 'Shops & Retail', 'Churches & NGOs'];

const SLIDE_MS = 6000;

function Ornament() {
  return (
    <svg viewBox="0 0 240 24" className="w-48 h-5 text-white/70" fill="none" aria-hidden="true">
      <path d="M0 12h96" stroke="currentColor" strokeWidth="1" />
      <path d="M144 12h96" stroke="currentColor" strokeWidth="1" />
      <path
        d="M120 19c-6-4.5-11-8.2-11-12.2 0-2.6 2-4.6 4.6-4.6 2.2 0 3.6 1.2 4.4 2.6.8-1.4 2.2-2.6 4.4-2.6 2.6 0 4.6 2 4.6 4.6 0 4-5 7.7-11 12.2z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="102" cy="12" r="1.6" fill="currentColor" />
      <circle cx="138" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const go = useCallback((index: number) => setActive((index + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setTimeout(() => go(active + 1), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [active, paused, reduceMotion, go]);

  return (
    <section className="relative">
      <div
        className="relative h-[calc(100svh-4rem)] min-h-[600px] max-h-[820px] mt-16 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="What we build"
      >
        {slides.map((slide, index) => {
          const isActive = index === active;
          const Heading = index === 0 ? 'h1' : 'h2';
          return (
            <motion.div
              key={slide.image}
              className={`absolute inset-0 ${isActive ? 'z-10' : 'pointer-events-none'}`}
              style={{ backgroundColor: slide.background }}
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1 }}
              aria-hidden={!isActive}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <motion.div
                className="absolute inset-y-0 right-0 w-full md:w-[64%] md:[mask-image:linear-gradient(to_right,transparent,black_38%)]"
                initial={false}
                animate={{ scale: isActive ? 1 : 1.06 }}
                transition={{ duration: 6.5, ease: 'easeOut' }}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 768px) 64vw, 100vw"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className={`object-cover ${slide.position}`}
                />
              </motion.div>
              {/* On phones the photo sits behind the text, so tint it for legibility */}
              <div className="absolute inset-0 md:hidden" style={{ backgroundColor: `${slide.background}b3` }}></div>

              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <motion.div
                  className="w-full md:w-1/2 lg:w-[46%] text-white"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
                  transition={{ duration: 0.8, delay: isActive ? 0.3 : 0 }}
                >
                  <Ornament />
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/75">{slide.eyebrow}</p>
                  <Heading className="mt-4 font-elegant font-light text-5xl md:text-6xl leading-[1.05]">
                    {slide.title}
                  </Heading>
                  <p className="font-script text-4xl md:text-5xl text-[#f6e7cf] mt-2">{slide.script}</p>
                  <div className="my-6 w-32 border-t border-dashed border-white/50"></div>
                  <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-md mb-8">{slide.text}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      tabIndex={isActive ? 0 : -1}
                      className="bg-white text-ink px-7 py-3.5 rounded-full font-medium hover:bg-stone-100 transition-colors inline-flex items-center justify-center gap-2 group"
                    >
                      Get a Quote
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                    <Link
                      href="/portfolio"
                      tabIndex={isActive ? 0 : -1}
                      className="border border-white/60 text-white px-7 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                    >
                      See Our Designs
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}

        <div className="absolute z-20 bottom-8 inset-x-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <button
            type="button"
            onClick={() => go(active - 1)}
            className="w-9 h-9 rounded-full border border-white/40 text-white/80 hover:text-white hover:border-white flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => go(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === active}
                className={`h-2 rounded-full transition-all duration-300 ${index === active ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(active + 1)}
            className="w-9 h-9 rounded-full border border-white/40 text-white/80 hover:text-white hover:border-white flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="border-b border-stone-200 bg-white">
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
