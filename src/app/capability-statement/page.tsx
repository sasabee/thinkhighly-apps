'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Download, Award, Users, Target, Shield, CheckCircle, Clock, TrendingUp, Briefcase, Globe } from 'lucide-react';

export default function CapabilityStatement() {
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
    'Digital Transformation Consulting'
  ];

  const differentiators = [
    'Youth-Driven Innovation',
    'Agile Development Methodology',
    'Cost-Effective Solutions',
    'Quick Turnaround Times',
    '24/7 Technical Support',
    'Scalable Architecture',
    'Modern Technology Stack',
    'Industry Best Practices',
    'Security-First Approach',
    'Client-Centric Focus'
  ];

  const pastPerformance = [
    {
      client: 'RetailCo SA',
      project: 'E-Commerce Platform Development',
      value: 'R2.5M',
      duration: '3 months',
      outcome: '300% increase in online sales'
    },
    {
      client: 'FitLife Studios',
      project: 'Mobile Fitness App',
      value: 'R1.8M',
      duration: '4 months',
      outcome: '50,000+ downloads in first month'
    },
    {
      client: 'SupportHub',
      project: 'AI Customer Service Chatbot',
      value: 'R1.2M',
      duration: '2 months',
      outcome: '60% reduction in support tickets'
    },
    {
      client: 'DataCorp Analytics',
      project: 'Business Intelligence Dashboard',
      value: 'R2.1M',
      duration: '3 months',
      outcome: 'Real-time analytics for 500+ users'
    }
  ];

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
                Capability Statement
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Demonstrating our expertise and readiness for government and corporate procurement opportunities.
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
            >
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-4">
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Download Capability Statement
                </h2>

                <p className="text-gray-600 max-w-2xl">
                  Download our official capability statement to learn more
                  about ThinkHighly Apps, our services, technical expertise,
                  and digital solutions capabilities.
                </p>
              </div>

              <a
                href="/documents/ThinkHighly-Capability-Statement.pdf"
                download
                target="_blank"
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
              >
                <Download size={20} className="mr-2" />
                Download PDF
              </a>
            </div>
</div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Information</h3>
                      <div className="space-y-2">
                        <div><strong>Legal Name:</strong> ThinkHighly Apps (Pty) Ltd</div>
                        <div><strong>Registration Number:</strong> 2026/370706/07</div>
                        <div><strong>Tax Number:</strong> 9458105149</div>
                        <div><strong>B-BBEE Level:</strong> Level 1 Contributor</div>
                        <div><strong>Established:</strong> 2026</div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Classification</h3>
                      <div className="space-y-2">
                        <div><strong>Industry:</strong> Information Technology & Software Development</div>
                        <div><strong>NAICS Code:</strong> 541511 - Custom Computer Programming Services</div>
                        <div><strong>Size Standard:</strong> Small Business</div>
                        <div><strong>Ownership:</strong> 100% South African Owned</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Personnel</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">CEO & Lead Developer</h3>
                      <p className="text-gray-600 text-sm mb-2">5+ years experience in software development</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">React</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Node.js</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Cloud Architecture</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Lead UI/UX Designer</h3>
                      <p className="text-gray-600 text-sm mb-2">6+ years experience in digital design</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Figma</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">User Research</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Prototyping</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Project Manager</h3>
                      <p className="text-gray-600 text-sm mb-2">years of experience in tech project management</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Agile</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Scrum</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">PMP Certified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Core Competencies
              </h2>
              <p className="text-xl text-gray-600">
                Our areas of expertise and technical capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreCompetencies.map((competency, index) => (
                <motion.div
                  key={competency}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 flex items-center space-x-3 shadow-sm"
                >
                  <CheckCircle className="text-purple-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{competency}</span>
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Competitive Differentiators
              </h2>
              <p className="text-xl text-gray-600">
                What sets us apart from the competition.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((differentiator, index) => (
                <motion.div
                  key={differentiator}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center"
                >
                  <TrendingUp className="text-purple-600 mx-auto mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900">{differentiator}</h3>
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Certifications & Compliance
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">ISO 9001:2015</h3>
                  <p className="text-gray-600 text-sm">Quality Management System</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">POPIA Compliant</h3>
                  <p className="text-gray-600 text-sm">Data Protection & Privacy</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">B-BBEE Level 1</h3>
                  <p className="text-gray-600 text-sm">Broad-Based Black Economic Empowerment</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">CSD Registered</h3>
                  <p className="text-gray-600 text-sm">Central Supplier Database</p>
                </div>
              </div>
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
              className="text-center"
            >
              <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-8 md:p-12">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Work With Us?
        </h2>

        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Download our complete capability statement to learn more
          about ThinkHighly Apps, our technical expertise,
          service offerings, and digital capabilities.
          For procurement, partnerships, or business
          opportunities, connect with our team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Download Capability Statement */}
          <a
            href="/documents/ThinkHighly-Capability-Statement.pdf"
            download
            target="_blank"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Download size={20} />
            <span>
              Download Capability Statement
            </span>
          </a>

          {/* Contact Procurement Team */}
          <a
            href="mailto:info@thinkhighlyapps.co.za?subject=Procurement Inquiry"
            className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 hover:shadow-md transition-all duration-300 flex items-center justify-center"
          >
            Contact Procurement Team
          </a>

        </div>
      </div>
    </motion.div>
  </div>
</section>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
