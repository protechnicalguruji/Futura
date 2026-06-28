import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faq = [
    { q: 'Why invest now?', a: 'Real estate remains one of the safest and most appreciation-friendly asset classes for long-term wealth creation.' },
    { q: 'How does appreciation work?', a: 'Appreciation is driven by location demand, infrastructure development, and economic growth.' },
    { q: 'What financing options exist?', a: 'We offer collaborations with leading banks to provide tailored home loan solutions.' },
];

export default function InvestmentFAQ() {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section className="py-[140px] bg-bg-body">
            <div className="max-w-[800px] mx-auto px-6">
                <h2 className="font-serif text-[60px] text-center mb-20 tracking-tighter">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faq.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[28px] border border-border">
                            <button className="flex justify-between w-full text-left font-medium text-[20px]" onClick={() => setOpen(open === i ? null : i)}>
                                {item.q}
                                {open === i ? <Minus className="text-accent" /> : <Plus className="text-accent" />}
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                        <p className="pt-6 text-text-secondary">{item.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
