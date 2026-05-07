import { motion } from 'motion/react';
import { ArrowRight, Info, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Classic Manicures",
    description: "Refined hand care for a timeless, polished look.",
    services: [
      { name: "Love Signature Manicure", price: "$45", duration: "45 mins", benefits: ["Cuticle Treatment", "Hand Massage", "Premium Polish"] },
      { name: "Gel Polish Manicure", price: "$55", duration: "60 mins", benefits: ["Long-lasting Shine", "No Drying Time", "Reinforced Strength"] },
      { name: "Deluxe Spa Manicure", price: "$65", duration: "75 mins", benefits: ["Sugar Scrub", "Hydrating Mask", "Hot Towel Wrap"] }
    ]
  },
  {
    name: "Luxury Pedicures",
    description: "Rejuvenating foot treatments in our zero-gravity chairs.",
    services: [
      { name: "Botanical Pedicure", price: "$55", duration: "50 mins", benefits: ["Herbal Soak", "Callus Removal", "Light Massage"] },
      { name: "Ultimate Spa Pedicure", price: "$85", duration: "90 mins", benefits: ["Paraffin Wax", "Hot Stone Massage", "Deep Exfoliation"] },
      { name: "Jelly Spa Pedicure", price: "$75", duration: "75 mins", benefits: ["Texture Soak", "Heat Retention", "Relaxing Scent"] }
    ]
  },
  {
    name: "Specialty Enhancements",
    description: "Structural beauty and artistic extensions.",
    services: [
      { name: "Full Set Acrylic", price: "$65+", duration: "90 mins+", benefits: ["Custom Shaping", "High Durability", "Perfect Length"] },
      { name: "Dipping Powder", price: "$55", duration: "60 mins", benefits: ["Vitamin Infused", "Strong Finish", "Natural Look"] },
      { name: "Builder Gel Overlay", price: "$60", duration: "75 mins", benefits: ["Nail Protection", "Glossy Finish", "Natural Strengthening"] }
    ]
  },
  {
    name: "Artistic Design",
    description: "Bespoke hand-crafted nail art for the modern muse.",
    services: [
      { name: "Minimalist Art", price: "$15+", duration: "+15 mins", benefits: ["Linear Designs", "Single Accents", "Chrome Finish"] },
      { name: "Master Artisan Set", price: "$45+", duration: "+45 mins", benefits: ["Character Work", "Multi-layering", "3D Elements"] },
      { name: "French Tip Upgrade", price: "$15", duration: "+15 mins", benefits: ["Classic Pink & White", "Modern Colors", "Micro-French"] }
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-brand-accent font-bold">The Menu</span>
          <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal">Curated Treatments</h1>
          <p className="max-w-2xl mx-auto text-brand-charcoal/60 font-light text-lg">
            Every service is performed using the highest grade non-toxic materials and medical-grade sterilization.
          </p>
        </div>

        <div className="space-y-32">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-charcoal/10 pb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal">{category.name}</h2>
                  <p className="text-brand-charcoal/50 font-light mt-2">{category.description}</p>
                </div>
                <div className="hidden md:block h-[1px] flex-grow mx-10 bg-brand-charcoal/5" />
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-30">Selection {catIdx + 1}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.services.map((service, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    whileHover={{ y: -5 }}
                    className="bg-brand-cream p-8 rounded-3xl shadow-sm border border-brand-charcoal/5 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-serif text-brand-charcoal">{service.name}</h3>
                        <div className="text-right">
                          <p className="text-xl font-serif text-brand-accent">{service.price}</p>
                          <p className="text-[10px] flex items-center justify-end gap-1 opacity-50 uppercase tracking-widest mt-1">
                            <Clock size={10} /> {service.duration}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {service.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-charcoal/60">
                            <CheckCircle2 size={12} className="text-brand-accent" /> {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-brand-charcoal/5 flex justify-between items-center">
                      <div className="flex items-center gap-1 text-[10px] text-brand-charcoal/40 uppercase tracking-tighter">
                         <Info size={12} /> Results vary by nail condition
                      </div>
                      <Link 
                        to={`/booking?service=${service.name}`} 
                        className="text-xs font-bold uppercase tracking-widest text-brand-accent flex items-center gap-2 hover:translate-x-1 transition-transform"
                      >
                        Book <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Polices */}
        <section className="mt-32 p-12 bg-brand-charcoal text-brand-cream rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-brand-accent uppercase tracking-widest text-xs font-bold font-sans">Arrival Policy</h4>
              <p className="text-xs opacity-60 leading-relaxed">Please arrive 5-10 minutes early for your first appointment to complete a client intake form. Late arrivals over 15 minutes may need to be rescheduled.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-brand-accent uppercase tracking-widest text-xs font-bold font-sans">Cancellation</h4>
              <p className="text-xs opacity-60 leading-relaxed">We require 24-hour notice for cancellations. No-shows or short-notice cancellations will incur a 50% service fee.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-brand-accent uppercase tracking-widest text-xs font-bold font-sans">Child Safety</h4>
              <p className="text-xs opacity-60 leading-relaxed">For the safety of your little ones and the relaxation of our clients, children under 10 are only permitted during their own scheduled appointments.</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Star size={200} className="text-brand-accent" />
          </div>
        </section>
      </div>
    </div>
  );
}

function Star({ size, className }: { size: number, className: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
