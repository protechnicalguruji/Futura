import { motion } from 'motion/react';
import { properties } from '../data/properties';
import { MessageCircle } from 'lucide-react';

export default function FeaturedProperties() {
  const whatsappUrl = (name: string) => 
    `https://wa.me/917224935780?text=Hello%20Futura%20Groups,%20I%20am%20interested%20in%20${name}.`;

  return (
    <section id="properties" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl mb-16 text-center">Featured Properties</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }} 
              className="group relative neo-card overflow-hidden transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 to-transparent" />
                <span className="absolute top-4 left-4 bg-gold/90 text-primary-navy text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">{p.category}</span>
                <span className="absolute bottom-4 left-4 text-white font-bold">{p.price}</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
                <p className="text-gold text-sm mb-2">{p.location} | <span className='text-gray-light'>{p.status}</span></p>
                <p className="text-gray-light font-light text-sm mb-8 leading-relaxed">{p.description}</p>
                <div className="flex gap-4">
                  <button className="flex-1 neo-button py-3 text-sm">View Details</button>
                  <a href={whatsappUrl(p.name)} target="_blank" className="p-3 bg-green-600 rounded-xl hover:scale-110 transition-transform"><MessageCircle size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
