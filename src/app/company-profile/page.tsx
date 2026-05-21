'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Download, Award, Users, Target, Shield, TrendingUp, Calendar, MapPin, Phone, Mail } from 'lucide-react';

export default function CompanyProfile() {
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
                Company Profile
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Learn more about ThinkHighly Apps and our commitment to excellence in digital solutions.
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
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Download Company Profile</h2>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
                    <Download size={20} />
                    <span>Download PDF</span>
                  </button>
                </div>
                <p className="text-gray-600">
                  Get our complete company profile in PDF format for detailed information about our services, expertise, and achievements.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Company Overview
                </h2>
                
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Company Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <strong>Legal Name:</strong>
                        <span>ThinkHighly Apps (Pty) Ltd</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <strong>Registration Number:</strong>
                        <span>2026/370706/07</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <strong>Tax Number:</strong>
                        <span>9458105149</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <strong>B-BBEE Level:</strong>
                        <span>Level 1 Contributor</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <strong>Founded:</strong>
                        <span>2026</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Details</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone size={16} className="text-purple-600" />
                        <span>+27 67 659 4016</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail size={16} className="text-purple-600" />
                        <span>info@thinkhighlyapps.co.za</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-purple-600" />
                        <span>Pretoria, South Africa</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-purple-600" />
                        <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-purple-600" />
                        <span>Saturday: 10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-purple-600" />
                        <span>Sunday: Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
               

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Certifications & Compliance</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Award className="text-purple-600" size={20} />
                      <span>ISO 9001:2015 Quality Management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="text-purple-600" size={20} />
                      <span>POPIA Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="text-purple-600" size={20} />
                      <span>B-BBEE Level 1 Contributor</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
                Our Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Technical capabilities and industry experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Web Development',
                  technologies: ['React', 'Next.js', 'Node.js', 'Spring Boot', 'TypeScript']
                },
                {
                  icon: Users,
                  title: 'Mobile Development',
                  technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
                },
                {
                  icon: Shield,
                  title: 'AI & Machine Learning',
                  technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI APIs', 'scikit-learn']
                },
                {
                  icon: TrendingUp,
                  title: 'Cloud & DevOps',
                  technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD']
                },
                {
                  icon: Award,
                  title: 'Database Systems',
                  technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch']
                },
                {
                  icon: Users,
                  title: 'UI/UX Design',
                  technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle']
                }
              ].map((expertise, index) => (
                <motion.div
                  key={expertise.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <expertise.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {expertise.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {expertise.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Industries
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Extensive experience across multiple sectors.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'E-commerce',
                'Healthcare',
                'Education',
                'Finance',
                'Retail',
                'Manufacturing',
                'Entertainment',
                'Real Estate',
                'Government',
                'Non-Profit',
                'Transportation',
                'Hospitality'
              ].map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center"
                >
                  <div className="font-semibold text-gray-900">{industry}</div>
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
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Download our complete company profile or get in touch to discuss how we can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <Download size={20} />
                  <span>Download Full Profile</span>
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200">
                  Contact Sales Team
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
