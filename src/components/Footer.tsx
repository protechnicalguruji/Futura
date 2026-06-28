export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10 rounded-t-[48px]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-1">
            <div className="text-2xl font-serif font-bold text-white mb-6 tracking-tighter">FUTURA</div>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-6">Building tomorrow's landmarks today with a focus on trust, quality, and long-term value.</p>
          </div>
          {['Quick Links', 'Projects', 'Support', 'Contact'].map(section => (
            <div key={section}>
              <h4 className="font-bold mb-6 text-[18px]">{section}</h4>
              <ul className="space-y-4 text-gray-400 text-[15px]">
                {['Home', 'Projects', 'About', 'Invest', 'Contact'].map(link => <li key={link}>{link}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-10 flex justify-between text-gray-500 text-[14px]">
          <p>© 2026 Futura Groups. Designed by Spark Station.</p>
          <div className='flex gap-8'>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
