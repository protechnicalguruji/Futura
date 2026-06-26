import { motion } from 'motion/react';

const projects = [
  { name: 'Skyline Tower', location: 'Dubai', category: 'Residential', description: 'Luxury apartments with skyline views.' },
  { name: 'Future Corporate Hub', location: 'Singapore', category: 'Commercial', description: 'Next-gen workspace ecosystem.' },
  { name: 'Emerald Gardens', location: 'London', category: 'Residential', description: 'Sustainable premium living.' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="bg-secondary-navy rounded-2xl overflow-hidden border border-white/10 hover:border-gold transition-all">
              <div className="h-64 bg-white/5" />
              <div className="p-6">
                <span className="text-gold text-xs uppercase tracking-widest">{p.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-1">{p.name}</h3>
                <p className="text-gray-light text-sm mb-4">{p.location}</p>
                <p className="text-gray-light font-light text-sm mb-6">{p.description}</p>
                <button className="w-full border border-gold text-gold py-3 rounded-lg hover:bg-gold hover:text-primary-navy transition-all">View Project</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
