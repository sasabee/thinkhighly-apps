'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern online shopping experience with real-time inventory management',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web Development',
    link: '#',
    github: '#'
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts, nutrition, and health metrics',
    image: '/api/placeholder/400/300',
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'Mobile App',
    link: '#',
    github: '#'
  },
  {
    title: 'AI Chat Assistant',
    description: 'Intelligent customer service chatbot with natural language processing',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'TensorFlow', 'FastAPI'],
    category: 'AI Solutions',
    link: '#',
    github: '#'
  },
  {
    title: 'Business Dashboard',
    description: 'Analytics dashboard for business intelligence and reporting',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    category: 'Web Development',
    link: '#',
    github: '#'
  },
  {
    title: 'Food Delivery App',
    description: 'Complete food ordering and delivery management system',
    image: '/api/placeholder/400/300',
    technologies: ['Flutter', 'Node.js', 'Google Maps API'],
    category: 'Mobile App',
    link: '#',
    github: '#'
  },
  {
    title: 'Learning Management System',
    description: 'Educational platform with video streaming and progress tracking',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Spring Boot', 'AWS'],
    category: 'Web Development',
    link: '#',
    github: '#'
  }
];

export default function PortfolioShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
            href="/portfolio"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            View Full Portfolio
            <ExternalLink className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
