import { useState } from 'react';
import { motion } from 'motion/react';
import { properties } from '../data/properties';

export default function BookSiteVisit() {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '', property: properties[0].name, notes: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Futura Groups, I would like to book a site visit.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0APreferred Date: ${formData.date}%0APreferred Time: ${formData.time}%0AProperty: ${formData.property}%0AMessage: ${formData.notes}%0A%0APlease confirm my visit.`;
    window.open(`https://wa.me/917224935780?text=${msg}`, '_blank');
  };

  return (
    <section id="book-visit" className="py-24 bg-secondary-navy">
      <div className="max-w-4xl mx-auto px-6">
        <div className="neo-card p-10">
          <h2 className="font-serif text-4xl mb-8 text-center">Book a Site Visit</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" className="neo-input p-4 w-full" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input required type="text" placeholder="Phone Number" className="neo-input p-4 w-full" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <input required type="date" className="neo-input p-4 w-full" onChange={(e) => setFormData({...formData, date: e.target.value})} />
                <input required type="time" className="neo-input p-4 w-full" onChange={(e) => setFormData({...formData, time: e.target.value})} />
            </div>
            <select className="neo-input w-full p-4" onChange={(e) => setFormData({...formData, property: e.target.value})}>
                {properties.map(p => <option key={p.name}>{p.name}</option>)}
            </select>
            <textarea placeholder="Additional Notes" className="neo-input w-full p-4 h-24" onChange={(e) => setFormData({...formData, notes: e.target.value})} />
            <button className="neo-button w-full py-4 text-lg">Book Site Visit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
