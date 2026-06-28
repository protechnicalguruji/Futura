import { motion } from 'motion/react';
import { MapPin, TrendingUp, FileText, Wrench, Users, Brain, Lightbulb, Leaf } from 'lucide-react';

const features = [
    { title: 'Premium Locations', icon: MapPin },
    { title: 'Future Appreciation', icon: TrendingUp },
    { title: 'Transparent Documentation', icon: FileText },
    { title: 'Construction Quality', icon: Wrench },
    { title: 'Customer Satisfaction', icon: Users },
    { title: 'Expert Team', icon: Brain },
    { title: 'Smart Investment', icon: Lightbulb },
    { title: 'Sustainable Development', icon: Leaf },
];

export function WhyChooseUs() {
  return (
    <section className="py-[140px] bg-bg-body">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="font-serif text-[60px] text-center mb-20 tracking-tighter">Why Choose Futura?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          {features.map((f, i) => (
            <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className={`bg-white p-8 rounded-[28px] border border-border flex flex-col justify-between ${i % 3 === 0 ? 'lg:col-span-2' : ''}`}
            >
              <f.icon className="w-10 h-10 text-accent" />
              <h3 className="text-[24px] font-medium">{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
    const stats = [
        { label: 'Years Experience', value: '10+' },
        { label: 'Happy Families', value: '250+' },
        { label: 'Project Value', value: '₹500 Cr+' },
        { label: 'Legal Compliance', value: '100%' },
        { label: 'Upcoming Projects', value: '15+' },
    ];
    return (
        <section className="py-[140px] bg-bg-dark text-white">
            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10">
                {stats.map((s, i) => (
                    <div key={i} className="text-center">
                        <div className="text-[48px] font-bold text-accent mb-2">{s.value}</div>
                        <div className="text-gray-400 text-[15px]">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export function TrustSection() {
    return (
        <section className="py-[140px] bg-bg-body">
            <div className="max-w-[1440px] mx-auto px-6 text-center">
                <h2 className="font-serif text-[40px] mb-16 tracking-tighter">Trusted By Leading Partners</h2>
                <div className="flex justify-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
                    {['Bank A', 'Legal Partners', 'Architek', 'RERA'].map(p => <div key={p} className="text-[20px] font-bold">{p}</div>)}
                </div>
            </div>
        </section>
    )
}
