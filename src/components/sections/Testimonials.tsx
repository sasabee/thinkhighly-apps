'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart SA',
    content: 'ThinkHighly Apps transformed our business with their innovative mobile app solution. Their team was professional, responsive, and delivered beyond our expectations.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Lecturer, University of Johannesburg',
    content: 'The students who worked with ThinkHighly Apps showed exceptional technical skills and professionalism. Their projects were well-architected and delivered on time.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Amanda Ndlovu',
    role: 'Operations Manager, RetailCo',
    content: 'Their e-commerce platform increased our online sales by 300% within the first six months. The team understood our needs perfectly.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'James Wilson',
    role: 'Project Manager, HealthTech Solutions',
    content: 'Outstanding service and technical expertise. They delivered a complex healthcare management system that streamlined our entire operation.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Thato Mokoena',
    role: 'Founder, EduLearn Platform',
    content: 'As a startup, we needed a partner who could grow with us. ThinkHighly Apps has been that partner, providing scalable solutions and excellent support.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Lisa Anderson',
    role: 'Marketing Director, FinServe',
    content: 'Their attention to detail and commitment to quality is unmatched. Our new website has significantly improved our lead generation.',
    rating: 5,
    image: '/api/placeholder/60/60'
  }
];

export default function Testimonials() {
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute top-4 right-4">
                <Quote className="text-purple-200" size={24} />
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Join Our Satisfied Clients
          </h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Ready to experience the ThinkHighly difference? Let's discuss how we can help transform your business with innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              Download Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
