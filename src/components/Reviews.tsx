export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-secondary-navy">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl mb-12 text-center">Client Experiences</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/reviewer_avatar_1.jpg" alt="Reviewer" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="text-gold mb-1 text-sm">★★★★★</div>
                  <div className="font-bold">John Doe</div>
                </div>
              </div>
              <p className="text-gray-light font-light mb-6">"Futura Groups exceeded our expectations in every aspect. Their transparency and expertise are unmatched."</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
