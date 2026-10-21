'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [examplesInView, setExamplesInView] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On the homepage, "Examples" lights up while that section is on screen
  useEffect(() => {
    const section = pathname === '/' ? document.getElementById('examples') : null;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setExamplesInView(entry.isIntersecting),
      { rootMargin: '-40% 0px -50% 0px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  const onExamples = pathname === '/' && examplesInView;

  const isActive = (href: string) => {
    if (href === '/#examples') return onExamples;
    if (href === '/') return pathname === '/' && !onExamples;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Examples', href: '/#examples' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200' : 'bg-white border-b border-stone-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/logo.svg" 
                alt="ThinkHighly Apps Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`relative h-16 flex items-center font-medium text-[15px] transition-colors duration-200 after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:rounded-full after:transition-colors ${
                  isActive(item.href) ? 'text-ink after:bg-brand' : 'text-stone-600 hover:text-ink after:bg-transparent'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="bg-ink text-white px-5 py-2.5 rounded-full text-[15px] font-medium hover:bg-stone-700 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink p-2 rounded-md hover:bg-stone-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`block px-3 py-2 rounded-md font-medium ${
                  isActive(item.href) ? 'bg-brand-soft text-brand' : 'text-stone-700 hover:text-ink hover:bg-stone-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-stone-200">
              <div className="flex items-center space-x-4 px-3">
                <a href="mailto:info@thinkhighlyapps.co.za" className="flex items-center space-x-2 text-stone-700 hover:text-ink">
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
