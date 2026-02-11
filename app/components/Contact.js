'use client';

import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--surface)]">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm inline-block"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl font-bold text-[var(--primary)] mt-2 mb-6">Ready to Grow Your Business?</h2>
            <p className="text-[var(--text-light)] mb-12 text-lg max-w-2xl mx-auto">
              Book a free consultation today. We'll analyze your business and suggest the best growth strategy.
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-4 bg-[var(--surface)] rounded-full text-[var(--secondary)]">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--primary)] text-lg mb-2">Call Us</h4>
                  <p className="text-[var(--text-light)]">+91 80013 38614</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-4 bg-[var(--surface)] rounded-full text-[var(--secondary)]">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--primary)] text-lg mb-2">Email Us</h4>
                  <p className="text-[var(--text-light)]">singhanitish829@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-4 bg-[var(--surface)] rounded-full text-[var(--secondary)]">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--primary)] text-lg mb-2">Visit Us</h4>
                  <p className="text-[var(--text-light)]">
                    Kachakali, U/D, WB, India
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
