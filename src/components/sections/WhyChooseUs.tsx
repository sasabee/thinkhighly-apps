'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, Clock, Shield, Users, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle,
    title: 'Affordable Solutions',
    description: 'Competitive pricing without compromising on quality'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick turnaround times with agile development methodology'
  },
  {
    icon: Zap,
    title: 'Modern Technologies',
    description: 'Cutting-edge tech stack for scalable and robust solutions'
  },
  {
    icon: Users,
    title: 'Youth-Driven Innovation',
    description: 'Fresh perspectives and creative problem-solving approaches'
  },
  {
    icon: Shield,
    title: 'Reliable Support',
    description: '24/7 technical support and maintenance services'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Systems',
    description: 'Solutions that grow with your business needs'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ThinkHighly Apps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business understanding to deliver solutions that drive real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <reason.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 mb-6">
                Join our growing list of satisfied clients who have experienced the ThinkHighly difference. 
                Let us help you leverage technology to achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Industries We Serve
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {['E-commerce', 'Healthcare', 'Education', 'Finance', 'Retail', 'Manufacturing', 'Entertainment', 'Real Estate'].map((industry) => (
                  <div key={industry} className="flex items-center space-x-2">
                    <CheckCircle className="text-purple-600" size={16} />
                    <span className="text-gray-700 text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
