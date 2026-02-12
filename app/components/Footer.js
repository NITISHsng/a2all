'use client';

import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12"
        >

          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/a2alllogo2.png" 
                alt="A2All Logo" 
                width={140} 
                height={50} 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              Helping local businesses across India look professional and grow online with affordable, high-quality digital marketing packages.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/17YKPdqW1u/" className="p-2 bg-slate-800 rounded-full hover:bg-[var(--secondary)] transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/atwoall/" className="p-2 bg-slate-800 rounded-full hover:bg-[var(--secondary)] transition-colors"><Instagram size={20} /></a>
      <a 
  href="https://wa.me/918001338614?text=Hello%20A2ALL"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="p-2 bg-slate-800 rounded-full hover:bg-[var(--secondary)] transition-colors"
>
  <WhatsAppIcon size={20} />
</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link href="#services" className="hover:text-[var(--secondary)] transition-colors">Social Media Management</Link></li>
              <li><Link href="#services" className="hover:text-[var(--secondary)] transition-colors">Video Creation</Link></li>
              <li><Link href="#services" className="hover:text-[var(--secondary)] transition-colors">Website Development</Link></li>
              <li><Link href="#services" className="hover:text-[var(--secondary)] transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link href="#why-us" className="hover:text-[var(--secondary)] transition-colors">Why Choose Us</Link></li>
              <li><Link href="#pricing" className="hover:text-[var(--secondary)] transition-colors">Pricing Packages</Link></li>
              <li><Link href="#contact" className="hover:text-[var(--secondary)] transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-[var(--secondary)] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
