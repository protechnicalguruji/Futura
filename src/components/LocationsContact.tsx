import { motion } from 'motion/react';
import { Phone, MessageSquare, Mail, MessageCircle, Calendar, Download } from 'lucide-react';

export function LocationsContact() {
  return (
    <section className="py-[140px] bg-bg-dark text-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="font-serif text-[60px] text-center mb-20 tracking-tighter">Visit Our Experience Centre.</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[1, 2, 3].map(i => (
                <div key={i} className="bg-white/5 p-8 rounded-[28px] border border-white/10 hover:border-accent transition-all">
                    <div className='w-full h-40 bg-gray-800 rounded-[20px] mb-6'></div>
                    <h3 className='text-[24px] font-medium mb-2'>Futura Experience Centre - {i === 1 ? 'Mumbai' : i === 2 ? 'Gurgaon' : 'Bangalore'}</h3>
                    <p className='text-gray-400 text-[15px] mb-6'>Ground Floor, Premium Business Hub, {i === 1 ? 'BKC' : i === 2 ? 'DLF CyberCity' : 'Whitefield'}</p>
                    <div className='flex gap-4'>
                        <button className='bg-white text-bg-dark px-6 py-3 rounded-full text-[13px] font-medium'>Get Directions</button>
                        <button className='border border-white/20 px-6 py-3 rounded-full text-[13px]'>Call Now</button>
                    </div>
                </div>
            ))}
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
                { title: 'Call Us', icon: Phone },
                { title: 'WhatsApp', icon: MessageCircle },
                { title: 'Email', icon: Mail },
                { title: 'Live Chat', icon: MessageSquare },
                { title: 'Schedule', icon: Calendar },
                { title: 'Brochure', icon: Download },
            ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className="bg-white/5 p-8 rounded-[28px] border border-white/10 text-center flex flex-col items-center gap-4">
                    <item.icon className="w-10 h-10 text-accent" />
                    <span className="font-medium text-[15px]">{item.title}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
