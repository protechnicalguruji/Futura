import { motion } from 'motion/react';

const projects = [
  { name: 'Skyline Tower', location: 'Dubai', category: 'Residential', description: 'Luxury apartments with skyline views.', image: '/images/project_villa.jpg' },
  { name: 'Future Corporate Hub', location: 'Singapore', category: 'Commercial', description: 'Next-gen workspace ecosystem.', image: '/images/project_apartment.jpg' },
  { name: 'Emerald Gardens', location: 'London', category: 'Residential', description: 'Sustainable premium living.', image: '/images/project_commercial.jpg' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl mb-16 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }} 
              className="group relative neo-card overflow-hidden transition-all"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 to-transparent" />
                <span className="absolute top-4 left-4 bg-gold/90 text-primary-navy text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">{p.category}</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-gold text-sm mb-4">{p.location}</p>
                <p className="text-gray-light font-light text-sm mb-8 leading-relaxed">{p.description}</p>
                <button className="neo-button w-full py-3">View Project</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
