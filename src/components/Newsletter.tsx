import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-[140px]">
        <div className="max-w-[1440px] mx-auto px-6">
            <div className="bg-bg-dark text-white p-20 rounded-[28px] flex flex-col md:flex-row items-center justify-between gap-10">
                <div>
                    <h2 className="font-serif text-[48px] mb-4 tracking-tighter">Stay Updated With Futura.</h2>
                    <p className='text-gray-400 text-[18px]'>Receive project launches, investment insights and exclusive offers.</p>
                </div>
                <div className='flex gap-4 w-full md:w-auto'>
                    <input type="email" placeholder="Email Address" className='bg-white/10 px-8 py-4 rounded-full text-white w-full md:w-[300px]' />
                    <button className="bg-accent text-white px-10 py-4 rounded-full hover:bg-red-700 transition-all">Subscribe</button>
                </div>
            </div>
        </div>
    </section>
  );
}
