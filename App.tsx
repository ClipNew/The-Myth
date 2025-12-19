
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Menu, 
  X, 
  MessageSquare,
  Globe,
  Crown,
  Zap,
  ArrowRight,
  Youtube,
  Send
} from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import CreatorHub from './pages/CreatorHub';
import Economy from './pages/Economy';
import Recruitment from './pages/Recruitment';
import Roster from './pages/Roster';

// Helper to scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Global reveal animation trigger
const useRevealOnScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
};

const StrategicTicker = () => (
  <div className="bg-indigo-600 py-2 md:py-2.5 overflow-hidden border-b border-white/10 relative z-40 shadow-lg shadow-indigo-500/10">
    <div className="flex whitespace-nowrap animate-marquee gap-12 md:gap-16">
      {[1,2,3,4,5].map(i => (
        <span key={i} className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.4em] flex items-center gap-6 md:gap-8">
          <Crown className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#fbbf24] animate-pulse" /> 
          GUILD STATUS: LEGENDARY
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          ACTIVE WARRIORS: 150+
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          ALLIANCE POWER: ASCENDED
        </span>
      ))}
    </div>
  </div>
);

const MobileStickyCTA = () => (
  <div className="md:hidden fixed bottom-6 left-0 w-full px-6 z-50 animate-in slide-in-from-bottom-10 duration-500">
    <a 
      href="https://discord.gg/AaXfdzb4Xx" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center justify-between w-full bg-indigo-600 text-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(79,70,229,0.5)] border border-white/10 active:scale-95 transition-transform"
    >
      <div className="flex items-center gap-3">
        <div className="bg-white/10 p-2 rounded-lg">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Join the War Room</span>
          <span className="text-[8px] text-white/60 font-bold uppercase tracking-widest">Active Recruitment</span>
        </div>
      </div>
      <ArrowRight className="w-5 h-5" />
    </a>
  </div>
);

const Navbar = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SPIRIT', path: '/about' },
    { name: 'EVENTS', path: '/activities' },
    { name: 'HUB', path: '/creator-hub' },
    { name: 'ECONOMY', path: '/economy' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-[60]">
      <nav className="glass-card border-b border-white/5 px-4 md:px-6 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 md:space-x-4 group" onClick={() => setIsOpen(false)}>
            <div className="relative">
              <Shield className="w-7 h-7 md:w-9 md:h-9 text-indigo-400 fill-indigo-400/20 group-hover:scale-110 transition-transform" />
              <Crown className="w-3 h-3 md:w-4 md:h-4 text-[#fbbf24] absolute -top-1 -right-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] md:text-[14px] font-cinzel font-black tracking-[0.2em] text-white leading-none">
                THE <span className="text-indigo-500">MYTH</span>
              </span>
              <span className="text-[7px] md:text-[8px] text-slate-500 font-bold tracking-[0.3em] uppercase mt-1">
                Vanguard v1.0
              </span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 lg:space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[9px] lg:text-[10px] font-black tracking-[0.25em] transition-all hover:text-indigo-400 ${
                  isActive(link.path) ? 'text-indigo-400 text-glow' : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/recruitment" className="bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-black text-[10px] lg:text-[11px] transition-all shadow-[0_0_25px_rgba(79,70,229,0.3)] uppercase tracking-[0.2em]">
              ENLIST
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-card border-b border-white/10 py-10 px-6 flex flex-col space-y-6 animate-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-cinzel font-black tracking-widest uppercase transition-colors ${
                  isActive(link.path) ? 'text-indigo-400' : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/recruitment" onClick={() => setIsOpen(false)} className="w-full text-center bg-indigo-600 py-4 rounded-xl font-black text-white text-base uppercase tracking-widest shadow-xl">
              START APPLICATION
            </Link>
          </div>
        )}
      </nav>
      <StrategicTicker />
    </header>
  );
};

const Footer = () => (
  <footer className="bg-[#050508] border-t border-white/5 pt-24 pb-32 md:pb-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-10 h-10 text-indigo-500" />
              <span className="text-3xl font-cinzel font-black text-white tracking-tighter uppercase">
                THE <span className="text-indigo-500">MYTH</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-lg font-light italic border-l-4 border-indigo-500/30 pl-6">
              "A legendary vanguard forged in the heart of the Outlands. We don't just participate in the war; we define its outcome."
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://discord.gg/AaXfdzb4Xx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-indigo-400 transition-colors">
              <MessageSquare className="w-4 h-4" /> DISCORD
            </a>
            <Link to="/creator-hub" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-indigo-400 transition-colors">
              <Youtube className="w-4 h-4" /> MEDIA
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-indigo-500 font-black text-[10px] tracking-[0.5em] uppercase opacity-80">DIRECTORIES</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center group">THE SPIRIT <ArrowRight className="w-0 group-hover:w-3 group-hover:ml-2 transition-all" /></Link></li>
            <li><Link to="/activities" className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center group">OPERATIONS <ArrowRight className="w-0 group-hover:w-3 group-hover:ml-2 transition-all" /></Link></li>
            <li><Link to="/creator-hub" className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center group">CREATOR HUB <ArrowRight className="w-0 group-hover:w-3 group-hover:ml-2 transition-all" /></Link></li>
            <li><Link to="/economy" className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center group">ECONOMY <ArrowRight className="w-0 group-hover:w-3 group-hover:ml-2 transition-all" /></Link></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-indigo-500 font-black text-[10px] tracking-[0.5em] uppercase opacity-80">QUICK ENLIST</h4>
          <p className="text-slate-500 text-[10px] font-bold leading-relaxed uppercase tracking-[0.2em]">
            JOIN 150+ WARRIORS. 0% TAX. ELITE REGEARS.
          </p>
          <Link to="/recruitment" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg group">
            START APPLICATION <Send className="w-3 h-3 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.6em] text-center md:text-left">
          © {new Date().getFullYear()} THE MYTH GUILD. VANGUARD SYSTEM V1.0
        </p>
        <div className="flex items-center gap-6">
          <span className="text-slate-600 text-[8px] font-black uppercase tracking-[0.4em]">OUTLANDS VANGUARD</span>
          <span className="text-slate-600 text-[8px] font-black uppercase tracking-[0.4em]">EST. 2022</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useRevealOnScroll();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#050508] relative">
        <Navbar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        <main className={`flex-grow pt-28 md:pt-36 lg:pt-40 ${isMobileMenuOpen ? 'blur-sm grayscale-[50%]' : ''} transition-all duration-300`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/creator-hub" element={<CreatorHub />} />
            <Route path="/economy" element={<Economy />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/roster" element={<Roster />} />
          </Routes>
        </main>
        <MobileStickyCTA />
        <Footer />
      </div>
    </Router>
  );
}
