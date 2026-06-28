import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutFutura from './components/AboutFutura';
import FeaturedProjects from './components/FeaturedProjects';
import { WhyInvestSection, MarketInsights, InvestmentTimeline } from './components/InvestmentWhy';
import { ROICalculator, EMICalculator, AppreciationGraph } from './components/InvestmentCalculators';
import InvestmentCTA from './components/InvestmentCTA';
import InvestmentFAQ from './components/InvestmentFAQ';
import { Testimonials, VideoTestimonials } from './components/Testimonials';
import { GallerySection, ProgressSection } from './components/GalleryProgress';
import { MediaAwardsBlogs } from './components/MediaAwardsBlogs';
import Newsletter from './components/Newsletter';
import Consultation from './components/Consultation';
import { LocationsContact } from './components/LocationsContact';
import FinalCTA from './components/FinalCTA';
import FloatingUI from './components/FloatingUI';
import { WhyChooseUs, StatsSection, TrustSection } from './components/FeaturesStatsTrust';
import { AwardsSection, OurProcessSection } from './components/AwardsProcess';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import SEO from './components/SEO';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <HelmetProvider>
        <SEO title="Luxury Real Estate" description="Futura Groups offers premium residential and commercial developments." />
        <div className="min-h-screen bg-bg-body w-full overflow-hidden">
          <AnimatePresence>
            {loading && <LoadingScreen />}
          </AnimatePresence>
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <AboutFutura />
            <FeaturedProjects />
            <WhyInvestSection />
            <MarketInsights />
            <ROICalculator />
            <EMICalculator />
            <AppreciationGraph />
            <InvestmentTimeline />
            <InvestmentCTA />
            <InvestmentFAQ />
            <Testimonials />
            <VideoTestimonials />
            <GallerySection />
            <ProgressSection />
            <MediaAwardsBlogs />
            <Newsletter />
            <WhyChooseUs />
            <StatsSection />
            <AwardsSection />
            <OurProcessSection />
            <TrustSection />
            <Consultation />
            <LocationsContact />
            <FinalCTA />
          </main>
          <Footer />
          <FloatingUI />
        </div>
    </HelmetProvider>
  );
}
