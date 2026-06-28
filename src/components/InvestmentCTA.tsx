import { motion } from 'motion/react';

export default function InvestmentCTA() {
  return (
    <section className="py-[140px]">
        <div className="max-w-[1440px] mx-auto px-6">
            <div className="bg-bg-dark text-white p-20 rounded-[28px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                <div className='relative z-10'>
                    <h2 className="font-serif text-[48px] mb-4 tracking-tighter">Free Real Estate Investment Guide.</h2>
                    <p className='text-gray-400 text-[18px]'>Understand ROI, financing, appreciation and buying strategies.</p>
                </div>
                <div className='relative z-10 flex gap-4'>
                    <button className="bg-accent text-white px-10 py-4 rounded-full hover:bg-red-700 transition-all">Download PDF</button>
                    <button className="border border-white/20 text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all">Talk To Advisor</button>
                </div>
            </div>
        </div>
    </section>
  );
}
