'use client';

import { motion } from 'framer-motion';
import { Smartphone, Monitor, Palette, Cpu, Database, Cloud, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    technologies: 'React Native, Flutter, Swift, Kotlin'
  },
  {
    icon: Monitor,
    title: 'Website Development',
    description: 'Modern, responsive websites and web applications',
    technologies: 'React, Next.js, Node.js, Spring Boot'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, user-centered design solutions',
    technologies: 'Figma, Adobe XD, Sketch'
  },
  {
    icon: Cpu,
    title: 'AI Solutions',
    description: 'Cutting-edge AI and automation services',
    technologies: 'Python, TensorFlow, OpenAI APIs'
  },
  {
    icon: Database,
    title: 'Business Systems',
    description: 'Custom software solutions for your business needs',
    technologies: 'Java, .NET, PostgreSQL, MongoDB'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment',
    technologies: 'AWS, Azure, Google Cloud, Docker'
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We create scalable and innovative software solutions tailored to your business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="text-sm text-purple-600 font-medium mb-4">
                {service.technologies}
              </div>
              <Link 
                href="/services"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group"
              >
                Learn more
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/services"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            View All Services
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
