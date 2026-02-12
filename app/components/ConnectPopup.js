'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ConnectPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay on mount (refresh or first visit)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 md:p-4"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 max-w-sm w-full shadow-2xl overflow-hidden"
            >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--secondary)]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="text-center mb-8 relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Let's Connect!</h3>
                    <p className="text-slate-400 text-sm">Have questions? Reach out to us directly.</p>
                </div>

                <div className="flex flex-col gap-4 relative z-10">
                    <a 
                        href="tel:+918001338614"
                        className="flex items-center justify-center gap-3 w-full p-4 bg-slate-800 hover:bg-[var(--primary)] text-white rounded-xl transition-all duration-300 font-medium group border border-white/5 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-[var(--primary)]/20"
                    >
                        <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                            <Phone size={20} />
                        </div>
                        <span>Call Now</span>
                    </a>

                    <a 
                        href="https://wa.me/918001338614?text=Hello%20A2ALL,%20I%20want%20to%20know%20more%20about%20your%20services."
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full p-4 bg-slate-800 hover:bg-[#25D366] text-white rounded-xl transition-all duration-300 font-medium group border border-white/5 hover:border-white/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#25D366]/20"
                    >
                        <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                            <WhatsAppIcon size={20} />
                        </div>
                        <span>WhatsApp Us</span>
                    </a>
                </div>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
