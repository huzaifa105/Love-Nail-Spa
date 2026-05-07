import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Phone, CheckCircle, Info, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Booking() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialService = searchParams.get('service') || '';

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    date: '',
    time: '',
    notes: ''
  });

  const services = [
    "Love Signature Manicure", "Gel Polish Manicure", "Deluxe Spa Manicure",
    "Botanical Pedicure", "Ultimate Spa Pedicure", "Jelly Spa Pedicure",
    "Full Set Acrylic", "Dipping Powder", "Builder Gel Overlay",
    "Nail Art", "Kids Mini Manicure", "Waxing Services"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("There was an issue processing your booking. Please call us at +1 903-921-6999.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="pt-40 pb-24 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md mx-auto bg-brand-cream p-12 rounded-[3rem] shadow-2xl border border-brand-accent/20"
        >
          <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-8 text-brand-cream">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-serif text-brand-charcoal mb-4">Reservation Confirmed</h2>
          <p className="text-brand-charcoal/60 mb-8 font-light italic">
            Thank you, {formData.name.split(' ')[0]}! Your self-care journey is scheduled for {formData.date} at {formData.time}. We've sent a confirmation email to {formData.email}.
          </p>
          <div className="space-y-4 pt-6 border-t border-brand-charcoal/5">
            <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40">Need to reschedule?</p>
            <p className="text-sm font-bold text-brand-charcoal">+1 903-921-6999</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-brand-accent font-bold">Reservations</span>
            <h1 className="text-5xl font-serif text-brand-charcoal mt-4 leading-tight">Book Your <br /> <span className="italic text-brand-accent">Retreat.</span></h1>
            <p className="mt-6 text-brand-charcoal/60 leading-relaxed font-light">
              Experience the Gold Standard of nail care. Select your desired service and preferred timing—we'll take care of the rest.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-brand-cream rounded-3xl border border-brand-charcoal/5">
              <div className="text-brand-accent"><Sparkles size={24} /></div>
              <div>
                <h4 className="font-serif text-lg">Bespoke Finish</h4>
                <p className="text-xs opacity-60">All appointments include a consultation to ensure your art matches your vision.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-brand-cream rounded-3xl border border-brand-charcoal/5">
              <div className="text-brand-accent"><Info size={24} /></div>
              <div>
                <h4 className="font-serif text-lg">Hygiene Note</h4>
                <p className="text-xs opacity-60">We use medical-grade sterile packs for every single client, every time.</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
             <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border-4 border-brand-cream">
                <img src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800" alt="Salon View" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-cream rounded-[3rem] p-8 md:p-12 shadow-2xl border border-brand-accent/10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40 block">Select Treatment</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select 
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-brand-beige/50 border border-brand-charcoal/5 rounded-xl py-4 px-6 text-sm focus:outline-none focus:border-brand-accent transition-colors appearance-none cursor-pointer col-span-2"
                  >
                    <option value="" disabled>Choose a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40 block flex items-center gap-2"><Calendar size={14} /> Date</label>
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-brand-beige/50 border border-brand-charcoal/5 rounded-xl py-4 px-6 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40 block flex items-center gap-2"><Clock size={14} /> Time</label>
                  <input 
                    type="time" 
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-brand-beige/50 border border-brand-charcoal/5 rounded-xl py-4 px-6 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                    step="900"
                    min="09:00"
                    max="19:00"
                  />
                  <p className="text-[10px] opacity-40">Operating hours: 9AM - 7PM</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40 block">Your Information</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-accent/40" size={18} />
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-brand-beige/50 border border-brand-charcoal/5 rounded-xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-accent/40" size={18} />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-brand-beige/50 border border-brand-charcoal/5 rounded-xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>
                <div className="relative mt-4">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-brand-beige/50 border border-brand-charcoal/5 rounded-xl py-4 px-6 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-charcoal/40 block">Special Requests / Notes</label>
                <textarea 
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Tell us about any specific designs or allergic sensitivities..."
                  className="w-full bg-brand-beige/50 border border-brand-charcoal/5 rounded-xl py-4 px-6 text-sm focus:outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={loading}
                  className={cn(
                    "w-full bg-brand-charcoal text-brand-cream py-6 rounded-2xl text-xs uppercase tracking-[0.3em] font-bold hover:bg-brand-accent transition-all duration-500 shadow-xl flex items-center justify-center gap-3",
                    loading && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {loading ? "Processing..." : "Confirm My Appointment"}
                </button>
                <p className="text-[10px] text-center mt-6 text-brand-charcoal/40 uppercase tracking-widest">
                  By booking, you agree to our 24-hour cancellation policy
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
