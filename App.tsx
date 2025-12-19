
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
  <div className="bg-indigo-600 py-2 overflow-hidden border-b border-white/10 relative z-40 shadow-lg shadow-indigo-500/10">
    <div className="flex whitespace-nowrap animate-marquee gap-16">
      {[1,2,3,4,5,6,7,8,9,10].map(i => (
        <span key={i} className="text-[9px] font-black text-white uppercase tracking-[0.4em] flex items-center gap-6">
          <Crown className="w-3 h-3 text-[#fbbf24] animate-pulse" /> 
          GUILD STATUS: LEGENDARY
          <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
          ACTIVE WARRIORS: 150+
          <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
          ALLIANCE POWER: ASCENDED
          <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
          MISSION: BECOME LEGEND
        </span>
      ))}
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SPIRIT', path: '/about' },
    { name: 'EVENTS', path: '/activities' },
    { name: 'CREATOR HUB', path: '/creator-hub' },
    { name: 'ECONOMY', path: '/economy' },
    { name: 'JOIN US', path: '/recruitment' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-[60]">
      <nav className="glass-card border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group" onClick={() => setIsOpen(false)}>
            <div className="relative">
              <Shield className="w-8 h-8 text-indigo-400 fill-indigo-400/20 group-hover:scale-110 transition-transform" />
              <Crown className="w-4 h-4 text-[#fbbf24] absolute -top-1 -right-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-cinzel font-black tracking-[0.2em] text-white leading-none">
                THE <span className="text-indigo-500">MYTH</span>
              </span>
              <span className="text-[7px] text-slate-500 font-bold tracking-[0.3em] uppercase mt-1">
                Where Legends are Forged.
              </span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-black tracking-[0.2em] transition-all hover:text-indigo-400 ${
                  isActive(link.path) ? 'text-indigo-400 text-glow' : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/recruitment" className="bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white px-6 py-2.5 rounded-full font-black text-[10px] transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] uppercase tracking-[0.2em]">
              ENLIST
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-card border-b border-white/10 py-10 px-8 flex flex-col space-y-6 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-cinzel font-black tracking-widest uppercase ${
                  isActive(link.path) ? 'text-indigo-400' : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/recruitment" onClick={() => setIsOpen(false)} className="w-full text-center bg-indigo-600 py-4 rounded-xl font-black text-white uppercase tracking-widest">
              ENLIST NOW
            </Link>
          </div>
        )}
      </nav>
      <StrategicTicker />
    </header>
  );
};

const Footer = () => (
  <footer className="bg-[#050508] border-t border-white/5 pt-32 pb-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-20">
        <div className="col-span-1 lg:col-span-2 space-y-10">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-10 h-10 text-indigo-500" />
              <span className="text-3xl font-cinzel font-black text-white tracking-tighter uppercase">
                THE <span className="text-indigo-500">MYTH</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-lg font-light italic border-l-4 border-indigo-500/30 pl-8">
              "A legendary vanguard forged in the heart of the Outlands. We don't just participate in the war; we define its outcome."
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://discord.gg/AaXfdzb4Xx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-indigo-400 transition-colors">
              <MessageSquare className="w-4 h-4" /> DISCORD
            </a>
            <a href="#" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-indigo-400 transition-colors">
              <Globe className="w-4 h-4" /> GUILD MAPS
            </a>
            <Link to="/creator-hub" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-indigo-400 transition-colors">
              <Youtube className="w-4 h-4" /> YOUTUBE
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-indigo-500 font-black text-[10px] tracking-[0.5em] uppercase opacity-80">DIRECTORIES</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center group">SPIRIT <ArrowRight className="w-0 group-hover:w-4 group-hover:ml-2 transition-all" /></Link></li>
            <li><Link to="/activities" className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center group">OPERATIONS <ArrowRight className="w-0 group-hover:w-4 group-hover:ml-2 transition-all" /></Link></li>
            <li><Link to="/creator-hub" className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center group">CREATOR HUB <ArrowRight className="w-0 group-hover:w-4 group-hover:ml-2 transition-all" /></Link></li>
            <li><Link to="/economy" className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center group">ECONOMY <ArrowRight className="w-0 group-hover:w-4 group-hover:ml-2 transition-all" /></Link></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-indigo-500 font-black text-[10px] tracking-[0.5em] uppercase opacity-80">QUICK ENLIST</h4>
          <p className="text-slate-500 text-xs font-bold leading-relaxed uppercase tracking-widest">
            JOIN THE 150+ WARRIORS TODAY. 0% TAX. ELITE REGEARS.
          </p>
          <Link to="/recruitment" className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] group">
            START APPLICATION <Send className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.6em]">
          © {new Date().getFullYear()} THE MYTH GUILD. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-8">
          <span className="text-slate-600 text-[9px] font-black uppercase tracking-[0.4em]">OUTLANDS VANGUARD</span>
          <span className="text-slate-600 text-[9px] font-black uppercase tracking-[0.4em]">EST. 2022</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  useRevealOnScroll();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#050508]">
        <Navbar />
        <main className="flex-grow pt-[115px]">
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
        <Footer />
      </div>
    </Router>
  );
}
