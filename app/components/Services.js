'use client';

import { motion } from 'framer-motion';
import { Smartphone, Palette, Video, Globe } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Social Media Management',
    description: 'We handle your Instagram & Facebook so you can focus on your business.',
    icon: <Smartphone className="w-8 h-8 text-white" />,
    color: 'bg-blue-500',
    features: ['Page Setup & Optimization', '8-12 Posts Monthly', 'Caption & Hashtags', 'Monthly Reporting'],
  },
  {
    id: 2,
    title: 'Poster & Graphic Design',
    description: 'Eye-catching festival posters and offer banners to attract customers.',
    icon: <Palette className="w-8 h-8 text-white" />,
    color: 'bg-pink-500',
    features: ['Festival Creatives', 'Discount Banners', 'Event Promotions', 'Doctor/Shop Availability'],
  },
  {
    id: 3,
    title: 'Video Creation',
    description: 'High-quality reels and promo videos to increase engagement.',
    icon: <Video className="w-8 h-8 text-white" />,
    color: 'bg-red-500',
    features: ['Instagram Reels', 'Product Showcases', 'Animated Ads', 'Festival Greetings'],
  },
  {
    id: 4,
    title: 'Website Development',
    description: 'Professional websites to build trust and get more appointments.',
    icon: <Globe className="w-8 h-8 text-white" />,
    color: 'bg-green-500',
    features: ['Business Websites', 'E-commerce', 'Appointment Booking', 'SEO Friendly'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--surface)]">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-4xl font-bold text-[var(--primary)] mt-2 mb-4">Complete Digital Solutions</h2>
          <p className="text-[var(--text-light)]">Everything you need to grow your local business online, under one roof.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{service.title}</h3>
              <p className="text-[var(--text-light)] text-sm mb-6 min-h-[60px]">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-[var(--text-light)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
