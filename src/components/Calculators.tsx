import { useState } from 'react';
import { motion } from 'motion/react';

export default function Calculators() {
  // ROI Calculator State
  const [roi, setRoi] = useState({ amount: 1000000, appreciation: 5, years: 5 });
  const futureValue = roi.amount * Math.pow((1 + roi.appreciation / 100), roi.years);
  const totalProfit = futureValue - roi.amount;
  const growth = (totalProfit / roi.amount) * 100;

  // EMI Calculator State
  const [emi, setEmi] = useState({ price: 5000000, downPayment: 1000000, rate: 8.5, tenure: 20 });
  const loanAmount = emi.price - emi.downPayment;
  const monthlyRate = emi.rate / 12 / 100;
  const tenureMonths = emi.tenure * 12;
  const monthlyEMI = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  const totalPayable = monthlyEMI * tenureMonths;
  const totalInterest = totalPayable - loanAmount;

  return (
    <section id="calculators" className="py-24 bg-secondary-navy">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl mb-16 text-center">Investment Tools</h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* ROI Calculator */}
          <div className="neo-card p-10">
            <h3 className="font-serif text-2xl mb-8">ROI Calculator</h3>
            <div className="space-y-4 mb-8">
              <input type="number" value={roi.amount} className="neo-input w-full p-4" onChange={(e) => setRoi({...roi, amount: Number(e.target.value)})} placeholder="Amount"/>
              <input type="number" value={roi.appreciation} className="neo-input w-full p-4" onChange={(e) => setRoi({...roi, appreciation: Number(e.target.value)})} placeholder="Appreciation %"/>
              <input type="number" value={roi.years} className="neo-input w-full p-4" onChange={(e) => setRoi({...roi, years: Number(e.target.value)})} placeholder="Years"/>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className='neo-card p-4'><div className='text-gold font-bold'>₹{Math.round(futureValue).toLocaleString()}</div><div className='text-xs'>Future Value</div></div>
              <div className='neo-card p-4'><div className='text-gold font-bold'>₹{Math.round(totalProfit).toLocaleString()}</div><div className='text-xs'>Profit</div></div>
              <div className='neo-card p-4'><div className='text-gold font-bold'>{Math.round(growth)}%</div><div className='text-xs'>Growth</div></div>
            </div>
          </div>

          {/* EMI Calculator */}
          <div className="neo-card p-10">
            <h3 className="font-serif text-2xl mb-8">EMI Calculator</h3>
            <div className="space-y-4 mb-8">
              <input type="number" value={emi.price} className="neo-input w-full p-4" onChange={(e) => setEmi({...emi, price: Number(e.target.value)})} placeholder="Property Price"/>
              <input type="number" value={emi.downPayment} className="neo-input w-full p-4" onChange={(e) => setEmi({...emi, downPayment: Number(e.target.value)})} placeholder="Down Payment"/>
              <input type="number" value={emi.rate} className="neo-input w-full p-4" onChange={(e) => setEmi({...emi, rate: Number(e.target.value)})} placeholder="Interest Rate %"/>
              <input type="number" value={emi.tenure} className="neo-input w-full p-4" onChange={(e) => setEmi({...emi, tenure: Number(e.target.value)})} placeholder="Tenure (Years)"/>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className='neo-card p-4'><div className='text-gold font-bold'>₹{Math.round(monthlyEMI).toLocaleString()}</div><div className='text-xs'>Monthly EMI</div></div>
              <div className='neo-card p-4'><div className='text-gold font-bold'>₹{Math.round(totalInterest).toLocaleString()}</div><div className='text-xs'>Total Interest</div></div>
              <div className='neo-card p-4'><div className='text-gold font-bold'>₹{Math.round(totalPayable).toLocaleString()}</div><div className='text-xs'>Total Payable</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
