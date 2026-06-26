import { useState } from 'react';
import { motion } from 'motion/react';

const formatCurrency = (val: number) => `₹${Math.round(val).toLocaleString('en-IN')}`;

const Slider = ({ label, min, max, step, value, onChange, prefix = '' }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <label>{label}</label>
      <span className="text-gold font-bold">{prefix}{value.toLocaleString('en-IN')}</span>
    </div>
    <input 
      type="range" 
      min={min} 
      max={max} 
      step={step} 
      value={value} 
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-primary-navy rounded-lg appearance-none cursor-pointer accent-gold"
    />
  </div>
);

export default function Calculators() {
  const [roi, setRoi] = useState({ amount: 5000000, appreciation: 10, years: 10 });
  const futureValue = roi.amount * Math.pow((1 + roi.appreciation / 100), roi.years);
  const totalProfit = futureValue - roi.amount;
  const growth = (totalProfit / roi.amount) * 100;

  const [emi, setEmi] = useState({ price: 10000000, downPayment: 2000000, rate: 8.5, tenure: 20 });
  const loanAmount = Math.max(0, emi.price - emi.downPayment);
  const monthlyRate = emi.rate / 12 / 100;
  const tenureMonths = emi.tenure * 12;
  const monthlyEMI = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  const totalPayable = monthlyEMI * tenureMonths;
  const totalInterest = Math.max(0, totalPayable - loanAmount);

  return (
    <section id="calculators" className="py-24 bg-secondary-navy">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl mb-16 text-center">Investment Tools</h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="neo-card p-10">
            <h3 className="font-serif text-2xl mb-8">ROI Calculator</h3>
            <div className="space-y-6 mb-8">
              <Slider label="Investment Amount" min={100000} max={100000000} step={100000} value={roi.amount} onChange={(v: number) => setRoi({...roi, amount: v})} prefix="₹" />
              <Slider label="Appreciation %" min={1} max={30} step={1} value={roi.appreciation} onChange={(v: number) => setRoi({...roi, appreciation: v})} />
              <Slider label="Duration (Years)" min={1} max={30} step={1} value={roi.years} onChange={(v: number) => setRoi({...roi, years: v})} />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className='neo-card p-4'><div className='text-gold font-bold text-sm'>{formatCurrency(futureValue)}</div><div className='text-xs'>Future Value</div></div>
              <div className='neo-card p-4'><div className='text-gold font-bold text-sm'>{formatCurrency(totalProfit)}</div><div className='text-xs'>Profit</div></div>
              <div className='neo-card p-4'><div className='text-gold font-bold text-sm'>{Math.round(growth)}%</div><div className='text-xs'>Growth</div></div>
            </div>
          </div>

          <div className="neo-card p-10">
            <h3 className="font-serif text-2xl mb-8">EMI Calculator</h3>
            <div className="space-y-6 mb-8">
              <Slider label="Property Price" min={500000} max={200000000} step={100000} value={emi.price} onChange={(v: number) => setEmi({...emi, price: v})} prefix="₹" />
              <Slider label="Down Payment" min={0} max={emi.price * 0.8} step={100000} value={emi.downPayment} onChange={(v: number) => setEmi({...emi, downPayment: v})} prefix="₹" />
              <Slider label="Interest Rate %" min={5} max={15} step={0.1} value={emi.rate} onChange={(v: number) => setEmi({...emi, rate: v})} />
              <Slider label="Tenure (Years)" min={1} max={30} step={1} value={emi.tenure} onChange={(v: number) => setEmi({...emi, tenure: v})} />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className='neo-card p-4'><div className='text-gold font-bold text-sm'>{formatCurrency(monthlyEMI)}</div><div className='text-xs'>Monthly EMI</div></div>
              <div className='neo-card p-4'><div className='text-gold font-bold text-sm'>{formatCurrency(totalInterest)}</div><div className='text-xs'>Total Interest</div></div>
              <div className='neo-card p-4'><div className='text-gold font-bold text-sm'>{formatCurrency(totalPayable)}</div><div className='text-xs'>Total Payable</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
