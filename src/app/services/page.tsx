'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Palette, Cpu, Database, Cloud, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    benefits: [
      'Cross-platform compatibility',
      'Native performance',
      'Offline functionality',
      'Push notifications',
      'App store optimization'
    ],
    features: [
      'User authentication',
      'Real-time data sync',
      'Payment integration',
      'Analytics tracking',
      'Social media integration'
    ]
  },
  {
    icon: Monitor,
    title: 'Website Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies and best practices.',
    technologies: ['React', 'Next.js', 'Node.js', 'Spring Boot', 'TypeScript'],
    benefits: [
      'Responsive design',
      'Fast loading speeds',
      'SEO optimization',
      'Cross-browser compatibility',
      'Scalable architecture'
    ],
    features: [
      'Content management systems',
      'E-commerce platforms',
      'Booking systems',
      'Customer portals',
      'Admin dashboards'
    ]
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive design solutions that prioritize user experience and business goals.',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
    benefits: [
      'User-centered design',
      'Increased conversion rates',
      'Brand consistency',
      'Accessibility compliance',
      'Competitive advantage'
    ],
    features: [
      'Wireframing',
      'Prototyping',
      'User testing',
      'Design systems',
      'Brand identity'
    ]
  },
  {
    icon: Cpu,
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence and machine learning solutions to automate and optimize your business processes.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI APIs', 'scikit-learn'],
    benefits: [
      'Process automation',
      'Predictive analytics',
      'Natural language processing',
      'Computer vision',
      'Cost reduction'
    ],
    features: [
      'Chatbots',
      'Recommendation engines',
      'Image recognition',
      'Data analysis',
      'Predictive modeling'
    ]
  },
  {
    icon: Database,
    title: 'Business Systems',
    description: 'Custom software solutions tailored to your specific business needs and workflows.',
    technologies: ['Java', '.NET', 'PostgreSQL', 'MongoDB', 'Docker'],
    benefits: [
      'Increased efficiency',
      'Better data management',
      'Process automation',
      'Real-time reporting',
      'Integration capabilities'
    ],
    features: [
      'Inventory management',
      'CRM systems',
      'ERP solutions',
      'Project management',
      'Reporting tools'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions for optimal performance and reliability.',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    benefits: [
      'Scalability',
      'Cost efficiency',
      'High availability',
      'Security',
      'Global reach'
    ],
    features: [
      'Cloud migration',
      'Serverless architecture',
      'Microservices',
      'DevOps pipelines',
      'Monitoring solutions'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive digital solutions to help your business thrive in the modern world.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'order-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                        <service.icon className="text-white" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center space-x-2">
                              <CheckCircle className="text-purple-600 flex-shrink-0" size={16} />
                              <span className="text-gray-600 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center space-x-2">
                              <CheckCircle className="text-purple-600 flex-shrink-0" size={16} />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'order-1' : ''}>
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 h-full min-h-[400px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <service.icon className="text-white" size={48} />
                        </div>
                        <p className="text-gray-700 font-medium">
                          Expert {service.title} Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure project success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Discovery', description: 'Understanding your needs and goals' },
                { step: '2', title: 'Planning', description: 'Creating detailed project roadmap' },
                { step: '3', title: 'Development', description: 'Building your solution with expertise' },
                { step: '4', title: 'Launch', description: 'Deploying and supporting your project' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business and achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>Get a Quote</span>
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
