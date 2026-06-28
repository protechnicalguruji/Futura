import { motion } from 'motion/react';

export function AwardsSection() {
    return (
        <section className="py-[140px] bg-bg-dark text-white">
            <div className="max-w-[1440px] mx-auto px-6">
                <h2 className="font-serif text-[60px] text-center mb-20 tracking-tighter text-white">Awards & Recognition</h2>
                <div className="space-y-10">
                    {[
                        { year: '2025', title: 'Best Luxury Developer' },
                        { year: '2024', title: 'Excellence in Innovation' }
                    ].map((a, i) => (
                        <div key={i} className="flex gap-10 border-b border-gray-800 pb-10">
                            <div className="text-[24px] font-bold text-accent">{a.year}</div>
                            <div className="text-[24px] font-medium">{a.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function OurProcessSection() {
  return (
    <section className="py-[140px] bg-bg-body">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="font-serif text-[60px] text-center mb-20 tracking-tighter">Our Process</h2>
        <div className="flex flex-col md:flex-row justify-between gap-10 relative">
            {['Consultation', 'Property Selection', 'Site Visit', 'Documentation', 'Investment', 'Support'].map((step, i) => (
                <div key={i} className="flex-1 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-bg-dark text-white flex items-center justify-center font-bold text-xl mb-6">{i+1}</div>
                    <h3 className="text-[20px] font-medium">{step}</h3>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
