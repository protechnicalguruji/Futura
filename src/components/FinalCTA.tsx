import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="py-[140px] bg-bg-body">
        <div className="max-w-[1440px] mx-auto px-6">
            <div className="bg-bg-dark text-white p-20 rounded-[28px] text-center relative overflow-hidden flex flex-col items-center">
                <div className='relative z-10 max-w-2xl'>
                    <h2 className="font-serif text-[60px] mb-6 tracking-tighter">Your Future Starts With The Right Investment.</h2>
                    <p className='text-gray-400 text-[20px] mb-12'>Whether you're buying your first home or making your next investment, Futura Groups is here to guide you.</p>
                    <div className='flex gap-6 justify-center'>
                        <button className="bg-accent text-white px-10 py-4 rounded-full text-[15px] hover:bg-red-700 transition-all">Explore Projects</button>
                        <button className="bg-white text-bg-dark px-10 py-4 rounded-full text-[15px] hover:bg-gray-200 transition-all">Book Site Visit</button>
                        <button className="border border-white/20 text-white px-10 py-4 rounded-full text-[15px] hover:bg-white/10 transition-all">Talk To Advisor</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
