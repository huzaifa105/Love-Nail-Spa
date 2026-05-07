import { motion } from 'motion/react';
import { Target, Heart, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-xs uppercase tracking-[0.4em] text-brand-accent font-bold">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-charcoal leading-tight">
              Crafting Beauty <br />
              <span className="italic text-brand-accent/70">Since 2012</span>
            </h1>
            <p className="text-lg text-brand-charcoal/70 leading-relaxed font-light">
              Founded by master artisan Elena Vance, Love Nail Spa was born from a simple vision: to elevate the standard of nail care in Longview. What started as a small boutique has grown into the city's premier destination for luxury beauty, known for our commitment to health, hygiene, and high art.
            </p>
            <p className="text-brand-charcoal/60 leading-relaxed font-sans text-sm">
              Our team consists of passionate professionals who view nail care as a form of architecture—requiring both structural integrity and aesthetic mastery. We travel the world to bring the latest techniques and most refined products back to our clients in East Texas.
            </p>
            <div className="pt-6">
              <Link to="/booking" className="bg-brand-charcoal text-brand-cream px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-accent transition-all">
                Join Our Family
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200" 
                alt="Salon Interior Detailed" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif">The Pillars of Love Nail Spa</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <ShieldCheck size={32} />, title: "Sterile Standard", desc: "We exceed state board requirements with hospital-grade sterilization protocols." },
              { icon: <Heart size={32} />, title: "Wellness First", desc: "Non-toxic, vegan-friendly product selections for your long-term health." },
              { icon: <Award size={32} />, title: "Artistic Precision", desc: "Continued education in the world's most advanced nail techniques." },
              { icon: <Target size={32} />, title: "Client Focus", desc: "A bespoke experience tailored to your unique style and skin needs." }
            ].map((v, i) => (
              <div key={i} className="space-y-4">
                <div className="text-brand-accent mb-6">{v.icon}</div>
                <h3 className="text-xl font-serif">{v.title}</h3>
                <p className="text-xs opacity-50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-24 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 space-y-12">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1200" 
                  alt="Luxury Hand Treatment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1519415749292-073551117c7c?auto=format&fit=crop&q=80&w=800" alt="Detail 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" alt="Detail 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-serif text-brand-charcoal">More Than Just a Salon. <br /> <span className="italic text-brand-accent">A Transformation.</span></h2>
              <div className="space-y-6 text-brand-charcoal/70 leading-relaxed">
                <p>
                  From the moment you step onto our warm wood floors, the outside world ceases to exist. We've meticulously designed our space to engage all five senses: the subtle scent of lavender, the soft curve of our Italian leather chairs, and the quiet rhythmic sound of professional care.
                </p>
                <p>
                  Our appointment-only model ensures that you are never rushed. We take the time to understand your lifestyle, wardrobe, and preferences to recommend the perfect length, shape, and color that complements your natural beauty.
                </p>
              </div>
              <div className="p-8 bg-brand-accent/5 rounded-3xl border border-brand-accent/10">
                <p className="text-sm font-serif italic text-brand-accent">"Love Nail Spa isn't just about the finish; it's about the feeling of being truly seen and cared for."</p>
                <p className="text-[10px] uppercase tracking-widest mt-4 font-bold">— Elena Vance, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
