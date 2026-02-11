'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[var(--surface)] to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--primary)]/5 skew-x-12 transform origin-top-right z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl z-0" />

      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
            #1 Local Business Growth Partner
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--primary)] leading-tight mb-6">
            Grow Your Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)]">
              Online & Offline
            </span>
          </h1>
          <p className="text-xl text-[var(--text-light)] mb-8 max-w-lg">
            We help local businesses like Shops, Clinics, and Gyms look professional and attract more customers with affordable digital marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#pricing" className="btn text-lg px-8">
              See Packages <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="#services" className="px-8 py-3.5 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-all flex items-center justify-center gap-2">
              <Play size={18} fill="currentColor" /> Watch Video
            </Link>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-[var(--text-light)] text-sm font-medium">
             <div className="flex items-center gap-2">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                 ))}
               </div>
               <span>Trusted by 50+ Businesses</span>
             </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 md:p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-slate-100">
                <div className="flex items-center justify-between mb-8 border-b pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 animate-pulse" />
                        <div className="space-y-2">
                            <div className="w-32 h-3 bg-slate-100 rounded animate-pulse" />
                            <div className="w-20 h-2 bg-slate-50 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                 <div className="h-48 w-full rounded-xl relative overflow-hidden group">
  <img
    src="/llll.avif"
    alt="Preview"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
</div>
          <div className="grid grid-cols-3 gap-4">
  {[
    { src: "/growth.webp", alt: "Growth" },
    { src: "/ann.png", alt: "Announcement" },
    { src: "/3rd.jpeg", alt: "Third item" },
  ].map((img, i) => (
    <div
      key={i}
      className="h-24 rounded-lg overflow-hidden group cursor-pointer"
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  ))}
</div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3"
                >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                        98%
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">Growth</div>
                        <div className="font-bold text-gray-800">Rate</div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
