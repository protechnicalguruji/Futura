import { motion } from 'motion/react';
import { Shield, Building2, Eye, Users } from 'lucide-react';

export default function About() {
  const features = [
    { icon: Shield, title: 'Trusted Experts' },
    { icon: Building2, title: 'Premium Projects' },
    { icon: Eye, title: 'Transparent Process' },
    { icon: Users, title: 'Customer First' },
  ];

  return (
    <section id="about" className="py-24 bg-secondary-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <img src="/images/about_office_interior.jpg" alt="Office Interior" className="h-[400px] w-full object-cover rounded-2xl" />
          <div>
            <h2 className="font-serif text-4xl mb-6">Redefining Luxury Real Estate</h2>
            <p className="text-gray-light text-lg font-light leading-relaxed">Futura Groups stands at the intersection of architectural excellence and trust. We curate premium spaces designed to elevate lifestyle and ensure sustainable long-term value.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="p-8 border border-white/10 rounded-xl hover:border-gold transition-colors">
              <f.icon className="w-8 h-8 text-gold mb-6" />
              <h3 className="text-xl font-medium">{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
