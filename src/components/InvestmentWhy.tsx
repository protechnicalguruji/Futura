import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, BarChart3, Users, FileText, Zap } from 'lucide-react';

const whyInvest = [
    { title: 'High ROI Potential', icon: TrendingUp, desc: 'Optimized returns through strategic selection.' },
    { title: 'Prime Locations', icon: MapPin, desc: 'Properties in high-growth corridors.' },
    { title: 'Rapid Infrastructure', icon: Zap, desc: 'Proximity to upcoming development hubs.' },
    { title: 'Strong Rental Demand', icon: Users, desc: 'High occupancy potential for investors.' },
    { title: 'Legal Transparency', icon: FileText, desc: 'RERA-approved and clear titles.' },
    { title: 'Future Appreciation', icon: TrendingUp, desc: 'Long-term value compounding assets.' },
];

export function WhyInvestSection() {
    return (
        <section className="py-[140px] bg-bg-body">
            <div className="max-w-[1440px] mx-auto px-6">
                <span className="text-accent font-medium tracking-widest uppercase text-[15px] mb-6 block">Smart Investment</span>
                <h2 className="font-serif text-[60px] leading-[1.1] mb-20 tracking-tighter">Invest Today.<br/>Grow Tomorrow.</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whyInvest.map((item, i) => (
                        <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-10 rounded-[28px] border border-border hover:border-accent transition-all">
                            <item.icon className="w-12 h-12 text-accent mb-6" />
                            <h3 className="text-[24px] font-medium mb-4">{item.title}</h3>
                            <p className="text-text-secondary">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function MarketInsights() {
    const insights = ['Residential Growth', 'Commercial Demand', 'Infrastructure Expansion', 'Smart City Development', 'Population Growth', 'Investment Security'];
    return (
        <section className="py-[140px] bg-bg-dark text-white">
            <div className="max-w-[1440px] mx-auto px-6">
                <h2 className="font-serif text-[60px] text-center mb-20 tracking-tighter">Real Estate That Outperforms.</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {insights.map((insight, i) => (
                        <div key={i} className="border border-white/10 p-8 rounded-[28px] hover:bg-white/5 transition-all">
                            <h3 className="text-[24px] font-medium mb-4">{insight}</h3>
                            <div className="h-24 flex items-end gap-2">
                                {[40, 60, 45, 80, 70, 95].map((h, j) => (
                                    <motion.div key={j} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} className="flex-1 bg-accent/50 rounded-t-lg" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function InvestmentTimeline() {
    const steps = ['Today', 'Booking', 'Construction', 'Possession', 'Appreciation', 'Future Wealth'];
    return (
        <section className="py-[140px] bg-bg-body">
            <div className="max-w-[1440px] mx-auto px-6">
                <h2 className="font-serif text-[60px] text-center mb-20 tracking-tighter">Investment Timeline</h2>
                <div className="flex justify-between items-center relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -z-0" />
                    {steps.map((step, i) => (
                        <div key={i} className="z-10 flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-accent border-4 border-white mb-4" />
                            <div className="font-medium">{step}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
import { MapPin } from 'lucide-react';
