import { useState } from 'react';
import { motion } from 'motion/react';
import { AreaChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const formatCurrency = (val: number) => `₹${Math.round(val).toLocaleString('en-IN')}`;

const Slider = ({ label, min, max, step, value, onChange, prefix = '' }: any) => (
  <div className="space-y-3">
    <div className="flex justify-between text-sm">
      <label className='text-text-secondary'>{label}</label>
      <span className="text-text-primary font-bold">{prefix}{value.toLocaleString('en-IN')}</span>
    </div>
    <input 
      type="range" min={min} max={max} step={step} value={value} 
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
    />
  </div>
);

export function ROICalculator() {
    const [roi, setRoi] = useState({ amount: 5000000, appreciation: 10, years: 10 });
    const futureValue = roi.amount * Math.pow((1 + roi.appreciation / 100), roi.years);
    const profit = futureValue - roi.amount;
    const growth = (profit / roi.amount) * 100;

    return (
        <section className="py-[140px] bg-bg-body">
            <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                <div className="bg-white p-10 rounded-[28px] border border-border shadow-lg">
                    <h3 className="font-serif text-[40px] mb-8 tracking-tighter">ROI Calculator</h3>
                    <div className="space-y-8 mb-10">
                        <Slider label="Investment Amount" min={100000} max={100000000} step={100000} value={roi.amount} onChange={(v: number) => setRoi({...roi, amount: v})} prefix="₹" />
                        <Slider label="Appreciation %" min={1} max={30} step={1} value={roi.appreciation} onChange={(v: number) => setRoi({...roi, appreciation: v})} />
                        <Slider label="Duration (Years)" min={1} max={30} step={1} value={roi.years} onChange={(v: number) => setRoi({...roi, years: v})} />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    {[
                        { label: 'Future Value', value: formatCurrency(futureValue) },
                        { label: 'Profit', value: formatCurrency(profit) },
                        { label: 'Annual Growth', value: `${roi.appreciation}%` },
                        { label: 'Total Appreciation', value: `${Math.round(growth)}%` },
                    ].map((stat, i) => (
                        <div key={i} className='bg-bg-dark text-white p-8 rounded-[28px]'>
                            <div className='text-[15px] text-gray-400 mb-2'>{stat.label}</div>
                            <div className='text-[28px] font-bold text-accent'>{stat.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function EMICalculator() {
    const [emi, setEmi] = useState({ price: 10000000, downPayment: 2000000, rate: 8.5, tenure: 20 });
    const loanAmount = Math.max(0, emi.price - emi.downPayment);
    const monthlyRate = emi.rate / 12 / 100;
    const tenureMonths = emi.tenure * 12;
    const monthlyEMI = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    const totalPayable = monthlyEMI * tenureMonths;
    const totalInterest = Math.max(0, totalPayable - loanAmount);

    return (
        <section className="py-[140px] bg-bg-body">
            <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                 <div className='grid grid-cols-2 gap-6'>
                    {[
                        { label: 'Monthly EMI', value: formatCurrency(monthlyEMI) },
                        { label: 'Total Interest', value: formatCurrency(totalInterest) },
                        { label: 'Total Payment', value: formatCurrency(totalPayable) },
                        { label: 'Loan Amount', value: formatCurrency(loanAmount) },
                    ].map((stat, i) => (
                        <div key={i} className='bg-white p-8 rounded-[28px] border border-border'>
                            <div className='text-[15px] text-text-secondary mb-2'>{stat.label}</div>
                            <div className='text-[28px] font-bold text-text-primary'>{stat.value}</div>
                        </div>
                    ))}
                </div>
                <div className="bg-white p-10 rounded-[28px] border border-border shadow-lg">
                    <h3 className="font-serif text-[40px] mb-8 tracking-tighter">EMI Calculator</h3>
                    <div className="space-y-8">
                        <Slider label="Property Price" min={500000} max={200000000} step={100000} value={emi.price} onChange={(v: number) => setEmi({...emi, price: v})} prefix="₹" />
                        <Slider label="Down Payment" min={0} max={emi.price * 0.8} step={100000} value={emi.downPayment} onChange={(v: number) => setEmi({...emi, downPayment: v})} prefix="₹" />
                        <Slider label="Interest Rate %" min={5} max={15} step={0.1} value={emi.rate} onChange={(v: number) => setEmi({...emi, rate: v})} />
                        <Slider label="Tenure (Years)" min={1} max={30} step={1} value={emi.tenure} onChange={(v: number) => setEmi({...emi, tenure: v})} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export function AppreciationGraph() {
    const data = [
        { name: '0', RealEstate: 100, Gold: 100, Savings: 100 },
        { name: '5', RealEstate: 160, Gold: 130, Savings: 110 },
        { name: '10', RealEstate: 250, Gold: 170, Savings: 120 },
        { name: '15', RealEstate: 400, Gold: 220, Savings: 130 },
        { name: '20', RealEstate: 600, Gold: 280, Savings: 140 },
    ];
    return (
        <section className="py-[140px] bg-bg-dark text-white">
            <div className="max-w-[1440px] mx-auto px-6">
                <h2 className="font-serif text-[60px] text-center mb-20 tracking-tighter">Your Investment Journey.</h2>
                <div className="h-[500px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <XAxis dataKey="name" stroke="#666" />
                            <YAxis stroke="#666" />
                            <Tooltip contentStyle={{backgroundColor: '#111', border: 'none'}} />
                            <Line type="monotone" dataKey="RealEstate" stroke="#C62828" strokeWidth={3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
}
