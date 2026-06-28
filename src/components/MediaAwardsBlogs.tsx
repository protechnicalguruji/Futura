import { motion } from 'motion/react';

export function MediaAwardsBlogs() {
  return (
    <section className="py-[140px] bg-bg-body">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="font-serif text-[60px] text-center mb-20 tracking-tighter">Featured In.</h2>
        <div className="flex justify-between grayscale opacity-60 mb-20">
            {['Economic Times', 'Business Standard', 'Forbes', 'Construction World'].map(p => <div key={p} className="text-[24px] font-bold">{p}</div>)}
        </div>

        <h2 className="font-serif text-[60px] text-center mb-20 tracking-tighter">Insights & Trends.</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-6 rounded-[28px] border border-border">
                    <img src={`/images/blog_${i}.jpg`} alt="Blog" className="w-full h-[250px] object-cover rounded-[20px] mb-6" />
                    <div className="text-accent text-[14px] font-medium mb-2 uppercase">Real Estate</div>
                    <h3 className="text-[24px] font-medium mb-4">Future of Luxury Living in India</h3>
                    <p className="text-text-secondary mb-6">Explore the shifting trends in premium residential developments.</p>
                    <button className="text-accent font-medium">Read More</button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
