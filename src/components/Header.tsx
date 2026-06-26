import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-navy/80 backdrop-blur-md border-b border-gold/30' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-2xl font-serif font-bold text-white tracking-widest">FUTURA</div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-light">
          {['Home', 'About', 'Projects', 'Reviews', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
