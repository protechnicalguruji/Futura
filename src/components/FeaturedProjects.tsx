import { motion } from 'motion/react';
import { properties } from '../data/properties';
import { ArrowRight, MapPin, Calendar, Building, CheckCircle2, ShieldCheck, Zap, Umbrella, Trees, Car, Users, Dumbbell, Coffee } from 'lucide-react';

const amenityIcons: Record<string, any> = {
    'Swimming Pool': Umbrella,
    'Fitness Center': Dumbbell,
    '24×7 Security': ShieldCheck,
    'High Speed Elevators': Zap,
    'EV Charging': Zap,
    'Smart Security': ShieldCheck,
    'Landscape Garden': Trees,
    'Club House': Coffee,
    'Children Play Area': Users
};

export default function FeaturedProjects() {
  return (
    <section className="py-[140px] bg-bg-body">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-20">
            <span className="text-accent font-medium tracking-widest uppercase text-[15px] mb-6 block">Featured Developments</span>
            <h2 className="font-serif text-[60px] leading-[1.1] mb-8 tracking-tighter">Discover Spaces<br/>Designed For Tomorrow.</h2>
        </div>

        <div className="space-y-[150px]">
          {properties.map((p, i) => (
            <motion.div 
                key={p.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-16"
            >
              {/* Showcase */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`relative group ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                    <img src={p.image} alt={`Luxury project: ${p.name}`} className="w-full h-[400px] md:h-[600px] object-cover rounded-[28px] shadow-2xl" />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full font-medium text-[15px]" aria-label={`Project status: ${p.status}`}>{p.status}</div>
                </div>

                <div className={`${i % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                    <h3 className="font-serif text-[36px] md:text-[48px] tracking-tighter mb-4" id={`project-${i}`}>{p.name}</h3>
                    <p className="text-[16px] md:text-[18px] text-text-secondary mb-8 leading-relaxed">{p.description}</p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-10">
                        <div>
                            <div className="text-text-secondary text-[12px] md:text-[14px] uppercase mb-1">Starting Price</div>
                            <div className="font-medium text-[18px] md:text-[20px]">{p.price}</div>
                        </div>
                        <div>
                            <div className="text-text-secondary text-[12px] md:text-[14px] uppercase mb-1">Possession</div>
                            <div className="font-medium text-[18px] md:text-[20px]">{p.possession}</div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="w-full sm:w-auto bg-text-primary text-white px-8 py-4 rounded-full text-[15px] hover:bg-accent transition-all">Explore Project</button>
                        <button className="w-full sm:w-auto border border-border px-8 py-4 rounded-full text-[15px] hover:bg-bg-body transition-all">Download Brochure</button>
                    </div>
                </div>
              </div>

              {/* Amenities Bento */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {p.amenities.map(a => {
                    const Icon = amenityIcons[a] || CheckCircle2;
                    return (
                        <div key={a} className="bg-white p-6 md:p-8 rounded-[20px] md:rounded-[28px] border border-border flex items-center gap-3 md:gap-4 hover:border-accent transition-all">
                            <Icon className="text-accent w-6 h-6 md:w-8 md:h-8" />
                            <span className="font-medium text-[14px] md:text-[16px]">{a}</span>
                        </div>
                    )
                })}
              </div>

              {/* Comparison Strip */}
              <div className="bg-white p-10 rounded-[28px] border border-border flex items-center justify-between">
                <div className="font-medium">{p.name}</div>
                <div className="text-text-secondary">{p.location}</div>
                <div className="text-text-secondary">{p.area}</div>
                <div className="text-text-secondary">{p.status}</div>
                <button className="text-accent font-medium hover:underline">View Comparison</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
