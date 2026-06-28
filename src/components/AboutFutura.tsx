import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function AboutFutura() {
  return (
    <>
      {/* About Section */}
      <section className="py-[140px] bg-bg-body">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="/images/about_office_interior.jpg" 
                alt="About Futura" 
                className="w-full h-[600px] object-cover rounded-[28px] shadow-2xl" 
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[28px] shadow-2xl">
              <div className="text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-text-secondary font-medium">Years Experience</div>
            </div>
          </div>
          <div>
            <span className="text-accent font-medium tracking-widest uppercase text-[15px] mb-6 block">About Futura</span>
            <h2 className="font-serif text-[60px] leading-[1.1] mb-8 tracking-tighter">Crafting Landmarks, <br/> Building Trust.</h2>
            <p className="text-[18px] text-text-secondary mb-8 leading-relaxed">Futura Groups stands at the intersection of architectural excellence and trust. We curate premium spaces designed to elevate lifestyle and ensure sustainable long-term value for investors, businesses, and families.</p>
            <ul className="space-y-4 mb-10">
                {['Premium Locations', 'Modern Infrastructure', 'Trusted Investment', 'Timely Delivery'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-[18px] font-medium"><Check className="text-accent" /> {item}</li>
                ))}
            </ul>
            <button className="bg-text-primary text-white px-10 py-4 rounded-full text-[15px] hover:bg-accent transition-all">Learn More</button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-[140px] bg-bg-dark text-white">
        <div className="max-w-[850px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[60px] leading-[1.1] mb-8 tracking-tighter">We Don't Just Build Properties.<br/>We Build Futures.</h2>
          <p className="text-[20px] text-gray-400 font-light leading-relaxed">Our philosophy is rooted in meticulous planning, sustainable design, and a steadfast commitment to delivering exceptional quality in every square foot we build.</p>
        </div>
      </section>
    </>
  );
}
