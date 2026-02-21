import { Phone, Mail, MapPin, Wind } from "lucide-react";
import { Navbar, Hero, Services, AreasWeServe, StickyCTA, Footer, Reviews } from "./components/Landing";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-32 bg-brand-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-8">San Diego's Trusted HVAC & Plumbing Team.</h2>
                <div className="space-y-6 text-xl text-brand-muted leading-relaxed">
                  <p>
                    Since 1980, THA Heating, Air & Plumbing has been the go-to service provider for families and businesses across San Diego. We're a family-owned, locally operated company that takes pride in honest work and fair pricing.
                  </p>
                  <p>
                    Our licensed technicians are trained on the latest HVAC and plumbing technologies. Whether it's a routine maintenance check or a 2 AM emergency, we're here for you — 24/7, 365 days a year.
                  </p>
                  <p className="font-bold text-brand-highlight text-lg">
                    Se Habla Español!
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-8">
                  <div>
                    <p className="text-3xl font-display font-bold text-brand-highlight">45+</p>
                    <p className="text-sm font-bold text-brand-muted uppercase tracking-widest">Years in Business</p>
                  </div>
                  <div>
                    <p className="text-3xl font-display font-bold text-brand-highlight">24/7</p>
                    <p className="text-sm font-bold text-brand-muted uppercase tracking-widest">Emergency Service</p>
                  </div>
                  <div>
                    <p className="text-3xl font-display font-bold text-brand-highlight">BBB</p>
                    <p className="text-sm font-bold text-brand-muted uppercase tracking-widest">Accredited</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="glass rounded-[3rem] p-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-highlight/10 flex items-center justify-center text-brand-highlight">
                      <Wind className="size-7" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-accent text-lg">Carrier & Bryant Dealer</p>
                      <p className="text-brand-muted text-sm">Factory Authorized Service</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-highlight/10 flex items-center justify-center text-brand-highlight">
                      <MapPin className="size-7" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-accent text-lg">Locally Owned & Operated</p>
                      <p className="text-brand-muted text-sm">Serving the South Bay since 1980</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-highlight/10 flex items-center justify-center text-brand-highlight">
                      <Phone className="size-7" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-accent text-lg">Financing Available</p>
                      <p className="text-brand-muted text-sm">Flexible payment options for new installs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <AreasWeServe />
        <Reviews />

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden bg-brand-secondary/50">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-highlight/5 blur-[120px] rounded-full" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                  <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-brand-accent">Get a Free Estimate</h2>
                  <p className="text-xl text-brand-muted mb-12">Schedule service or request a free quote. We respond fast — because your comfort can't wait.</p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-highlight">
                        <Phone size={20} />
                      </div>
                      <a href="tel:6192359636">
                        <p className="text-sm font-bold text-brand-muted uppercase tracking-widest">Call Anytime — 24/7</p>
                        <p className="text-xl font-bold text-brand-accent">(619) 235-9636</p>
                      </a>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-highlight">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-muted uppercase tracking-widest">Email Us</p>
                        <p className="text-xl font-bold text-brand-accent">contact@thaheatingandair.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-highlight">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-muted uppercase tracking-widest">Our Location</p>
                        <p className="text-xl font-bold text-brand-accent">3240 F Street, San Diego, CA 92102</p>
                      </div>
                    </div>
                  </div>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Request sent successfully! We'll be in touch shortly."); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name" className="w-full glass px-6 py-4 rounded-2xl outline-none focus:border-brand-highlight transition-colors text-brand-accent placeholder:text-brand-muted/50" />
                    <input type="tel" placeholder="Phone Number" className="w-full glass px-6 py-4 rounded-2xl outline-none focus:border-brand-highlight transition-colors text-brand-accent placeholder:text-brand-muted/50" />
                  </div>
                  <select defaultValue="" className="w-full glass px-6 py-4 rounded-2xl outline-none focus:border-brand-highlight transition-colors appearance-none text-brand-accent">
                    <option value="" disabled hidden>Select Service Category</option>
                    <option>Plumbing Services</option>
                    <option>HVAC Services</option>
                    <option>Air Conditioning</option>
                    <option>Heating</option>
                    <option>Emergency Service</option>
                  </select>
                  <textarea placeholder="Tell us about your issue..." rows={4} className="w-full glass px-6 py-4 rounded-2xl outline-none focus:border-brand-highlight transition-colors text-brand-accent placeholder:text-brand-muted/50"></textarea>
                  <button className="w-full bg-brand-highlight text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-accent transition-all shadow-lg">
                    Request Free Estimate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
