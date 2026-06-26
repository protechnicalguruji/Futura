import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-4xl mb-8">Let's Build Something Great Together</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-light">
              <Phone className="text-gold" /> +91 7224935780
            </div>
            <div className="flex items-center gap-4 text-gray-light">
              <Mail className="text-gold" /> sparkstation.x@gmail.com
            </div>
            <div className="flex items-center gap-4 text-gray-light">
              <Instagram className="text-gold" /> @futura_groups
            </div>
          </div>
          <div className="flex gap-4 mt-10">
            <a href="tel:+917224935780" className="p-4 bg-gold text-primary-navy rounded-full"><Phone /></a>
            <a href="mailto:sparkstation.x@gmail.com" className="p-4 bg-white/10 rounded-full"><Mail /></a>
            <a href="#" className="p-4 bg-white/10 rounded-full"><Instagram /></a>
            <a href="https://wa.me/917224935780" className="p-4 bg-green-600 rounded-full"><MessageCircle /></a>
          </div>
        </div>
        <div className="h-80 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-gray-light">
          Google Maps Placeholder
        </div>
      </div>
    </section>
  );
}
