'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Filter } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A comprehensive online shopping platform with real-time inventory management, payment processing, and analytics dashboard.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redis'],
    category: 'Web Development',
    client: 'RetailCo SA',
    date: 'March 2024',
    duration: '3 months',
    status: 'Completed',
    link: '#',
    github: '#',
    features: [
      'Multi-vendor support',
      'Real-time inventory tracking',
      'Advanced search and filtering',
      'Mobile-responsive design',
      'Payment gateway integration',
      'Analytics dashboard'
    ]
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    description: 'A comprehensive mobile application for tracking workouts, nutrition, and health metrics with social features.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit API', 'Google Fit API'],
    category: 'Mobile App',
    client: 'FitLife Studios',
    date: 'February 2024',
    duration: '4 months',
    status: 'Completed',
    link: '#',
    github: '#',
    features: [
      'Workout planning and tracking',
      'Nutrition logging',
      'Progress analytics',
      'Social community features',
      'Integration with wearables',
      'Personalized recommendations'
    ]
  },
  {
    id: 3,
    title: 'AI Customer Service Chatbot',
    description: 'An intelligent chatbot system using natural language processing to handle customer inquiries and support tickets.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'OpenAI GPT', 'Docker'],
    category: 'AI Solutions',
    client: 'SupportHub',
    date: 'January 2024',
    duration: '2 months',
    status: 'Completed',
    link: '#',
    github: '#',
    features: [
      'Natural language understanding',
      'Multi-language support',
      'Sentiment analysis',
      'Integration with CRM systems',
      '24/7 availability',
      'Learning capabilities'
    ]
  },
  {
    id: 4,
    title: 'Business Intelligence Dashboard',
    description: 'A powerful analytics dashboard for business intelligence, reporting, and data visualization.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'D3.js', 'AWS'],
    category: 'Web Development',
    client: 'DataCorp Analytics',
    date: 'December 2023',
    duration: '3 months',
    status: 'Completed',
    link: '#',
    github: '#',
    features: [
      'Real-time data visualization',
      'Custom report generation',
      'Data export capabilities',
      'Role-based access control',
      'Mobile-responsive design',
      'Integration with multiple data sources'
    ]
  },
  {
    id: 5,
    title: 'Food Delivery Platform',
    description: 'A complete food ordering and delivery management system with restaurant management and driver tracking.',
    image: '/api/placeholder/600/400',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API', 'Socket.io'],
    category: 'Mobile App',
    client: 'QuickEats',
    date: 'November 2023',
    duration: '5 months',
    status: 'Completed',
    link: '#',
    github: '#',
    features: [
      'Restaurant management system',
      'Real-time order tracking',
      'Driver dispatch system',
      'Payment processing',
      'Rating and review system',
      'Push notifications'
    ]
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'An educational platform with video streaming, progress tracking, and interactive learning tools.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Spring Boot', 'AWS S3', 'WebRTC', 'PostgreSQL'],
    category: 'Web Development',
    client: 'EduLearn Platform',
    date: 'October 2023',
    duration: '4 months',
    status: 'Completed',
    link: '#',
    github: '#',
    features: [
      'Video streaming platform',
      'Interactive quizzes and assignments',
      'Progress tracking',
      'Certification system',
      'Live virtual classrooms',
      'Mobile app companion'
    ]
  },
  {
    id: 7,
    title: 'Healthcare Management System',
    description: 'A comprehensive healthcare management system for clinics and hospitals with patient records and appointment scheduling.',
    image: '/api/placeholder/600/400',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker'],
    category: 'Business Systems',
    client: 'MediCare Solutions',
    date: 'September 2023',
    duration: '6 months',
    status: 'Completed',
    link: '#',
    github: '#',
    features: [
      'Electronic health records',
      'Appointment scheduling',
      'Billing and insurance management',
      'Telemedicine capabilities',
      'Prescription management',
      'HIPAA compliance'
    ]
  },
  {
    id: 8,
    title: 'Real Estate Platform',
    description: 'A property listing and management platform with virtual tours and advanced search capabilities.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Mapbox'],
    category: 'Web Development',
    client: 'PropertyPro',
    date: 'August 2023',
    duration: '3 months',
    status: 'Completed',
    link: '#',
    github: '#',
    features: [
      'Property listings with photos',
      'Virtual tour integration',
      'Advanced search and filters',
      'Agent management system',
      'Lead generation tools',
      'Mobile-responsive design'
    ]
  }
];

const categories = ['All', 'Web Development', 'Mobile App', 'AI Solutions', 'Business Systems'];

export default function Portfolio() {
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
                Our Portfolio
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Explore our latest projects and see how we've helped businesses transform their digital presence.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                  Featured Projects
                </h2>
                <div className="flex items-center space-x-4">
                  <Filter className="text-gray-600" size={20} />
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-purple-600">
                        {project.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{project.date}</span>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          {project.status}
                        </span>
                      </div>

                      <div className="flex space-x-3">
                        <a
                          href={project.link}
                          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm group"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          View Project
                        </a>
                        <a
                          href={project.github}
                          className="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium text-sm"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Load More Projects
              </button>
            </motion.div>
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
                Project Statistics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that speak to our expertise and commitment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '30+', label: 'Happy Clients' },
                { number: '15+', label: 'Technologies' },
                { number: '98%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
