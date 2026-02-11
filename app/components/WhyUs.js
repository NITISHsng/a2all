'use client';

import { CheckCircle, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <DollarSign className="w-6 h-6 text-[var(--secondary)]" />,
    title: "Affordable Pricing",
    description: "Packages designed for small budgets, starting as low as ₹3000/year.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[var(--secondary)]" />,
    title: "Proven Growth",
    description: "Strategies focused on real results: more footfall and more calls.",
  },
  {
    icon: <Clock className="w-6 h-6 text-[var(--secondary)]" />,
    title: "Fast Turnaround",
    description: "Get your posters, videos, and website live in record time.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-[var(--secondary)]" />,
    title: "Complete Solution",
    description: "One partner for social media, video, website, and ads.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
           <h2 className="text-4xl font-bold text-[var(--primary)] mb-4">Why Local Businesses Trust Us</h2>
           <p className="text-[var(--text-light)]">We understand the challenges of running a shop or clinic. That's why we built a service that is simple, affordable, and effective.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[var(--surface)] hover:shadow-lg transition-shadow border border-slate-100"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{feature.title}</h3>
              <p className="text-[var(--text-light)] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
