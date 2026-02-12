import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <WhyUs />
      <Services />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
}
