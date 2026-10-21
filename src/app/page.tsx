import HeroSection from '@/components/sections/HeroSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesPreview from '@/components/sections/ServicesPreview';
import WebsiteExamples from '@/components/sections/WebsiteExamples';
import WebsiteFeatures from '@/components/sections/WebsiteFeatures';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WebsiteExamples />
        <WebsiteFeatures />
        <HowItWorks />
        <ServicesPreview />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
