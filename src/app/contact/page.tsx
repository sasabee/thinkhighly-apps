'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Clock, ChevronDown } from 'lucide-react';

const inputClass =
  'w-full px-4 py-3 bg-white border border-stone-300 rounded-xl text-ink placeholder:text-stone-400 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-colors';

const labelClass = 'block text-sm font-medium text-stone-700 mb-2';

const services = [
  'Wedding website',
  'Birthday or party website',
  'Business website',
  'Online shop',
  'Mobile app',
  'Logo & branding',
  'Business system',
  'AI & automation',
  'Other',
];

const nextSteps = [
  'We read your message and reply within 24 hours.',
  'We chat about your ideas and send you a quote.',
  'Once you\'re happy, we start designing your website.',
];

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'It depends on what you need. A simple website usually takes 2 to 4 weeks, while a larger project like a mobile app can take 3 to 6 months. Let us know your date and we\'ll plan around it.',
  },
  {
    question: 'How much will my website cost?',
    answer: 'Every project is different, so we give you a quote based on the features you need. Send us a message and we\'ll come back to you with a clear price.',
  },
  {
    question: 'Do I need to know anything about technology?',
    answer: 'Not at all. Tell us what you want in your own words and we take care of the technical side, from your web address to hosting.',
  },
  {
    question: 'Can you help after my website is live?',
    answer: 'Yes. We offer ongoing support, so we can update your website, fix anything that comes up and add new features as you grow.',
  },
  {
    question: 'Can you work with my existing website or system?',
    answer: 'Absolutely. We can refresh what you already have or connect a new website to the tools you use today.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [loading, setLoading] =
  useState(false);

const [success, setSuccess] =
  useState('');

const [error, setError] =
  useState('');

const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  setLoading(true);
  setSuccess('');
  setError('');

  try {
    const response = await fetch(
      '/api/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(
          formData
        ),
      }
    );

    const data =
      await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          'Failed to send'
      );
    }

    setSuccess(
      'Message sent successfully!'
    );

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
  } catch (err) {
    setError(
      (err instanceof Error && err.message) ||
        'Something went wrong'
    );
  } finally {
    setLoading(false);
  }
};

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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-6">Contact us</p>
              <h1 className="font-display text-5xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tight mb-6">
                Let&apos;s talk about your website.
              </h1>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                Planning a wedding, a party or growing your business? Tell us a little about it and
                we&apos;ll come back to you with ideas and a quote.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl border border-stone-200 p-6 md:p-10">
                <h2 className="font-display text-3xl font-medium text-ink mb-2">Send us a message</h2>
                <p className="text-stone-500 mb-8">Fields marked * are required.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className={inputClass} placeholder="you@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className={inputClass} placeholder="e.g. 082 123 4567" />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Business or event name</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className={inputClass} placeholder="e.g. Mama's Kitchen" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className={labelClass}>What do you need?</label>
                    <div className="relative">
                      <select id="service" name="service" value={formData.service} onChange={handleInputChange} className={`${inputClass} appearance-none pr-10`}>
                        <option value="">Choose one</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={18} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Tell us about it *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className={`${inputClass} resize-none`} placeholder="Your event date, what you'd like your website to do, any ideas you have..." />
                  </div>

                  {success && (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl">
                      {success}
                    </div>
                  )}

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-ink text-white px-8 py-4 rounded-full font-medium hover:bg-stone-700 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-10"
            >
              <div>
                <h2 className="font-display text-3xl font-medium text-ink mb-6">Other ways to reach us</h2>
                <div className="divide-y divide-stone-200 border-y border-stone-200">
                  <div className="flex items-start gap-4 py-5">
                    <div className="w-11 h-11 shrink-0 bg-brand-soft rounded-xl flex items-center justify-center">
                      <Mail className="text-brand" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">Email</h3>
                      <a href="mailto:info@thinkhighlyapps.co.za" className="text-stone-600 hover:text-brand underline-offset-4 hover:underline">
                        info@thinkhighlyapps.co.za
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-5">
                    <div className="w-11 h-11 shrink-0 bg-brand-soft rounded-xl flex items-center justify-center">
                      <MapPin className="text-brand" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">Based in Pretoria</h3>
                      <p className="text-stone-600">Working with clients across South Africa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-5">
                    <div className="w-11 h-11 shrink-0 bg-brand-soft rounded-xl flex items-center justify-center">
                      <Clock className="text-brand" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">Quick replies</h3>
                      <p className="text-stone-600">We respond to every message within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-stone-50 border border-stone-200 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-stone-500 mb-6">What happens next</h3>
                <ol className="space-y-5">
                  {nextSteps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="font-display text-2xl text-stone-300 leading-none">0{index + 1}</span>
                      <span className="text-stone-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">FAQ</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight mb-4">
                Questions we often get
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Can&apos;t find your answer? Send us a message and we&apos;ll gladly help.
              </p>
            </motion.div>

            <div className="lg:col-span-8 divide-y divide-stone-200 border-y border-stone-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex items-center justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-xl md:text-2xl text-ink">{faq.question}</h3>
                    <ChevronDown className="shrink-0 text-stone-400 transition-transform group-open:rotate-180" size={22} />
                  </summary>
                  <p className="text-stone-600 leading-relaxed mt-4 max-w-2xl">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
