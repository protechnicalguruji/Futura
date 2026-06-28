import { motion } from 'motion/react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            src="/images/hero_luxury_villa.jpg" 
            alt="Hero" 
            className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full pt-32 pb-24 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent font-medium tracking-widest uppercase text-[15px] mb-6 block"
          >
            Futura Groups
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-[72px] md:text-[88px] leading-[1] mb-8 tracking-tighter"
          >
            Building Tomorrow's Landmarks Today.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[18px] text-gray-200 font-light mb-10 max-w-lg"
          >
            Premium residential and commercial developments crafted for investors, businesses, and families seeking exceptional long-term value.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
            <MagneticButton>
                <button className="bg-accent text-white px-10 py-4 rounded-full text-[15px] hover:bg-red-700 transition-all">Explore Projects</button>
            </MagneticButton>
            <MagneticButton>
                <button className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full text-[15px] hover:bg-white/20 transition-all">Book Site Visit</button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Floating Search Panel (Bottom of Hero) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-6 right-6 md:left-auto md:right-auto md:max-w-[1200px] w-full bg-white/90 backdrop-blur-md p-6 rounded-[28px] shadow-2xl flex flex-col md:flex-row items-center gap-6"
      >
        <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-border py-2">
            <label className="text-[12px] text-text-secondary uppercase">Property Type</label>
            <select className="w-full bg-transparent font-medium outline-none">
                <option>Residential</option>
                <option>Commercial</option>
            </select>
        </div>
        <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-border py-2">
            <label className="text-[12px] text-text-secondary uppercase">Budget</label>
            <select className="w-full bg-transparent font-medium outline-none">
                <option>Any Budget</option>
                <option>₹1 Cr - ₹5 Cr</option>
            </select>
        </div>
        <div className="flex-1 w-full py-2">
            <label className="text-[12px] text-text-secondary uppercase">Location</label>
            <select className="w-full bg-transparent font-medium outline-none">
                <option>Select Location</option>
            </select>
        </div>
        <button className="w-full md:w-auto bg-text-primary text-white px-10 py-4 rounded-full hover:bg-accent transition-all">Search</button>
      </motion.div>
    </section>
  );
}
