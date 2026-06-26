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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative group">
            <img src="/images/about_office_interior.jpg" alt="Office Interior" className="h-[500px] w-full object-cover rounded-3xl shadow-premium" />
            <div className="absolute -bottom-6 -right-6 neo-card p-6 hidden md:block">
              <div className="text-3xl font-bold text-gold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-4xl mb-6">Redefining Luxury Real Estate</h2>
            <p className="text-gray-light text-lg font-light leading-relaxed mb-8">Futura Groups stands at the intersection of architectural excellence and trust. We curate premium spaces designed to elevate lifestyle and ensure sustainable long-term value.</p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="neo-card p-6 flex flex-col items-center text-center">
                  <f.icon className="w-8 h-8 text-gold mb-3" />
                  <h3 className="text-sm font-medium">{f.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
