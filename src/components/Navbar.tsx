import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Projects', 'About', 'Why Invest', 'Contact'];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-border' : 'bg-transparent py-8'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-serif font-bold text-text-primary tracking-tighter">FUTURA</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-[15px] font-medium text-text-primary">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="relative group hover:text-accent transition-colors">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-text-primary text-white px-8 py-3 rounded-full hover:bg-accent transition-all text-[15px]">Book Site Visit</button>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border p-6 shadow-xl"
          >
            <div className="flex flex-col gap-6 text-[15px] font-medium">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMenuOpen(false)}>{item}</a>
              ))}
              <button className="bg-text-primary text-white px-8 py-3 rounded-full hover:bg-accent transition-all text-[15px]">Book Site Visit</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
