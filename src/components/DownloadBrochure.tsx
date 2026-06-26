import { useState } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function DownloadBrochure() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Futura Groups, I would like to download the brochure.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}`;
    window.open(`https://wa.me/917224935780?text=${msg}`, '_blank');
    
    // Simulate download
    const link = document.createElement('a');
    link.href = '/brochure.pdf'; // Placeholder
    link.download = 'Futura_Groups_Brochure.pdf';
    link.click();
  };

  return (
    <section id="brochure" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="neo-card p-10 flex flex-col md:flex-row items-center gap-10">
          <div className='flex-1'>
            <h2 className="font-serif text-4xl mb-4">Download Our Brochure</h2>
            <p className='text-gray-light'>Get detailed insights into our premium properties and investment opportunities.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 flex-1 w-full">
            <input required type="text" placeholder="Full Name" className="neo-input p-4 w-full" onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input required type="text" placeholder="Phone Number" className="neo-input p-4 w-full" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            <input required type="email" placeholder="Email Address" className="neo-input p-4 w-full" onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <button className="neo-button w-full py-4 flex items-center justify-center gap-2"><Download size={20}/> Download Brochure</button>
          </form>
        </div>
      </div>
    </section>
  );
}
