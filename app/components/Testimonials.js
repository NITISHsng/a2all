'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Ritesh',
    role: 'Creative Post & Image Specialist',
    content: "The creative post designs and image concepts delivered were exceptional. My brand visibility improved significantly, and engagement on social media has grown consistently.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
    rating: 5
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    role: 'Creative Post Image Client',
    content: "The team created stunning and highly engaging creative post images for my business. The designs perfectly captured my brand identity and helped attract more audience attention.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    rating: 5
  },
  {
    id: 3,
    name: 'Satish Singha',
    role: 'Owner, I Clinic',
    content: "Their digital marketing and promotional designs helped increase patient inquiries for my clinic. The branding and creative visuals gave my practice a professional and trustworthy image.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
    rating: 5
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Salon Owner',
    content: "For just ₹3000 per year, I started getting regular customer inquiries from social media. The pricing is perfect for small businesses like mine.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
    rating: 5
  },
  {
    id: 5,
    name: 'Dr. Manoj Kumar',
    role: 'Dental Clinic Owner',
    content: "They understand local clinics very well. Within two months, we saw more calls and walk-in patients. Their strategy truly delivers real growth.",
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=faces',
    rating: 5
  },
  {
    id: 6,
    name: 'Arvind Mehta',
    role: 'Electronics Shop Owner',
    content: "The posters and promotional videos were delivered faster than expected. Everything was live within days. Their turnaround time is impressive.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    rating: 5
  },
  {
    id: 7,
    name: 'Pooja Singh',
    role: 'Boutique Owner',
    content: "I chose the Basic Website package for ₹5,000. It looks professional, loads fast, and customers easily contact me through WhatsApp.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces',
    rating: 5
  },
  {
    id: 8,
    name: 'Imran Khan',
    role: 'Gym Owner',
    content: "The Standard Website package gave my gym a proper online presence with gallery and SEO. We now get regular membership inquiries from Google.",
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=faces',
    rating: 5
  },
  {
    id: 9,
    name: 'Kavita Rao',
    role: 'Home Bakery Owner',
    content: "Their Premium Website with online ordering helped me scale my bakery. Customers can now place orders directly through the site. It’s a complete solution.",
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop&crop=faces',
    rating: 5
  },
{
  id: 10,
  name: 'Suresh Yadav',
  role: 'Hardware Store Owner',
  content: "What I like most is that everything is handled by one team — social media, ads, website, and videos. It saves time and delivers results.",
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces',
  rating: 5
}
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[var(--surface)] opacity-50 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[var(--surface)] opacity-50 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[var(--secondary)] font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl font-bold text-[var(--primary)] mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-[var(--text-light)]">Trusted by businesses across industries to deliver exceptional digital experiences.</p>
        </motion.div>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[var(--surface)] rounded-2xl p-8 min-w-[300px] w-[85vw] md:w-[400px] md:min-w-[400px] flex-shrink-0 relative shadow-sm hover:shadow-lg transition-all duration-300 snap-center"
            >

              <div>
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--primary)] text-sm">{testimonial.name}</h4>
                  <p className="text-[var(--text-light)] text-xs">{testimonial.role}</p>
                </div>
              </div>
              <Quote className="absolute top-8 right-8 text-[var(--secondary)] opacity-20 w-10 h-10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-[var(--text)] mb-8 italic relative z-10 line-clamp-4">"{testimonial.content}"</p>    
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
