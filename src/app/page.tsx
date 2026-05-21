import HeroSection from '@/components/sections/HeroSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesPreview from '@/components/sections/ServicesPreview';
import PortfolioShowcase from '@/components/sections/PortfolioShowcase';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesPreview />
        <PortfolioShowcase />
        <WhyChooseUs />
       
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
