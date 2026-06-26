import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProperties from './components/FeaturedProperties';
import Projects from './components/Projects';
import BookSiteVisit from './components/BookSiteVisit';
import DownloadBrochure from './components/DownloadBrochure';
import Calculators from './components/Calculators';
import { Reviews, Contact } from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-primary-navy w-full overflow-hidden">
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <About />
        <Projects />
        <BookSiteVisit />
        <Calculators />
        <DownloadBrochure />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
