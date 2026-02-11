'use client';

import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const packages = [
  {
    name: 'Starter',
    price: '3000',
    originalPrice: '5000',
    period: '/year',
    description: 'Perfect for small shops just starting out.',
    features: ['4 Posts per Month', '2 Festival Creatives', 'Basic Captions', 'Social Media Setup'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '6000',
    originalPrice: '10000',
    period: '/year',
    description: 'Our most popular plan for steady growth.',
    features: ['8 Posts per Month', '2 Videos per Month', 'Festival Creatives', 'Monthly Performance Report'],
    highlight: true,
  },
  {
    name: 'Pro',
    price: '12,000',
    originalPrice: '18,000',
    period: '/year',
    description: 'Maximum visibility and premium content.',
    features: ['12 Posts per Month', '4 Videos per Month', 'Priority Support', 'Ad Campaign Guidance'],
    highlight: false,
  },
];

const websitePackages = [
    { name: 'Basic Website', price: '₹5,000', originalPrice: '₹8,000', features: '1 Page, Contact Form, WhatsApp Button' },
    { name: 'Standard Website', price: '₹10,000', originalPrice: '₹15,000', features: '5 Pages, Gallery, Basic SEO' },
    { name: 'Premium Website', price: '₹20,000+', originalPrice: '₹30,000+', features: 'E-commerce, Booking System, Full SEO' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container">
        {/* Main Packages */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm">Affordable Pricing</span>
          <h2 className="text-4xl font-bold text-[var(--primary)] mt-2 mb-4">Choose Your Growth Plan</h2>
          <p className="text-[var(--text-light)]">Transparent pricing with no hidden fees. Start small and upgrade as you grow.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border-2 ${
                pkg.highlight 
                  ? 'border-[var(--secondary)] bg-white shadow-xl scale-105 z-10' 
                  : 'border-slate-100 bg-slate-50'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--secondary)] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star size={14} fill="currentColor" /> Best Value
                </div>
              )}
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">{pkg.name}</h3>
              <div className="flex flex-col mb-4">
                 <div className="flex items-center gap-2">
                    <span className="text-lg text-slate-400 line-through decoration-red-500/50 decoration-2">₹{pkg.originalPrice}</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">SAVE {Math.round((1 - parseInt(pkg.price.replace(/,/g, ''))/parseInt(pkg.originalPrice.replace(/,/g, ''))) * 100)}%</span>
                 </div>
                 <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-[var(--primary)]">₹{pkg.price}</span>
                    <span className="text-[var(--text-light)] ml-1">{pkg.period}</span>
                 </div>
              </div>
              <p className="text-sm text-[var(--text-light)] mb-8">{pkg.description}</p>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-[var(--text)]">
                    <div className={`p-1 rounded-full mr-3 ${pkg.highlight ? 'bg-orange-100 text-[var(--secondary)]' : 'bg-slate-200 text-slate-600'}`}>
                        <Check size={14} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                pkg.highlight 
                  ? 'bg-[var(--secondary)] text-white hover:bg-[#C2410C] shadow-lg shadow-orange-200' 
                  : 'bg-white border border-slate-200 text-[var(--primary)] hover:border-[var(--secondary)] hover:text-[var(--secondary)]'
              }`}>
                Choose {pkg.name}
              </button> */}
            </motion.div>
          ))}
        </div>

        {/* Website Pricing */}
        <div className="bg-[var(--surface)] rounded-3xl p-8 md:p-12 border border-slate-100">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
            >
                <h3 className="text-2xl font-bold text-[var(--primary)]">Website Development Packages</h3>
                <p className="text-[var(--text-light)]">One-time cost for a professional online presence</p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
                className="grid md:grid-cols-3 gap-6"
            >
                {websitePackages.map((pkg, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:border-[var(--secondary)] transition-colors relative overflow-hidden"
                    >
                        <div className="absolute top-3 right-3 text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md">
                            Limited Offer
                        </div>
                        <h4 className="font-bold text-lg text-[var(--primary)] mb-1">{pkg.name}</h4>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-sm text-slate-400 line-through decoration-red-500/50">{pkg.originalPrice}</span>
                            <div className="text-2xl font-bold text-[var(--secondary)]">{pkg.price}</div>
                        </div>
                        <p className="text-sm text-[var(--text-light)]">{pkg.features}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>


      </div>
    </section>
  );
}
