import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-secondary-navy">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl mb-16 text-center">Client Experiences</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="neo-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/reviewer_avatar_1.jpg" alt="Reviewer" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="text-gold mb-1 text-sm">★★★★★</div>
                  <div className="font-bold">John Doe</div>
                </div>
              </div>
              <p className="text-gray-light font-light leading-relaxed">"Futura Groups exceeded our expectations in every aspect. Their transparency and expertise are unmatched."</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <motion.div className="neo-card p-10">
          <h2 className="font-serif text-4xl mb-8">Let's Build Something Great</h2>
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4 text-gray-light"><Phone className="text-gold" /> +91 7224935780</div>
            <div className="flex items-center gap-4 text-gray-light"><Mail className="text-gold" /> sparkstation.x@gmail.com</div>
            <div className="flex items-center gap-4 text-gray-light"><Instagram className="text-gold" /> @futura_groups</div>
          </div>
          <div className="flex gap-4">
            <a href="tel:+917224935780" className="p-4 bg-gold text-primary-navy rounded-full hover:scale-110 transition-transform"><Phone size={20} /></a>
            <a href="mailto:sparkstation.x@gmail.com" className="p-4 bg-white/10 rounded-full hover:scale-110 transition-transform"><Mail size={20} /></a>
            <a href="#" className="p-4 bg-white/10 rounded-full hover:scale-110 transition-transform"><Instagram size={20} /></a>
            <a href="https://wa.me/917224935780" className="p-4 bg-green-600 rounded-full hover:scale-110 transition-transform"><MessageCircle size={20} /></a>
          </div>
        </motion.div>
        <div className="h-full min-h-[400px] neo-card overflow-hidden">
           {/* Placeholder for map */}
           <div className="w-full h-full flex items-center justify-center text-gray-light">Google Maps Location</div>
        </div>
      </div>
    </section>
  );
}
