
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
                <span className="text-white/50">STATUS:</span>
                <span className="text-white flex items-center gap-2">
                  <MapPin className="w-3 md:w-3.5 h-3 md:h-3.5 text-red-500" /> PUREGOLD SIEGE
                </span>
                <span className="hidden sm:inline w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="hidden sm:flex items-center gap-2 text-indigo-400">
                  <Clock className="w-3 md:w-3.5 h-3 md:h-3.5" /> 18:00 UTC
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
              Where Legends are Forged
            </p>
          </div>

          <p className="text-sm md:text-xl text-slate-400 mb-12 md:mb-20 max-w-4xl mx-auto leading-relaxed font-light italic animate-in fade-in duration-1000 delay-500 px-6">
            "An elite force of <span className="text-white font-bold">150+ Active Warriors</span>. Dominating the core territories with unbreakable unity and zero tax."
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

      {/* Battle Honors Section - Social Proof */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 reveal">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-600/10 rounded-full border border-indigo-500/20 mb-4">
            <Award className="w-4 h-4 text-indigo-400" />
            <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">Guild Supremacy</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-cinzel font-black text-white uppercase tracking-tighter">BATTLE <span className="text-indigo-500">HONORS</span></h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <StatBlock icon={TrendingUp} label="Total Kill Fame" value="8.4B+" color="bg-indigo-500" />
          <StatBlock icon={Shield} label="Core Territories" value="12" color="bg-indigo-400" />
          <StatBlock icon={Trophy} label="PureGold Defense" value="Undefeated" color="bg-[#fbbf24]" />
          <StatBlock icon={Users} label="Daily Mass" value="150+" color="bg-purple-500" />
        </div>
      </section>

      {/* PUREGOLD CASTLE SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 reveal">
        <div className="bg-[#050508] rounded-[2rem] md:rounded-[4rem] border border-indigo-500/20 overflow-hidden flex flex-col lg:flex-row items-stretch shadow-3xl min-h-[500px] lg:min-h-[700px] relative">
          <div className="lg:w-[60%] h-[250px] md:h-[400px] lg:h-auto relative overflow-hidden group flex items-stretch cursor-pointer" onClick={() => setActiveVideo('kO0qD9Ms-6M')}>
            <div className="w-full h-full relative overflow-hidden">
               <img src="https://assets.albiononline.com/uploads/media/default/media/995c4292d2af208ef5201290794abb2b6596f803.jpeg" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="PureGold Castle Siege" />
               <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-40">
              <div className="w-16 h-16 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-indigo-600/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/20 group-hover:scale-110 transition-transform">
                <Play className="text-white fill-white w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 md:bottom-12 left-4 md:left-12 flex flex-col gap-2 md:gap-6">
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <span className="px-3 md:px-6 py-1.5 md:py-2.5 bg-red-600 text-[7px] md:text-[10px] font-black text-white rounded-xl uppercase tracking-widest shadow-2xl flex items-center gap-1.5 md:gap-3">
                  <Flame className="w-3 md:w-4 h-3 md:h-4 animate-pulse" /> CLASSIFIED VOD
                </span>
                <span className="px-3 md:px-6 py-1.5 md:py-2.5 bg-indigo-600 text-[7px] md:text-[10px] font-black text-white rounded-xl uppercase tracking-widest shadow-2xl flex items-center gap-1.5 md:gap-3">
                  <Users className="w-3 md:w-4 h-3 md:h-4" /> 40 WARRIORS
                </span>
              </div>
              <h3 className="text-white font-cinzel font-black text-xl md:text-5xl uppercase tracking-tighter italic text-glow">"THE IMPENETRABLE HOLD"</h3>
            </div>
          </div>

          <div className="lg:w-[40%] p-6 md:p-12 lg:p-12 xl:p-14 flex flex-col justify-center relative bg-[#0a0a0f] border-l border-white/5 overflow-hidden">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <Crosshair className="text-indigo-400 w-4 h-4 md:w-5 md:h-5" />
              <span className="text-[9px] md:text-[10px] font-black text-indigo-400 uppercase tracking-[0.45em]">Battle Analysis</span>
            </div>
            
            <div className="mb-6 md:mb-8 w-full">
              <h2 className="font-cinzel font-black uppercase tracking-tighter leading-[0.85] text-white">
                <span className="text-[clamp(2.2rem,8vw,5.5rem)] lg:text-[clamp(1.8rem,4vw,3.5rem)] xl:text-5xl block whitespace-nowrap overflow-hidden">PUREGOLD</span>
                <span className="text-[clamp(1.5rem,6vw,4.5rem)] lg:text-[clamp(1.4rem,3.5vw,3rem)] text-indigo-500 block mt-1 uppercase">CLASH</span>
              </h2>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4 md:pl-6 mb-8 md:mb-10 space-y-4 md:space-y-6">
               <p className="text-slate-400 text-xs md:text-lg leading-relaxed font-light italic">
                 Witness coordination at its peak. While we mass <span className="text-white font-bold">150+</span>, this hold was achieved by a lethal <span className="text-white font-bold underline decoration-indigo-500 decoration-2 underline-offset-4">40-man strike force</span>.
               </p>
               <div className="flex flex-col gap-2 md:gap-3">
                  <div className="flex items-center gap-2 md:gap-3 text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                    <ShieldAlert className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-400" /> PUREGOLD CASTLE
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                    <Target className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-400" /> IMPENETRABLE
                  </div>
               </div>
            </div>
            
            <button 
              onClick={() => setActiveVideo('kO0qD9Ms-6M')}
              className="w-full py-4 md:py-6 bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white rounded-xl md:rounded-2xl font-black text-sm md:text-lg flex items-center justify-center transition-all shadow-xl shadow-indigo-600/30 uppercase tracking-tighter gap-2 md:gap-3 group"
            >
              <Youtube className="w-5 h-5 md:w-6 md:h-6 group-hover:text-indigo-600" /> ANALYZE SIEGE
            </button>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 reveal">
        <div className="mythic-gradient rounded-[2.5rem] md:rounded-[5rem] p-10 md:p-32 lg:p-40 text-center relative overflow-hidden shadow-3xl border border-white/10">
           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
           <div className="relative z-10">
             <h2 className="text-[clamp(2.2rem,8vw,8rem)] font-cinzel font-black text-white mb-6 md:mb-16 tracking-tighter uppercase leading-none text-glow">JOIN THE MYTH</h2>
             <p className="text-white/80 text-sm md:text-2xl mb-10 md:mb-24 max-w-5xl mx-auto font-light leading-relaxed px-4">
               Ready to become legend? Join the 150+ strong vanguard and claim your place in the Outland core.
             </p>
             <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
               <a href={discordLink} target="_blank" rel="noopener noreferrer" className="btn-glint px-10 md:px-20 py-4 md:py-8 bg-indigo-600 text-white rounded-full font-black text-base md:text-2xl hover:scale-105 transition-transform shadow-2xl uppercase tracking-tighter">
                 APPLY ON DISCORD
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
