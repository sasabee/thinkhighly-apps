'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Briefcase, Check, Download, Mail, Shield, Users } from 'lucide-react';
import Link from 'next/link';

const companyInformation = [
  { label: 'Legal name', value: 'ThinkHighly Apps (Pty) Ltd' },
  { label: 'Registration number', value: '2026/370706/07' },
  { label: 'Tax number', value: '9458105149' },
  { label: 'B-BBEE level', value: 'Level 1 Contributor' },
  { label: 'Established', value: '2026' },
];

const businessClassification = [
  { label: 'Industry', value: 'Information Technology & Software Development' },
  { label: 'NAICS code', value: '541511 – Custom Computer Programming Services' },
  { label: 'Size standard', value: 'Small business' },
  { label: 'Ownership', value: '100% South African owned' },
];

const coreCompetencies = [
  'Custom Software Development',
  'Mobile Application Development',
  'Web Application Development',
  'UI/UX Design Services',
  'Cloud Solutions & Migration',
  'AI & Machine Learning Integration',
  'Database Design & Management',
  'API Development & Integration',
  'DevOps & CI/CD Implementation',
  'Quality Assurance & Testing',
  'Maintenance & Support Services',
  'Digital Transformation Consulting',
];

const differentiators = [
  'Youth-driven innovation',
  'Agile development methodology',
  'Cost-effective solutions',
  'Quick turnaround times',
  '24/7 technical support',
  'Scalable architecture',
  'Modern technology stack',
  'Industry best practices',
  'Security-first approach',
  'Client-centric focus',
];

const personnel = [
  { role: 'CEO & Lead Developer', experience: '5+ years in software development', skills: ['React', 'Node.js', 'Cloud Architecture'] },
  { role: 'Lead UI/UX Designer', experience: '6+ years in digital design', skills: ['Figma', 'User Research', 'Prototyping'] },
  { role: 'Project Manager', experience: 'Experienced in technology project management', skills: ['Agile', 'Scrum', 'PMP Certified'] },
];

const certifications = [
  { icon: Award, title: 'ISO 9001:2015', text: 'Quality Management System' },
  { icon: Shield, title: 'POPIA Compliant', text: 'Data Protection & Privacy' },
  { icon: Users, title: 'B-BBEE Level 1', text: 'Broad-Based Black Economic Empowerment' },
  { icon: Briefcase, title: 'CSD Registered', text: 'Central Supplier Database' },
];

const pdfPath = '/documents/ThinkHighly-Capability-Statement.pdf';
const procurementEmail = 'mailto:info@thinkhighlyapps.co.za?subject=Procurement%20Inquiry';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

function DetailCard({ title, rows }: { title: string; rows: { label: string; value: string }[] }) {
  return (
    <div className="rounded-3xl bg-white border border-stone-200 p-8">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-4">{title}</h2>
      <dl className="divide-y divide-stone-200">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-5 gap-4 py-3">
            <dt className="col-span-2 text-stone-500">{row.label}</dt>
            <dd className="col-span-3 font-medium text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function CapabilityStatement() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="bg-stone-50 pt-32 lg:pt-40 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-6">Capability statement</p>
              <h1 className="font-display text-5xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tight mb-6">
                Ready for government and corporate projects.
              </h1>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-10">
                An overview of ThinkHighly Apps&apos; registration, capabilities, team and compliance, for
                procurement officers, partners and corporate clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={pdfPath}
                  download
                  className="bg-ink text-white px-8 py-4 rounded-full font-medium hover:bg-stone-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download PDF
                </a>
                <a
                  href={procurementEmail}
                  className="border border-stone-300 text-ink px-8 py-4 rounded-full font-medium hover:border-ink transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Email Procurement Enquiry
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div {...fadeUp}>
              <DetailCard title="Company information" rows={companyInformation} />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <DetailCard title="Business classification" rows={businessClassification} />
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Capabilities</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight mb-4">Core competencies</h2>
              <p className="text-stone-600 leading-relaxed">Our areas of expertise and technical capabilities.</p>
            </motion.div>
            <motion.ul {...fadeUp} className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
              {coreCompetencies.map((competency) => (
                <li key={competency} className="bg-white px-6 py-5 flex items-center gap-3 text-stone-700">
                  <Check className="text-brand shrink-0" size={18} />
                  {competency}
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Why us</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight mb-4">Competitive differentiators</h2>
              <p className="text-stone-600 leading-relaxed">What sets us apart.</p>
            </motion.div>
            <motion.ol {...fadeUp} className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {differentiators.map((item, index) => (
                <li key={item} className="flex items-baseline gap-4 py-4 border-b border-stone-200">
                  <span className="font-display text-xl text-stone-300 w-8">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-lg text-ink">{item}</span>
                </li>
              ))}
            </motion.ol>
          </div>
        </section>

        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Our team</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight">Key personnel</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {personnel.map((person, index) => (
                <motion.div
                  key={person.role}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-3xl bg-white border border-stone-200 p-8"
                >
                  <h3 className="font-display text-2xl font-medium text-ink mb-2">{person.role}</h3>
                  <p className="text-stone-600 mb-5">{person.experience}</p>
                  <div className="flex flex-wrap gap-2">
                    {person.skills.map((skill) => (
                      <span key={skill} className="text-xs text-stone-600 border border-stone-200 rounded-full px-3 py-1">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Compliance</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight">Certifications & compliance</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
              {certifications.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8"
                >
                  <div className="w-12 h-12 bg-brand-soft rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="text-brand" size={22} />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-ink mb-1">{item.title}</h3>
                  <p className="text-stone-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-ink">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to work with us?</h2>
            <p className="text-lg text-stone-300 leading-relaxed mb-10">
              For procurement, partnerships or business opportunities, download our capability statement or get in
              touch with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={pdfPath}
                download
                className="bg-white text-ink px-8 py-4 rounded-full font-medium hover:bg-stone-200 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download Capability Statement
              </a>
              <Link href="/contact" className="border border-stone-600 text-white px-8 py-4 rounded-full font-medium hover:border-white transition-colors inline-flex items-center justify-center gap-2 group">
                Contact Our Team
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
