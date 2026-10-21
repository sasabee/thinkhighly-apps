'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PartyPopper, Store, MapPin, Camera, CalendarCheck, MessageCircle, Star, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

const previewSizes = '(min-width: 1024px) 600px, 100vw';

// Mock browser window. On desktop the page inside slowly scrolls on hover; on touch screens it scrolls normally.
export function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="group/frame rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/10 border border-stone-200 bg-white">
      <div className="flex items-center gap-2 px-4 py-3 bg-stone-100 border-b border-stone-200">
        <span className="w-3 h-3 rounded-full bg-stone-300"></span>
        <span className="w-3 h-3 rounded-full bg-stone-300"></span>
        <span className="w-3 h-3 rounded-full bg-stone-300"></span>
        <div className="ml-3 flex-1 bg-white rounded-md px-3 py-1 text-xs text-stone-500 truncate">
          🔒 {url}
        </div>
      </div>
      <div className="relative h-[440px] overflow-y-auto lg:overflow-hidden">
        <div className="transition-transform duration-[6000ms] ease-in-out lg:group-hover/frame:translate-y-[calc(-100%+440px)]">
          {children}
        </div>
        <div className="hidden lg:flex absolute bottom-3 right-3 items-center gap-1 rounded-full bg-black/60 text-white text-[11px] px-3 py-1 backdrop-blur transition-opacity group-hover/frame:opacity-0">
          <ChevronDown size={12} /> Hover to explore
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ className = '' }: { className?: string }) {
  return (
    <div className={`text-center leading-none ${className}`}>
      <span className="block font-script text-4xl -mb-1">The</span>
      <span className="block font-elegant font-light text-4xl uppercase tracking-wide">Details</span>
    </div>
  );
}

export function WeddingPreview({ eager = false }: { eager?: boolean }) {
  return (
    <div className="bg-[#efe3d2] text-[#3b2116]">
      <div className="relative h-[440px]">
        <Image src="/examples/wedding.jpg" alt="Bride and groom laughing outdoors" fill sizes={previewSizes} loading={eager ? 'eager' : 'lazy'} className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a160d]/85 via-[#2a160d]/10 to-[#2a160d]/30"></div>
        <div className="absolute top-0 inset-x-0 flex justify-center gap-6 py-4 text-[10px] uppercase tracking-[0.3em] text-white/90">
          <span>Our Story</span><span>Details</span><span>RSVP</span><span>Gallery</span>
        </div>
        <div className="absolute bottom-0 inset-x-0 text-center pb-10 px-4 text-[#f5ead9]">
          <p className="font-script text-3xl mb-1">We&apos;re getting married</p>
          <h4 className="font-elegant font-light text-4xl sm:text-5xl uppercase tracking-[0.12em]">Thandi &amp; Sipho</h4>
          <p className="mt-3 text-[11px] uppercase tracking-[0.35em]">12 · 12 · 2026 &nbsp;|&nbsp; Stellenbosch</p>
        </div>
      </div>

      <div className="grid grid-cols-2 min-h-[340px]">
        <div className="relative overflow-hidden">
          <Image
            src="/examples/wedding.jpg"
            alt=""
            fill
            sizes={previewSizes}
            className="object-cover scale-[1.5] origin-[48%_30%] [mask-image:linear-gradient(to_right,black_60%,transparent)]"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4 py-10">
          <SectionTitle />
          <div className="mt-8 font-elegant text-2xl">10:00 – 12:00</div>
          <div className="text-xs mt-1">Ceremony</div>
          <div className="w-10 h-px bg-[#3b2116]/50 my-5"></div>
          <div className="font-elegant text-2xl">13:00 – 18:00</div>
          <div className="text-xs mt-1">Celebration at the Dlamini home</div>
        </div>
      </div>

      <div className="bg-[#5a3420] text-[#f3e6d4] text-center px-8 py-12 space-y-8">
        {[
          ['Ceremony', 'Grace Chapel, Stellenbosch'],
          ['Celebration', 'The Oak Garden, 14 Vineyard Road'],
          ['Dress Code', 'Traditional. Soft fabrics and flowy dresses, comfortable for warm weather and elegant for photos.'],
        ].map(([title, text]) => (
          <div key={title}>
            <h5 className="font-elegant text-3xl mb-2">{title}</h5>
            <p className="text-sm text-[#f3e6d4]/85 max-w-xs mx-auto leading-relaxed">{text}</p>
          </div>
        ))}
        <span className="inline-block border border-[#f3e6d4]/70 text-[11px] uppercase tracking-[0.3em] px-6 py-3">RSVP by 1 November</span>
      </div>
      <div className="bg-[#3b2116] text-[#f3e6d4]/70 text-center text-[10px] tracking-[0.3em] uppercase py-4">
        With love, Thandi &amp; Sipho
      </div>
    </div>
  );
}

export function BirthdayPreview() {
  return (
    <div className="bg-[#17110f] text-[#e6c88f]">
      <div className="relative h-[440px]">
        <Image src="/examples/birthday.jpg" alt="Pink and gold balloons" fill sizes={previewSizes} className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17110f]/30 via-[#17110f]/55 to-[#17110f]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/80 mb-3">You&apos;re invited to</p>
          <p className="font-script text-5xl text-[#f1d6a0] -mb-1">Lerato&apos;s</p>
          <h4 className="font-elegant font-light text-5xl sm:text-6xl uppercase tracking-[0.15em] text-white">Thirtieth</h4>
          <p className="mt-4 text-xs uppercase tracking-[0.35em] text-white/80">Saturday 15 March · 7PM</p>
          <span className="mt-8 bg-[#e6c88f] text-[#17110f] text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3">I&apos;m coming</span>
        </div>
      </div>

      <div className="px-8 py-12 text-center">
        <SectionTitle />
        <div className="mt-8 grid grid-cols-3 gap-4 text-[#f3e6d4]">
          {[
            ['When', 'Sat 15 March', '19:00 till late'],
            ['Where', 'The Rooftop', 'Maboneng, Joburg'],
            ['Dress code', 'All gold', 'Sparkle encouraged'],
          ].map(([label, line1, line2]) => (
            <div key={label}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#e6c88f] mb-2">{label}</div>
              <div className="font-elegant text-xl">{line1}</div>
              <div className="text-xs text-[#f3e6d4]/60">{line2}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#e6c88f]/20 px-8 py-10 text-center">
        <h5 className="font-elegant text-3xl text-[#f3e6d4] mb-2">Share your photos</h5>
        <p className="text-xs text-[#f3e6d4]/60 mb-6">Upload your pictures from the night for everyone to enjoy.</p>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {['from-[#e6c88f]/50', 'from-pink-300/40', 'from-[#e6c88f]/30'].map((tone) => (
            <div key={tone} className={`aspect-square bg-gradient-to-br ${tone} to-transparent border border-[#e6c88f]/20 flex items-center justify-center`}>
              <Camera size={18} className="text-[#e6c88f]/70" />
            </div>
          ))}
        </div>
        <span className="inline-block border border-[#e6c88f] text-[11px] uppercase tracking-[0.3em] px-6 py-3">Upload photos</span>
      </div>
    </div>
  );
}

export function BakeryPreview() {
  return (
    <div className="bg-[#fbf6ee] text-[#3d2614]">
      <div className="relative h-[440px]">
        <Image src="/examples/bakery.jpg" alt="Fresh bread rolls on bakery shelves" fill sizes={previewSizes} className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#24150a]/85 via-[#24150a]/50 to-transparent"></div>
        <div className="absolute top-0 inset-x-0 flex items-center justify-between px-6 py-4 text-white">
          <span className="font-display text-lg">Mama&apos;s Kitchen</span>
          <div className="flex gap-4 text-[11px] uppercase tracking-[0.2em] text-white/85"><span>Menu</span><span>Order</span><span>Visit</span></div>
        </div>
        <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-6 max-w-[75%] text-white">
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200 mb-3">Soweto · Since 2009</p>
          <h4 className="font-display text-4xl leading-tight mb-4">Baked fresh, every single morning.</h4>
          <div className="flex gap-2">
            <span className="bg-white text-[#3d2614] text-xs font-semibold px-4 py-2 rounded-full">View menu</span>
            <span className="inline-flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
              <MessageCircle size={13} /> Order on WhatsApp
            </span>
          </div>
        </div>
      </div>

      <div className="px-8 py-10">
        <h5 className="font-display text-3xl text-center mb-6">Today&apos;s Menu</h5>
        <div className="space-y-3 max-w-sm mx-auto">
          {[
            ['Vetkoek & mince', 'R30'],
            ['Scones (6)', 'R45'],
            ['Rusks, 1kg', 'R85'],
            ['Celebration cake', 'from R350'],
          ].map(([item, price]) => (
            <div key={item} className="flex items-baseline gap-2 text-sm">
              <span>{item}</span>
              <span className="flex-1 border-b border-dotted border-[#3d2614]/30"></span>
              <span className="font-semibold">{price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px bg-[#3d2614]/10 border-t border-[#3d2614]/10">
        <div className="bg-[#fbf6ee] px-6 py-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-amber-700 mb-2">Opening hours</div>
          <p className="text-sm">Mon – Fri: 6am – 5pm</p>
          <p className="text-sm">Saturday: 6am – 2pm</p>
        </div>
        <div className="bg-[#fbf6ee] px-6 py-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-amber-700 mb-2">Find us</div>
          <p className="text-sm flex items-center gap-1"><MapPin size={14} /> Orlando West, Soweto</p>
          <p className="text-sm underline mt-1">Get directions</p>
        </div>
      </div>
    </div>
  );
}

export function SalonPreview() {
  return (
    <div className="bg-[#161312] text-[#f4e7e1]">
      <div className="grid grid-cols-2 h-[440px]">
        <div className="relative">
          <Image src="/examples/salon.jpg" alt="Woman with long braided hair" fill sizes={previewSizes} className="object-cover object-top" />
        </div>
        <div className="flex flex-col justify-center px-6">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#e3a99a] mb-4">Glow Beauty Studio</p>
          <h4 className="font-elegant text-4xl leading-tight mb-4">Beauty, by appointment.</h4>
          <p className="text-xs text-[#f4e7e1]/60 mb-6 leading-relaxed">Braids, nails and skin care in the heart of Pretoria East.</p>
          <span className="self-start bg-[#e3a99a] text-[#161312] text-xs font-semibold uppercase tracking-[0.2em] px-5 py-3">Book now</span>
        </div>
      </div>

      <div className="px-8 py-10">
        <h5 className="font-elegant text-3xl text-center mb-6">Services</h5>
        <div className="space-y-3 max-w-sm mx-auto">
          {[
            ['Knotless braids', 'from R650'],
            ['Gel nails', 'R250'],
            ['Signature facial', 'R380'],
            ['Lash extensions', 'R450'],
          ].map(([service, price]) => (
            <div key={service} className="flex items-baseline gap-2 text-sm">
              <span>{service}</span>
              <span className="flex-1 border-b border-dotted border-[#f4e7e1]/25"></span>
              <span className="text-[#e3a99a]">{price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#f4e7e1]/10 px-8 py-8 text-center">
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#e3a99a] mb-4">Pick a time · Thu 14 Nov</div>
        <div className="flex justify-center gap-2 mb-8">
          {['09:00', '10:30', '13:00', '15:30'].map((time, index) => (
            <span key={time} className={`text-xs px-3 py-2 border ${index === 1 ? 'bg-[#e3a99a] text-[#161312] border-[#e3a99a]' : 'border-[#f4e7e1]/25'}`}>{time}</span>
          ))}
        </div>
        <div className="flex justify-center gap-0.5 text-[#e3a99a] mb-2">
          {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={14} className="fill-current" />)}
        </div>
        <p className="font-elegant text-xl italic">&ldquo;Best braids I&apos;ve ever had.&rdquo;</p>
        <p className="text-xs text-[#f4e7e1]/50 mt-1">Naledi M.</p>
      </div>
    </div>
  );
}

const examples = [
  {
    icon: PartyPopper,
    category: 'Birthdays & Parties',
    title: 'Party Invitation Website',
    description: 'A fun, shareable invite for birthdays, baby showers, anniversaries and reunions. Guests can say they\'re coming and share photos afterwards.',
    url: 'lerato30.co.za',
    preview: <BirthdayPreview />,
    features: [
      { icon: CalendarCheck, label: 'Guest RSVPs' },
      { icon: MapPin, label: 'Directions' },
      { icon: Camera, label: 'Guest photo uploads' },
      { icon: MessageCircle, label: 'Share on WhatsApp' },
    ],
  },
  {
    icon: Store,
    category: 'Small Businesses',
    title: 'Bakery or Restaurant Website',
    description: 'Show your menu and prices, opening hours and location, and let customers order straight from their phone.',
    url: 'mamaskitchen.co.za',
    preview: <BakeryPreview />,
    features: [
      { icon: Store, label: 'Menu & prices' },
      { icon: MessageCircle, label: 'WhatsApp orders' },
      { icon: MapPin, label: 'Google Maps' },
      { icon: Star, label: 'Customer reviews' },
    ],
  },
];

export default function WebsiteExamples() {
  return (
    <section id="examples" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Examples</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight mb-5">
            Websites for life&apos;s big moments, and for your business
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            A taste of what we can build for you. Every website is designed around you,
            with your colours, photos and words.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                <BrowserFrame url={example.url}>{example.preview}</BrowserFrame>
              </motion.div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-stone-500 mb-2">
                  <example.icon size={14} className="text-brand" />
                  {example.category}
                </div>
                <h3 className="font-display text-2xl font-medium text-ink mb-2">{example.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-4">{example.description}</p>
                <div className="flex flex-wrap gap-2">
                  {example.features.map((feature) => (
                    <span key={feature.label} className="inline-flex items-center gap-1.5 text-sm border border-stone-200 text-stone-700 rounded-full px-3 py-1">
                      <feature.icon size={14} className="text-stone-500" />
                      {feature.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-stone-50 border border-stone-200 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <p className="text-stone-600 text-lg max-w-md">
            Also great for baby showers, funerals &amp; memorials, church events, sports clubs, NGOs and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center border border-stone-300 text-ink px-8 py-4 rounded-full font-medium hover:border-ink transition-colors duration-200"
            >
              See the Full Portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-ink text-white px-8 py-4 rounded-full font-medium hover:bg-stone-700 transition-colors duration-200"
            >
              I Want a Website Like This
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
