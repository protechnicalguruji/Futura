import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Consultation() {
  return (
    <section className="py-[60px] md:py-[90px] lg:py-[140px] bg-bg-body">
      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="relative group">
          <img src="/images/consultation_interior.jpg" alt="Consultation" className="w-full h-[400px] md:h-[700px] object-cover rounded-[20px] md:rounded-[28px] shadow-2xl" />
          <div className="absolute bottom-4 md:bottom-10 left-4 right-4 md:left-10 md:right-10 bg-white/90 backdrop-blur-md p-6 md:p-10 rounded-[20px] md:rounded-[28px] shadow-2xl space-y-4 md:space-y-6">
            <div className="flex items-center gap-4"><Phone className="text-accent" /> <span>+91 72249 35780</span></div>
            <div className="flex items-center gap-4"><Mail className="text-accent" /> <span>invest@futuragroups.com</span></div>
            <div className="flex items-center gap-4"><Clock className="text-accent" /> <span>Mon-Sat: 10AM - 7PM</span></div>
          </div>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-[20px] md:rounded-[28px] border border-border shadow-2xl">
          <span className="text-accent font-medium tracking-widest uppercase text-[13px] md:text-[15px] mb-4 block">Let's Connect</span>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] mb-8 md:mb-10 tracking-tighter">Let's Find Your Perfect Investment.</h2>
          <form className="space-y-4 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-bg-body p-4 rounded-[16px] outline-none" />
                <input type="text" placeholder="Phone Number" className="w-full bg-bg-body p-4 rounded-[16px] outline-none" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full bg-bg-body p-4 rounded-[16px] outline-none" />
            <select className="w-full bg-bg-body p-4 rounded-[16px] outline-none">
                <option>Interested Project</option>
            </select>
            <select className="w-full bg-bg-body p-4 rounded-[16px] outline-none">
                <option>Preferred Meeting Type</option>
                <option>Site Visit</option>
                <option>Office Visit</option>
                <option>Video Call</option>
            </select>
            <input type="date" className="w-full bg-bg-body p-4 rounded-[16px] outline-none" />
            <textarea placeholder="Message" className="w-full bg-bg-body p-4 rounded-[16px] h-32 outline-none"></textarea>
            <button className="w-full bg-accent text-white py-4 rounded-full font-medium hover:bg-red-700 transition-all">Schedule Consultation</button>
          </form>
        </div>
      </div>
    </section>
  );
}
