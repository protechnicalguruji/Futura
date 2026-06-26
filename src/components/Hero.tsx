import { motion } from 'motion/react';
import { useState } from 'react';
import React from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    interestedIn: 'Residential',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/917224935780?text=${encodeURIComponent(`Hello Futura Groups,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Budget: ${formData.budget}
Interested In: ${formData.interestedIn}
Message: ${formData.message}

I would like to know more about your projects.`)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 w-full overflow-hidden">
      <img src="/images/hero_luxury_villa.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Luxury Villa" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-secondary-navy/80 to-primary-navy" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">Building Tomorrow's Opportunities</h1>
          <p className="text-lg sm:text-xl text-gray-light font-light mb-8 max-w-lg">Premium real estate solutions built on trust, transparency, and long-term value.</p>
        </motion.div>

        <motion.form 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input required type="text" placeholder="Full Name" className="bg-transparent border border-white/20 p-3 rounded-lg text-sm focus:border-gold outline-none w-full" onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input required type="text" placeholder="Phone Number" className="bg-transparent border border-white/20 p-3 rounded-lg text-sm focus:border-gold outline-none w-full" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
          <input required type="email" placeholder="Email Address" className="w-full bg-transparent border border-white/20 p-3 rounded-lg text-sm mb-4 focus:border-gold outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <input type="text" placeholder="Investment Budget" className="w-full bg-transparent border border-white/20 p-3 rounded-lg text-sm mb-4 focus:border-gold outline-none" onChange={(e) => setFormData({...formData, budget: e.target.value})} />
          <select className="w-full bg-secondary-navy border border-white/20 p-3 rounded-lg text-sm mb-4 focus:border-gold outline-none" onChange={(e) => setFormData({...formData, interestedIn: e.target.value})}>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Investment</option>
          </select>
          <textarea placeholder="Message" className="w-full bg-transparent border border-white/20 p-3 rounded-lg text-sm mb-6 focus:border-gold outline-none h-24" onChange={(e) => setFormData({...formData, message: e.target.value})} />
          <button className="w-full bg-gold text-primary-navy font-bold py-4 rounded-lg hover:bg-gold/90 transition-all shadow-lg hover:shadow-gold/20">Send Inquiry</button>
        </motion.form>
      </div>
    </section>
  );
}
