'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src={isScrolled ? "/logo.svg" : "/logo-white.svg"} 
                alt="ThinkHighly Apps Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isScrolled ? 'text-gray-300 hover:text-purple-600' : 'text-gray-300 hover:text-purple-400'
                } transition-colors duration-200 font-medium`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                isScrolled ? 'text-gray-900' : 'text-white'
              } p-2 rounded-md hover:bg-gray-100/10 transition-colors`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-200">
              <div className="flex items-center space-x-4 px-3">
                <a href="tel:+27123456789" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                  <Phone size={16} />
                  <span className="text-sm">+27 12 345 6789</span>
                </a>
                <a href="mailto:info@thinkhighlyapps.co.za" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                  <Mail size={16} />
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
