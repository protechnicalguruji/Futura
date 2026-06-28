import { motion } from 'motion/react';
import { Star, Play, PlayCircle } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-[140px] bg-bg-body">
      <div className="max-w-[1440px] mx-auto px-6">
        <span className="text-accent font-medium tracking-widest uppercase text-[15px] mb-6 block">Client Stories</span>
        <h2 className="font-serif text-[60px] leading-[1.1] mb-20 tracking-tighter">Our Greatest Achievement Is<br/>Our Clients' Trust.</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-10 rounded-[28px] border border-border shadow-lg">
                <div className="flex text-accent mb-4"><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /></div>
                <p className="text-text-secondary mb-8 leading-relaxed italic">"Futura Groups exceeded all expectations. Their commitment to quality and transparency made our investment journey seamless."</p>
                <div className="flex items-center gap-4">
                    <img src={`/images/reviewer_avatar_${i}.jpg`} alt="Client" className="w-14 h-14 rounded-full object-cover" />
                    <div>
                        <div className="font-bold">John Doe</div>
                        <div className="text-[14px] text-text-secondary">Purchased Skyline Tower</div>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VideoTestimonials() {
    return (
        <section className="py-[140px] bg-bg-dark text-white">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    {[1, 2].map(i => (
                        <div key={i} className="relative group cursor-pointer overflow-hidden rounded-[28px]">
                            <img src={`/images/video_thumb_${i}.jpg`} alt="Video" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <PlayCircle size={64} className="text-white opacity-80" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
