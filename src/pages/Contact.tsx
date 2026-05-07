import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Instagram, Facebook, Send, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-brand-cream min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <span className="text-xs uppercase tracking-[0.4em] text-brand-accent font-bold">Connect With Us</span>
        <h1 className="text-5xl md:text-7xl font-serif text-brand-charcoal mt-6">Visit Our Sanctuary</h1>
        <div className="w-32 h-[1px] bg-brand-accent mt-8" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Info & Map */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Our Location</h4>
              <p className="text-brand-charcoal text-lg font-serif">901 Pine Tree Rd,<br />Longview, TX 75604</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Direct Line</h4>
              <p className="text-brand-charcoal text-lg font-serif">+1 903-921-6999</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Email Support</h4>
              <p className="text-brand-charcoal text-lg font-serif">concierge@lovenailspa.com</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Follow Our Art</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 border border-brand-charcoal/10 rounded-full hover:bg-brand-accent hover:text-brand-cream transition-all"><Instagram size={18} /></a>
                <a href="#" className="p-3 border border-brand-charcoal/10 rounded-full hover:bg-brand-accent hover:text-brand-cream transition-all"><Facebook size={18} /></a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Operating Hours</h4>
            <div className="space-y-3">
              {[
                { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
                { day: "Saturday", time: "9:00 AM - 7:00 PM" },
                { day: "Sunday", time: "10:00 AM - 5:00 PM" }
              ].map((h, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-brand-charcoal/5 pb-2">
                  <span className="font-medium opacity-60 uppercase tracking-widest text-[10px]">{h.day}</span>
                  <span className="font-serif italic text-lg">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-80 bg-brand-beige border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.811822765329!2d-94.7937553234907!3d32.531102696515865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8636399999999999%3A0x6ca3b9999999999!2s901%20Pine%20Tree%20Rd%2C%20Longview%2C%20TX%2075604%2C%20USA!5e0!3m2!1sen!2sus!4v1715105200000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-brand-charcoal text-brand-cream rounded-[4rem] p-12 md:p-16 shadow-2xl relative overflow-hidden"
          >
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl font-serif">Message Received</h3>
                <p className="opacity-60 text-sm italic">Our concierge will contact you within 24 business hours.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="px-8 py-3 border border-brand-cream/20 rounded-full text-[10px] uppercase tracking-widest hover:border-brand-accent transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-4xl font-serif mb-4">Message Elena & Team</h3>
                <p className="opacity-50 text-sm mb-12 font-light">Whether you have a question about our services or want to discuss a bridal package, we're here to help.</p>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div className="border-b border-brand-cream/10 pb-2">
                       <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-2">My name is</label>
                       <input type="text" placeholder="Your Name" required className="bg-transparent w-full focus:outline-none text-xl font-serif placeholder:opacity-20" />
                    </div>
                    <div className="border-b border-brand-cream/10 pb-2">
                       <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-2">I am interested in</label>
                       <select className="bg-transparent w-full focus:outline-none text-xl font-serif appearance-none cursor-pointer">
                          <option>General Inquiry</option>
                          <option>Bridal Group Packages</option>
                          <option>Artisan Nail Design</option>
                          <option>Career Opportunities</option>
                       </select>
                    </div>
                    <div className="border-b border-brand-cream/10 pb-2">
                       <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-2">Reach me at</label>
                       <input type="email" placeholder="email@example.com" required className="bg-transparent w-full focus:outline-none text-xl font-serif placeholder:opacity-20" />
                    </div>
                    <div className="border-b border-brand-cream/10 pb-2">
                       <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-2">My message</label>
                       <textarea rows={4} placeholder="Tell us more..." required className="bg-transparent w-full focus:outline-none text-xl font-serif placeholder:opacity-20 resize-none" />
                    </div>
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    className={cn(
                      "w-full bg-brand-accent text-brand-cream py-6 rounded-2xl text-[10px] uppercase tracking-[0.4em] font-bold hover:brightness-110 transition-all flex items-center justify-center gap-4 shadow-xl",
                      formState === 'submitting' && "opacity-50"
                    )}
                  >
                    {formState === 'submitting' ? "Sending..." : "Send Message"} <Send size={14} />
                  </button>
                </form>
              </>
            )}
            
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
