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
      <div className="absolute inset-0 bg-primary-navy/60" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full pt-20">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Futura Groups</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">Building Tomorrow's Opportunities</h1>
          <p className="text-lg md:text-xl text-gray-light font-light mb-8 max-w-lg">Premium real estate solutions built on trust, transparency, and long-term value.</p>
        </motion.div>

        <motion.form 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-3xl w-full max-w-lg lg:ml-auto"
        >
          <h3 className="font-serif text-2xl mb-6">Inquire Now</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input required type="text" placeholder="Full Name" className="bg-transparent border border-white/20 p-4 rounded-xl text-sm focus:border-gold outline-none w-full" onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input required type="text" placeholder="Phone Number" className="bg-transparent border border-white/20 p-4 rounded-xl text-sm focus:border-gold outline-none w-full" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
          <input required type="email" placeholder="Email Address" className="w-full bg-transparent border border-white/20 p-4 rounded-xl text-sm mb-4 focus:border-gold outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <input type="text" placeholder="Investment Budget" className="w-full bg-transparent border border-white/20 p-4 rounded-xl text-sm mb-4 focus:border-gold outline-none" onChange={(e) => setFormData({...formData, budget: e.target.value})} />
          <select className="w-full bg-secondary-navy border border-white/20 p-4 rounded-xl text-sm mb-4 focus:border-gold outline-none" onChange={(e) => setFormData({...formData, interestedIn: e.target.value})}>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Investment</option>
          </select>
          <textarea placeholder="Message" className="w-full bg-transparent border border-white/20 p-4 rounded-xl text-sm mb-6 focus:border-gold outline-none h-24" onChange={(e) => setFormData({...formData, message: e.target.value})} />
          <button className="w-full bg-gradient-to-r from-gold/90 to-gold text-primary-navy font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all">Send Inquiry</button>
        </motion.form>
      </div>
    </section>
  );
}
