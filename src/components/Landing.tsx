import { motion } from "motion/react";
import { Phone, Menu, X, Droplets, Wind, ShieldCheck, Thermometer, Wrench, MapPin, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { THALogo } from "./THALogo";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-5"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 bg-white ${isScrolled ? "shadow-2xl" : "shadow-lg"}`}>
          <div className="flex items-center">
            <THALogo size="small" />
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm font-bold text-brand-primary">
            <a href="#about" className="hover:text-brand-highlight transition-colors">About Us</a>
            <a href="#services" className="hover:text-brand-highlight transition-colors">Services</a>
            <a href="#areas" className="hover:text-brand-highlight transition-colors">Areas We Serve</a>
            <a href="#reviews" className="hover:text-brand-highlight transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-brand-highlight transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:6192359636" className="hidden sm:flex items-center gap-2 bg-brand-highlight text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-accent transition-all hover:scale-105 active:scale-95">
              <Phone size={16} />
              <span>(619) 235-9636</span>
            </a>
            <button
              className="lg:hidden text-brand-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-8 lg:hidden"
        >
          <div className="flex flex-col gap-6 text-lg font-medium">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#areas" onClick={() => setIsMobileMenuOpen(false)}>Areas We Serve</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <hr className="border-slate-200" />
            <a href="tel:6192359636" className="flex items-center justify-center gap-2 bg-brand-highlight text-white py-4 rounded-2xl font-bold">
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* San Diego Bay Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/sandiego-hero.png"
          className="w-full h-full object-cover"
          alt="San Diego Bay aerial view"
        />
        <div className="absolute inset-0 bg-brand-accent/60" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <Wind className="text-white size-8 md:size-10" />
            </div>
          </div>

          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-4 text-white">
            Your San Diego HVAC and Plumbing Specialists
          </h1>

          <p className="text-lg md:text-xl text-white/80 font-medium mb-8">
            Se Habla Español!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-block bg-brand-highlight text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg">
              Free Estimates Available
            </a>
            <a href="tel:6192359636" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              <Phone size={20} />
              (619) 235-9636
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Services = () => {
  const serviceCategories = [
    {
      title: "Plumbing Services",
      icon: "droplets",
      items: [
        "Plumbing Installation, Maintenance & Repair",
        "Leak Detection & Repair",
        "Piping & Repiping",
        "Water Pressure Repair",
        "Drain & Sewer Services",
        "Kitchen & Fixture Services",
        "Water Heater Services",
        "Pump Systems",
        "Water Quality Solutions"
      ]
    },
    {
      title: "HVAC Services",
      icon: "wind",
      items: [
        "HVAC Installation & Repair",
        "Duct Cleaning & Repair",
        "Indoor Air Quality Solutions",
        "Preventative Maintenance Plans",
        "Commercial HVAC Systems",
        "Ventilation Services"
      ]
    },
    {
      title: "Air Conditioning",
      icon: "thermometer",
      items: [
        "AC Repair",
        "AC Installation",
        "AC Maintenance",
        "Central Air Systems",
        "Ductless Mini-Splits",
        "Emergency AC Service"
      ]
    },
    {
      title: "Heating",
      icon: "wrench",
      items: [
        "Furnace Repair & Installation",
        "Heat Pump Services",
        "Radiant Heating",
        "Boiler Services",
        "Heating Maintenance Plans",
        "Emergency Heating Repair"
      ]
    }
  ];

  const iconMap: Record<string, any> = {
    droplets: <Droplets className="size-8" />,
    wind: <Wind className="size-8" />,
    thermometer: <Thermometer className="size-8" />,
    wrench: <Wrench className="size-8" />,
  };

  return (
    <section id="services" className="py-32 max-w-7xl mx-auto px-6">
      <div className="mb-20 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6">Our Services</h2>
        <p className="text-xl text-brand-muted max-w-2xl mx-auto">Complete HVAC and plumbing solutions for residential and commercial properties across San Diego.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {serviceCategories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="glass rounded-3xl p-8 group hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-brand-highlight/10 rounded-2xl flex items-center justify-center text-brand-highlight group-hover:bg-brand-highlight group-hover:text-white transition-all duration-500">
                {iconMap[cat.icon]}
              </div>
              <h3 className="text-2xl font-display font-bold">{cat.title}</h3>
            </div>
            <ul className="space-y-3">
              {cat.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3 text-brand-muted">
                  <ShieldCheck className="size-4 text-brand-highlight flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const AreasWeServe = () => {
  const areas = ["Chula Vista", "National City", "San Diego", "Rancho Santa Fe", "Del Mar"];

  return (
    <section id="areas" className="py-32 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6">Areas We Serve</h2>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto">Proudly serving San Diego and the greater South Bay area since 1980.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass px-8 py-5 rounded-2xl font-bold text-lg text-brand-accent flex items-center gap-3 cursor-default shadow-sm hover:shadow-lg transition-all"
            >
              <MapPin className="size-5 text-brand-highlight" />
              {area}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      className="fixed bottom-8 left-0 right-0 z-50 px-6 pointer-events-none"
    >
      <div className="max-w-md mx-auto glass p-2 rounded-full flex items-center gap-2 pointer-events-auto shadow-2xl">
        <div className="flex-1 pl-6">
          <p className="text-xs font-bold text-brand-muted uppercase tracking-widest">24/7 Service</p>
          <p className="text-sm font-bold text-brand-accent">(619) 235-9636</p>
        </div>
        <a href="#contact" className="bg-brand-highlight text-white px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">
          Free Estimate
        </a>
      </div>
    </motion.div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-accent pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="mb-8">
              <THALogo size="default" />
            </div>
            <p className="text-xl text-white/60 font-display leading-tight max-w-md">
              Your San Diego HVAC and Plumbing Specialists. Se Habla Español!
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-brand-highlight">Navigation</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Areas We Serve</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-brand-highlight">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>(619) 235-9636</li>
              <li>3240 F Street, San Diego, CA 92102</li>
              <li>Se Habla Español</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/10 text-white/30 text-sm">
          <p>© {new Date().getFullYear()} THA Heating, Air & Plumbing Inc. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Facebook</span>
            <span className="hover:text-white cursor-pointer transition-colors">Yelp</span>
            <span className="hover:text-white cursor-pointer transition-colors">BBB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Reviews = () => {
  const reviewsData = [
    { name: "Maria G.", role: "Homeowner, Chula Vista", content: "THA came out the same day I called. They fixed our AC unit quickly and the price was very fair. Highly recommend — they also speak Spanish which was very helpful for my parents!", rating: 5 },
    { name: "Robert K.", role: "Homeowner, San Diego", content: "We've used THA for both plumbing and HVAC work. They're always professional, on time, and stand behind their work. Best in San Diego hands down.", rating: 5 },
    { name: "Sandra P.", role: "Homeowner, National City", content: "Had an emergency plumbing issue on a Sunday and THA was there within the hour. Fair pricing, honest technicians. They've been our go-to for years.", rating: 5 }
  ];

  return (
    <section id="reviews" className="py-32 bg-brand-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">What Our Clients Say</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Don't take our word for it — hear from homeowners across San Diego who trust THA.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((r, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl">
              <div className="flex gap-1 mb-6 text-brand-highlight">
                {[...Array(r.rating)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-white/70 text-lg italic mb-6">"{r.content}"</p>
              <p className="font-bold text-white">— {r.name}</p>
              <p className="text-sm text-white/40">{r.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
