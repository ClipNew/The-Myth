
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Play, 
  Shield, 
  Star, 
  Youtube, 
  Sword, 
  X, 
  Users, 
  Target, 
  Globe, 
  Crown,
  Zap,
  Flame,
  ShieldAlert,
  Crosshair,
  MapPin,
  Clock,
  TrendingUp,
  Award,
  Trophy
} from 'lucide-react';

const VideoModal = ({ videoId, onClose }: { videoId: string | null, onClose: () => void }) => {
  if (!videoId) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-[#050508]/95 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-6xl aspect-video glass-card rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(79,70,229,0.4)] border border-indigo-500/20 scale-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 md:p-3 bg-black/40 hover:bg-indigo-600 text-white rounded-full transition-all border border-white/10"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const StatBlock = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
  <div className="glass-card p-6 md:p-10 rounded-3xl border-white/5 flex flex-col items-center text-center relative overflow-hidden group hover:border-indigo-500/30 transition-all">
    <div className={`absolute top-0 left-0 w-full h-1 ${color} opacity-50`}></div>
    <Icon className={`w-8 h-8 md:w-12 md:h-12 mb-4 md:mb-6 ${color.replace('bg-', 'text-')} group-hover:scale-110 transition-transform`} />
    <div className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-1 md:mb-2 uppercase">{value}</div>
    <div className="text-[8px] md:text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">{label}</div>
  </div>
);

const Home = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const discordLink = "https://discord.gg/AaXfdzb4Xx";

  return (
    <div className="space-y-20 md:space-y-32 pb-32">
      <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden px-4 md:px-6 py-12 md:py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://assets.albiononline.com/uploads/media/default/media/7907b5e030c8dd81de15f1827c1082e07f141eb0.jpeg" 
            className="w-full h-full object-cover opacity-20 scale-105 select-none pointer-events-none" 
            alt="Outlands Battlefield" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]"></div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl text-center w-full">
          <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-2.5 rounded-2xl glass-card border-white/10 shadow-2xl">
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-red-500"></span>
              </span>
              <div className="flex items-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-black uppercase tracking-[0.35em]">
                <span className="text-white/50">ALLIANCE [JOKER]</span>
                <span className="text-white flex items-center gap-2">
                  <Globe className="w-3 md:w-3.5 h-3 md:h-3.5 text-indigo-400" /> ALBION EAST
                </span>
                <span className="hidden sm:inline w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="hidden sm:flex items-center gap-2 text-red-500">
                  <Flame className="w-3 md:w-3.5 h-3 md:h-3.5" /> DOMINATING CORE
                </span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 md:space-y-4 mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <h1 className="text-[clamp(2.8rem,15vw,10rem)] font-cinzel font-black text-white tracking-tighter leading-none uppercase drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] px-2">
              THE <span className="text-indigo-500 text-glow">MYTH</span>
            </h1>
            <div className="h-1 w-20 md:w-48 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mt-4 md:mt-6 rounded-full opacity-70"></div>
            <p className="text-[clamp(0.7rem,3vw,1.75rem)] mt-6 md:mt-8 font-cinzel font-light tracking-[0.4em] md:tracking-[0.6em] text-white/70 uppercase px-4">
              Albion East Powerhouse
            </p>
          </div>

          <p className="text-sm md:text-xl text-slate-400 mb-12 md:mb-20 max-w-4xl mx-auto leading-relaxed font-light italic animate-in fade-in duration-1000 delay-500 px-6">
            "An elite force within the <span className="text-white font-bold">Joker Alliance</span>. 30B+ Combined Fame. 0% Tax. Unbreakable Unity."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 px-6">
            <a href={discordLink} target="_blank" rel="noopener noreferrer" className="btn-glint w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 bg-indigo-600 text-white rounded-full font-black text-base md:text-xl shadow-2xl shadow-indigo-500/30 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 uppercase tracking-tighter">
              ENLIST NOW <ChevronRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </a>
            <Link to="/activities" className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 glass-card border-white/20 hover:bg-white/10 text-white rounded-full font-black text-base md:text-xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 uppercase tracking-tighter">
              OPERATIONS <Zap className="ml-2 w-5 h-5 md:w-6 md:h-6 fill-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* Battle Honors Section - Realized Data Points */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 reveal">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-600/10 rounded-full border border-indigo-500/20 mb-4">
            <Award className="w-4 h-4 text-indigo-400" />
            <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">Official Database Stats</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-cinzel font-black text-white uppercase tracking-tighter">BATTLE <span className="text-indigo-500">HONORS</span></h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <StatBlock icon={TrendingUp} label="Total Kill Fame" value="28.5B+" color="bg-indigo-500" />
          <StatBlock icon={Shield} label="PvE Dominance" value="340B+" color="bg-indigo-400" />
          <StatBlock icon={Trophy} label="Alliance Power" value="[JOKER]" color="bg-[#fbbf24]" />
          <StatBlock icon={Users} label="Daily Vanguard" value="150+" color="bg-purple-500" />
        </div>
      </section>

      {/* Global CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 reveal">
        <div className="mythic-gradient rounded-[2.5rem] md:rounded-[5rem] p-10 md:p-32 lg:p-40 text-center relative overflow-hidden shadow-3xl border border-white/10">
           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
           <div className="relative z-10">
             <h2 className="text-[clamp(2.2rem,8vw,8rem)] font-cinzel font-black text-white mb-6 md:mb-16 tracking-tighter uppercase leading-none text-glow">JOIN THE MYTH</h2>
             <p className="text-white/80 text-sm md:text-2xl mb-10 md:mb-24 max-w-5xl mx-auto font-light leading-relaxed px-4">
               Ready to become legend on Albion East? Join the 150+ strong vanguard and claim your place in the core territories of Joker Alliance.
             </p>
             <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
               <a href={discordLink} target="_blank" rel="noopener noreferrer" className="btn-glint px-10 md:px-20 py-4 md:py-8 bg-indigo-600 text-white rounded-full font-black text-base md:text-2xl hover:scale-105 transition-transform shadow-2xl uppercase tracking-tighter">
                 JOIN THE FIGHT
               </a>
               <Link to="/recruitment" className="px-10 md:px-20 py-4 md:py-8 border-2 md:border-4 border-white text-white rounded-full font-black text-base md:text-2xl hover:bg-white hover:text-black transition-all shadow-2xl uppercase tracking-tighter">
                 VIEW PERKS
               </Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
