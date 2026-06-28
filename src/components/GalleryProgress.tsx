import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function GallerySection() {
  const images = ['Exterior', 'Interior', 'Amenities', 'Clubhouse', 'Landscape', 'Construction'];
  return (
    <section className="py-[140px] bg-bg-body">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="font-serif text-[60px] text-center mb-20 tracking-tighter">Experience Every Detail.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, i) => (
                <div key={i} className={`relative overflow-hidden rounded-[28px] group ${i % 3 === 0 ? 'row-span-2' : ''}`} aria-label={`Gallery image: ${img}`}>
                    <img src={`/images/gallery_${i}.jpg`} alt={`Project ${img} view`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 text-white font-medium">{img}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export function ProgressSection() {
    const stages = ['Planning', 'Foundation', 'Structure', 'Finishing', 'Landscaping', 'Possession'];
    return (
        <section className="py-[140px] bg-bg-dark text-white">
            <div className="max-w-[1440px] mx-auto px-6">
                <h2 className="font-serif text-[60px] text-center mb-20 tracking-tighter">Building With Transparency.</h2>
                <div className="space-y-10">
                    {stages.map((stage, i) => (
                        <div key={i} className="flex gap-10 items-center">
                            <div className="w-24 font-bold text-accent">{stage}</div>
                            <div className="flex-1 h-4 bg-white/10 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: `${(i+1)*15}%` }} className="h-full bg-accent rounded-full" />
                            </div>
                            <div className="w-20 text-right">{ (i+1)*15 }%</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
