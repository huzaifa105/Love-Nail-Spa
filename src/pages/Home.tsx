import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, Users, Heart, Sparkles, CheckCircle, ArrowRight, MapPin, Phone, Instagram } from 'lucide-react';
import { cn } from '../lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

function Star({ size, className, ...props }: { size: number, className: string, [key: string]: any }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Home() {

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-brand-cream">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.5em] mb-6 block font-medium text-brand-accent brightness-125">Elevate Your Elegance</span>
            <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-8 tracking-tighter">
              Luxury Nail Care & <br />
              <span className="italic font-light">Relaxation Experience</span>
            </h1>
            <p className="text-lg md:text-xl font-light opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed h-[60px] md:h-auto">
              Indulge in a serene escaping at Longview's premier boutique spa. Exceptional artistry meets impeccable hygiene for a truly refined finish.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/booking" 
                className="bg-brand-accent text-brand-cream px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-brand-cream hover:text-brand-charcoal transition-all duration-500 shadow-2xl hover:shadow-brand-accent/20 w-full sm:w-auto"
              >
                Book Appointment
              </Link>
              <Link 
                to="/services" 
                className="group flex items-center gap-2 text-brand-cream/80 hover:text-brand-cream transition-colors text-sm uppercase tracking-widest font-bold"
              >
                View Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-cream/30"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-brand-cream/50 to-transparent" />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.span variants={itemVariants} className="text-xs uppercase tracking-[0.4em] text-brand-accent font-bold">Our Philosophy</motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight">
              A Sanctuary of Beauty <br />
              <span className="italic text-brand-accent/70">& Perfection.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-brand-charcoal/70 leading-relaxed font-light text-lg italic">
              "We believe that nail care is an essential part of self-care. At Love Nail Spa, we've created a warm, elegant atmosphere where you can unwind while our master technicians transform your hands and feet into works of art."
            </motion.p>
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-3xl font-serif text-brand-accent">15+</h4>
                <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 mt-1">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-brand-accent">10k+</h4>
                <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/50 mt-1">Happy Clients</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to="/about" className="inline-block border-b-2 border-brand-accent/30 pb-1 text-sm tracking-[0.2em] uppercase font-bold hover:border-brand-accent transition-all text-brand-charcoal">
                The Full Story
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" 
                alt="Spa Relaxation" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-accent/5 rounded-full -z-0" />
            <div className="absolute -top-6 -right-6 p-10 bg-brand-beige rounded-3xl border border-brand-charcoal/5 shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <Star className="text-brand-accent fill-brand-accent" size={24} />
                <div className="text-xs uppercase tracking-widest font-bold">Top Rated <br /> Salon 2024</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-brand-beige relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.5em] text-brand-accent font-bold">Explore Our World</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Signature Treatments</h2>
            <div className="w-24 h-[1px] bg-brand-accent mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Classic Manicure", 
                price: "$45", 
                image: "https://images.unsplash.com/photo-1604654894610-df4909985730?auto=format&fit=crop&q=80&w=800",
                desc: "Shaping, cuticle care, hand massage, and professional polishing."
              },
              { 
                title: "Deluxe Pedicure", 
                price: "$65", 
                image: "https://images.unsplash.com/photo-1519415510236-4097e939d331?auto=format&fit=crop&q=80&w=800",
                desc: "Relaxing soak, scrub, mask, and hot stone massage for perfect feet."
              },
              { 
                title: "Signature Gel Set", 
                price: "$55", 
                image: "https://images.unsplash.com/photo-1639745138165-03708e13ff81?auto=format&fit=crop&q=80&w=800",
                desc: "Long-lasting, high-shine gel application with precision edges."
              },
              { 
                title: "Acrylic Extensions", 
                price: "$75+", 
                image: "https://images.unsplash.com/photo-1629191092321-0599d4c7b836?auto=format&fit=crop&q=80&w=800",
                desc: "Custom length and shape with high-grade durable acrylic products."
              },
              { 
                title: "Artesian Nail Art", 
                price: "$20+", 
                image: "https://images.unsplash.com/photo-1600007283728-22cfb7b05f27?auto=format&fit=crop&q=80&w=800",
                desc: "Hand-painted designs, ombre, and embellishments by our experts."
              },
              { 
                title: "Spa Relaxation", 
                price: "$120", 
                image: "https://images.unsplash.com/photo-1544161515-4af6b1d46afb?auto=format&fit=crop&q=80&w=800",
                desc: "The ultimate combined treatment for complete hand and feet renewal."
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-brand-cream rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-brand-cream/90 backdrop-blur-md px-4 py-2 rounded-full text-brand-charcoal font-bold text-sm">
                    {service.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif text-brand-charcoal mb-2">{service.title}</h3>
                  <p className="text-brand-charcoal/60 text-sm mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <Link to={`/booking?service=${service.title}`} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent hover:translate-x-2 transition-transform">
                    Selection & Booking <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services" className="bg-brand-charcoal text-brand-cream px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-colors shadow-xl">
              Discover All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-charcoal text-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: <Shield size={40} />, title: "Medical Grade Hygiene", desc: "We use autoclaves for all non-disposable tools." },
              { icon: <Users size={40} />, title: "Master Technicians", desc: "Artisans with over 10 years of professional training." },
              { icon: <Heart size={40} />, title: "Premium Products", desc: "Non-toxic, high-end brands for healthy nail care." },
              { icon: <Sparkles size={40} />, title: "Artistic Excellence", desc: "From minimalist chic to complex artisan designs." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4"
              >
                <div className="mx-auto w-20 h-20 bg-brand-accent/20 rounded-2xl flex items-center justify-center text-brand-accent border border-brand-accent/30">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-serif">{feature.title}</h3>
                <p className="text-xs opacity-60 leading-relaxed max-w-xs mx-auto">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Shoutout / Gallery */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-brand-accent font-bold font-sans">Our Craft</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mt-2">Captured Moments</h2>
            </div>
            <a href="#" className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-brand-charcoal/70 hover:text-brand-accent transition-colors">
              <Instagram size={20} /> Follow @LoveNailSpa
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1526045431048-f857369aba09?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1610992015732-2449b76344cc?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1534233503533-543c1f9f21e2?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1526413232644-8a42f0fba9c8?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600"
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 0.98 }}
                className="aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <img src={img} alt="Nail Art Showcase" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages / Pricing Section */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.5em] text-brand-accent font-bold">Exclusive Experiences</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Signature Spa Packages</h2>
            <p className="max-w-xl mx-auto text-brand-charcoal/60 text-sm italic">Bundled treatments designed for total rejuvenation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Classic Essential", 
                price: "$95", 
                services: ["Signature Manicure", "Botanical Pedicure", "Hand Massage"],
                popular: false 
              },
              { 
                title: "Deluxe Dream", 
                price: "$145", 
                services: ["Spa Manicure", "Ultimate Pedicure", "Paraffin Treatment", "Scalp Massage"],
                popular: true 
              },
              { 
                title: "Artisan VIP", 
                price: "$185", 
                services: ["Gel Master Set", "Jelly Spa Pedicure", "Full Custom Artwork", "Pro-Gift Bag"],
                popular: false 
              },
              { 
                title: "Bridal Bliss", 
                price: "$250+", 
                services: ["Consultation & Trial", "Day-of Extensions", "Pedicure", "Champagne Service"],
                popular: false 
              }
            ].map((pkg, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={cn(
                  "p-10 rounded-[3rem] flex flex-col justify-between border transition-all duration-500",
                  pkg.popular ? "bg-brand-charcoal text-brand-cream border-brand-accent shadow-2xl scale-105 z-10" : "bg-white text-brand-charcoal border-brand-charcoal/5 shadow-lg"
                )}
              >
                <div className="space-y-6">
                  {pkg.popular && <span className="bg-brand-accent text-brand-cream text-[8px] uppercase tracking-widest font-bold px-3 py-1 rounded-full absolute top-6 right-6">Most Desired</span>}
                  <h3 className="text-2xl font-serif">{pkg.title}</h3>
                  <div className="text-4xl font-serif text-brand-accent">{pkg.price}</div>
                  <ul className="space-y-3 opacity-70 text-xs">
                    {pkg.services.map((s, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle size={10} className="text-brand-accent" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/booking" className={cn(
                  "mt-10 py-4 rounded-xl text-[10px] uppercase tracking-widest font-bold text-center transition-all",
                  pkg.popular ? "bg-brand-cream text-brand-charcoal hover:bg-brand-accent hover:text-brand-cream" : "bg-brand-charcoal text-white hover:bg-brand-accent shadow-sm"
                )}>
                  Choose Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-charcoal text-brand-cream relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.4em] text-brand-accent font-bold">Client Voices</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4">The Love Aesthetic</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { 
                text: "The most relaxing hour of my week. The attention to detail is unlike any other salon in Longview.",
                name: "Sarah Jenkins",
                role: "Luxury Client"
              },
              { 
                text: "Elena’s art is literally breathtaking. I won't go anywhere else for my nail extensions.",
                name: "Michelle Rose",
                role: "Artisan Member"
              },
              { 
                text: "Clean, professional, and consistent. The botanical pedicure is a must-try experience.",
                name: "David Smith",
                role: "Monthly Regular"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5">
                <div className="flex text-brand-accent mb-4">
                  {[...Array(5)].map((_, starIdx) => <Star key={starIdx} size={12} className="fill-brand-accent" />)}
                </div>
                <p className="text-sm italic opacity-80 leading-relaxed mb-6 font-serif">"{t.text}"</p>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase">{t.name}</h4>
                  <p className="text-[10px] opacity-40 uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Banner */}

      <section className="py-24 bg-brand-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-brand-cream shadow-2xl rounded-[3rem] p-12 md:p-20 border border-brand-accent/20">
            <Sparkles className="text-brand-accent mx-auto mb-6" size={40} />
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-6 leading-tight">Ready for Your Self-Care Moment?</h2>
            <p className="text-brand-charcoal/60 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
              Our schedule fills up quickly. Secure your preferred date and time today with Longview's best nail artisans.
            </p>
            <Link to="/booking" className="inline-flex items-center gap-3 bg-brand-charcoal text-brand-cream px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-brand-accent transition-all duration-300 transform hover:scale-105">
              Book Your Appointment Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Mini */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-brand-charcoal">Quick Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Do you accept walk-ins?", a: "While we love seeing you, appointments are highly recommended to ensure you receive our full artistic attention. Walk-ins are accommodated based on availability." },
              { q: "What is your hygiene procedure?", a: "Your safety is our priority. We use hospital-grade sterilization for all tools and single-use kits for files, buffers, and pumice stones." },
              { q: "Do you offer group bookings?", a: "Yes! We specialize in bridal parties, birthdays, and corporate retreats. Please contact us at least 2 weeks in advance for groups of 4 or more." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-brand-cream p-8 rounded-2xl border border-brand-charcoal/5">
                <h4 className="font-bold text-brand-charcoal mb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> {faq.q}
                </h4>
                <p className="text-sm opacity-60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
