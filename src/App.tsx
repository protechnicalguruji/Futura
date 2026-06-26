import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-primary-navy w-full overflow-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
