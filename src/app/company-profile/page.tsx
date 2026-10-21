'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Calendar, Check, Download, Mail, MapPin, Printer, Shield, Users } from 'lucide-react';
import Link from 'next/link';

const companyDetails = [
  { label: 'Legal name', value: 'ThinkHighly Apps (Pty) Ltd' },
  { label: 'Registration number', value: '2026/370706/07' },
  { label: 'Tax number', value: '9458105149' },
  { label: 'B-BBEE level', value: 'Level 1 Contributor' },
  { label: 'Founded', value: '2026' },
  { label: 'Head office', value: 'Pretoria, South Africa' },
];

const expertise = [
  { title: 'Web development', text: 'Business websites, event websites, online shops and web platforms.', technologies: ['React', 'Next.js', 'Node.js', 'Spring Boot', 'TypeScript'] },
  { title: 'Mobile development', text: 'Android and iPhone apps for ordering, bookings and customer loyalty.', technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'] },
  { title: 'AI & automation', text: 'Chatbots, smart reminders and tools that take repetitive work off your hands.', technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI APIs', 'scikit-learn'] },
  { title: 'Cloud & DevOps', text: 'Secure hosting, reliable deployment and systems that grow with demand.', technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'] },
  { title: 'Database systems', text: 'Well-structured data for bookings, stock, clients and reporting.', technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'] },
  { title: 'UI/UX design', text: 'Branding, layouts and user journeys that are simple and beautiful.', technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'] },
];

const industries = [
  'Weddings & events', 'Hospitality', 'Retail & e-commerce', 'Healthcare', 'Education', 'Finance',
  'Real estate', 'Entertainment', 'Manufacturing', 'Transportation', 'Government', 'Non-profit',
];

const compliance = [
  { icon: Award, title: 'ISO 9001:2015', text: 'Quality management' },
  { icon: Shield, title: 'POPIA compliant', text: 'Data protection & privacy' },
  { icon: Users, title: 'B-BBEE Level 1', text: 'Contributor status' },
];

const hours = [
  ['Monday – Friday', '9:00 AM – 6:00 PM'],
  ['Saturday', '10:00 AM – 2:00 PM'],
  ['Sunday', 'Closed'],
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function CompanyProfile() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="bg-stone-50 pt-32 lg:pt-40 pb-20 print:pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-6">Company profile</p>
              <h1 className="font-display text-5xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tight mb-6">
                ThinkHighly Apps
              </h1>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-10 max-w-xl">
                A South African digital studio building websites, mobile apps and business systems for
                individuals, small businesses, corporates and government.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 print:hidden">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="bg-ink text-white px-8 py-4 rounded-full font-medium hover:bg-stone-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Printer size={18} />
                  Save as PDF
                </button>
                <Link
                  href="/capability-statement"
                  className="border border-stone-300 text-ink px-8 py-4 rounded-full font-medium hover:border-ink transition-colors inline-flex items-center justify-center gap-2"
                >
                  View Capability Statement
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 rounded-3xl bg-white border border-stone-200 p-8"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-6">At a glance</h2>
              <dl className="divide-y divide-stone-200">
                {companyDetails.map((detail) => (
                  <div key={detail.label} className="flex justify-between gap-6 py-3">
                    <dt className="text-stone-500">{detail.label}</dt>
                    <dd className="font-medium text-ink text-right">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Who we are</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight">Company overview</h2>
            </motion.div>
            <motion.div {...fadeUp} className="lg:col-span-8 space-y-6 text-lg text-stone-600 leading-relaxed">
              <p className="font-display text-2xl md:text-3xl text-ink leading-snug">
                We turn ideas into websites, apps and systems that people enjoy using.
              </p>
              <p>
                ThinkHighly Apps was founded in 2026 to make quality digital work accessible to everyone, from couples
                planning a wedding and kasi businesses getting online, to organisations that need custom software.
              </p>
              <p>
                Our young, multi-skilled team combines modern technology with clear communication. We design, build,
                host and support every project, so our clients have one trusted partner from the first conversation to
                long after launch.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="border-t-2 border-ink pt-4">
                  <h3 className="font-display text-2xl text-ink mb-2">Mission</h3>
                  <p className="text-base">To give every person and business a beautiful, working digital presence without the stress or jargon.</p>
                </div>
                <div className="border-t-2 border-ink pt-4">
                  <h3 className="font-display text-2xl text-ink mb-2">Vision</h3>
                  <p className="text-base">To be the most trusted digital partner in Africa, known for care, reliability and quality.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">What we do</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight mb-5">Our expertise</h2>
              <p className="text-lg text-stone-600 leading-relaxed">The services we offer and the technologies we use to deliver them.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                  className="bg-white p-8"
                >
                  <span className="font-display text-3xl text-stone-300">0{index + 1}</span>
                  <h3 className="font-display text-2xl font-medium text-ink mt-3 mb-2">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed mb-5">{item.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="text-xs text-stone-600 border border-stone-200 rounded-full px-3 py-1">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Industries</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight">Who we serve</h2>
            </motion.div>
            <motion.ul {...fadeUp} className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
              {industries.map((industry) => (
                <li key={industry} className="flex items-center gap-3 text-stone-700 border-b border-stone-100 pb-4">
                  <Check className="text-brand shrink-0" size={18} />
                  {industry}
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div {...fadeUp} className="rounded-3xl bg-white border border-stone-200 p-8">
              <h2 className="font-display text-2xl text-ink mb-6">Certifications & compliance</h2>
              <ul className="space-y-5">
                {compliance.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 bg-brand-soft rounded-xl flex items-center justify-center">
                      <item.icon className="text-brand" size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-ink">{item.title}</div>
                      <div className="text-sm text-stone-500">{item.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl bg-white border border-stone-200 p-8">
              <h2 className="font-display text-2xl text-ink mb-6">Business hours</h2>
              <dl className="divide-y divide-stone-200">
                {hours.map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-4 py-3">
                    <dt className="flex items-center gap-2 text-stone-600"><Calendar size={16} className="text-brand" />{day}</dt>
                    <dd className="font-medium text-ink">{time}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-3xl bg-white border border-stone-200 p-8">
              <h2 className="font-display text-2xl text-ink mb-6">Contact details</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-brand" />
                  <a href="mailto:info@thinkhighlyapps.co.za" className="text-stone-700 hover:text-brand underline-offset-4 hover:underline">info@thinkhighlyapps.co.za</a>
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <MapPin size={18} className="text-brand" />
                  Pretoria, South Africa
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-ink print:hidden">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to partner with us?</h2>
            <p className="text-lg text-stone-300 leading-relaxed mb-10">
              Tell us about your project, tender or partnership opportunity and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-ink px-8 py-4 rounded-full font-medium hover:bg-stone-200 transition-colors inline-flex items-center justify-center gap-2 group">
                Contact Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <a
                href="/documents/ThinkHighly-Capability-Statement.pdf"
                download
                className="border border-stone-600 text-white px-8 py-4 rounded-full font-medium hover:border-white transition-colors inline-flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Capability Statement (PDF)
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
