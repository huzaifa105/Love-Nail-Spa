import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function AnnouncementBar() {
  return (
    <div className="bg-brand-brown text-brand-cream py-2 px-4 text-xs tracking-widest uppercase flex flex-col sm:flex-row justify-between items-center gap-2">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1"><Phone size={12} /> +1 903-921-6999</span>
        <span className="hidden md:flex items-center gap-1 uppercase tracking-widest"><MapPin size={12} /> 901 Pine Tree Rd, Longview</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:block">Open Daily: 9:00 AM - 7:00 PM</span>
        <Link to="/booking" className="font-bold border-b border-brand-cream/50 hover:border-brand-cream transition-colors">Book Now</Link>
      </div>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 mt-0 sm:mt-0",
      scrolled ? "bg-brand-cream/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-serif tracking-tighter flex items-center gap-2 group">
          <span className="text-brand-accent">Love</span>
          <span className="text-brand-charcoal opacity-70 group-hover:opacity-100 transition-opacity">Nail Spa</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-[0.2em] luxury-underline transition-colors",
                location.pathname === link.path ? "text-brand-accent" : "text-brand-charcoal/70 hover:text-brand-charcoal"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/booking" 
            className="bg-brand-charcoal text-brand-cream px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-brand-accent transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-charcoal p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-cream shadow-2xl md:hidden border-t border-brand-charcoal/5"
          >
            <div className="flex flex-col p-8 space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif tracking-widest text-brand-charcoal border-b border-brand-charcoal/5 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/booking" 
                onClick={() => setIsOpen(false)}
                className="bg-brand-charcoal text-brand-cream py-4 rounded-xl text-sm uppercase tracking-widest"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-brand-cream/10 pb-16">
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-serif tracking-tighter block">
            <span className="text-brand-accent">Love</span> Nail Spa
          </Link>
          <p className="text-brand-cream/60 text-sm leading-relaxed max-w-xs">
            Longview's premier destination for luxury nail care and artisanal relaxation. Experience the perfect blend of modern beauty and classic spa elegance.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-brand-cream/20 rounded-full hover:border-brand-accent hover:text-brand-accent transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 border border-brand-cream/20 rounded-full hover:border-brand-accent hover:text-brand-accent transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-accent">Quick Links</h4>
          <div className="flex flex-col space-y-3">
            <Link to="/" className="hover:text-brand-accent transition-colors text-sm opacity-80">Home</Link>
            <Link to="/services" className="hover:text-brand-accent transition-colors text-sm opacity-80">Services</Link>
            <Link to="/about" className="hover:text-brand-accent transition-colors text-sm opacity-80">About Us</Link>
            <Link to="/booking" className="hover:text-brand-accent transition-colors text-sm opacity-80">Book Now</Link>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-accent">Contact Us</h4>
          <div className="space-y-4 text-sm opacity-80">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 flex-shrink-0 text-brand-accent" />
              <span>901 Pine Tree Rd,<br />Longview, TX 75604</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="flex-shrink-0 text-brand-accent" />
              <span>+1 903-921-6999</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={16} className="flex-shrink-0 text-brand-accent" />
              <span>Mon-Sun: 9:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-accent">Newsletter</h4>
          <p className="text-sm opacity-60">Join our mailing list to receive exclusive offers and beauty tips.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-brand-cream/5 border border-brand-cream/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-brand-accent transition-colors"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-brand-accent text-brand-cream px-3 rounded text-[10px] uppercase font-bold tracking-widest">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] opacity-40">
        <p>© {new Date().getFullYear()} Love Nail Spa. All Rights Reserved.</p>
        <p>Developed by Serwizen.</p>
      </div>
    </footer>
  );
}
