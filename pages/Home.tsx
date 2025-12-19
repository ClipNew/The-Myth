
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
  Clock
} from 'lucide-react';

const VideoModal = ({ videoId, onClose }: { videoId: string | null, onClose: () => void }) => {
  if (!videoId) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-[#050508]/95 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-6xl aspect-video glass-card rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(79,70,229,0.4)] border border-indigo-500/20 scale-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 bg-black/40 hover:bg-indigo-600 text-white rounded-full transition-all border border-white/10"
        >
          <X className="w-6 h-6" />
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

const Home = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const discordLink = "https://discord.gg/AaXfdzb4Xx";

  return (
    <div className="space-y-32 pb-32">
      <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 py-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://assets.albiononline.com/uploads/media/default/media/7907b5e030c8dd81de15f1827c1082e07f141eb0.jpeg" 
            className="w-full h-full object-cover opacity-20 scale-105" 
            alt="Outlands Battlefield" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl text-center px-4 w-full">
          <div className="flex flex-col items-center gap-6 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Live Objective Widget */}
            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-2xl glass-card border-white/10 shadow-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em]">
                <span className="text-white/60">CURRENT OBJECTIVE:</span>
                <span className="text-white flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-red-500" /> PUREGOLD CASTLE SIEGE
                </span>
                <span className="hidden sm:inline w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="hidden sm:flex items-center gap-2 text-indigo-400">
                  <Clock className="w-3 h-3" /> 18:00 UTC
                </span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 mb-14 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <h1 className="text-6xl md:text-9xl lg:text-[13rem] font-cinzel font-black text-white tracking-tighter leading-none uppercase drop-shadow-2xl">
              THE <span className="text-indigo-500 text-glow">MYTH</span>
            </h1>
            <div className="h-1 w-48 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mt-6 rounded-full opacity-60"></div>
            <p className="text-lg md:text-3xl lg:text-4xl mt-8 font-cinzel font-light tracking-[0.6em] text-white/70 uppercase">
              Where Legends are Forged
            </p>
          </div>

          <p className="text-base md:text-xl text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light italic animate-in fade-in duration-1000 delay-500">
            "An elite force of <span className="text-white font-bold">150+ Active Warriors</span>. Dominating the core territories with unbreakable unity and zero tax."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
            <a href={discordLink} target="_blank" rel="noopener noreferrer" className="btn-glint w-full sm:w-auto px-12 py-5 bg-indigo-600 text-white rounded-full font-black text-lg shadow-2xl shadow-indigo-500/30 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 uppercase tracking-tighter">
              JOIN THE MYTH <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <Link to="/activities" className="w-full sm:w-auto px-12 py-5 glass-card border-white/20 hover:bg-white/10 text-white rounded-full font-black text-lg flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 uppercase tracking-tighter">
              OPERATIONS <Zap className="ml-2 w-5 h-5 fill-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* SCALE SECTION */}
      <section className="max-w-7xl mx-auto px-6 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-indigo-600/10 rounded-xl border border-indigo-500/20">
               <Crown className="w-5 h-5 text-[#fbbf24]" />
               <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Legendary Vanguard</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-cinzel font-black text-white uppercase tracking-tighter leading-[0.9]">STRENGTH IN <span className="text-indigo-500">UNITY</span></h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed border-l-4 border-indigo-500 pl-10 italic">
              "We maintain a roster of 150+ active warriors. Whether it's a small-scale strike or a full alliance mass, The Myth is always ready."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="p-8 glass-card rounded-3xl border-white/5 group hover:border-indigo-500/30 transition-all">
                  <Users className="text-indigo-500 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-black uppercase tracking-widest text-sm mb-3">150+ ACTIVE</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">A massive global presence. We are one of the most active guilds in the core.</p>
               </div>
               <div className="p-8 glass-card rounded-3xl border-white/5 group hover:border-indigo-500/30 transition-all">
                  <Target className="text-indigo-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-black uppercase tracking-widest text-sm mb-3">ELITE COORDINATION</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Tactical mastery from small-scale parties to massive castle sieges.</p>
               </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square glass-card rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl p-12 flex items-center justify-center group">
                <div className="relative w-full h-full border-2 border-dashed border-indigo-500/20 rounded-full animate-[spin_40s_linear_infinite] group-hover:animate-[spin_20s_linear_infinite] transition-all flex items-center justify-center">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-5 rounded-2xl border-indigo-500/50">
                      <Shield className="w-10 h-10 text-indigo-400" />
                   </div>
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 glass-card p-5 rounded-2xl border-indigo-500/50">
                      <Sword className="w-10 h-10 text-indigo-400" />
                   </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                   <div className="text-[12rem] font-black text-white tracking-tighter mb-4 leading-none opacity-90 text-glow">150+</div>
                   <div className="text-indigo-400 font-black text-sm uppercase tracking-[0.6em] mb-6">Active Vanguard</div>
                   <p className="text-slate-500 text-sm font-light italic max-w-[240px]">The core is ours. Join the 150+ warriors and build your legend.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* PUREGOLD CASTLE SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 reveal">
        <div className="bg-[#050508] rounded-[3.5rem] border border-indigo-500/20 overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl min-h-[650px] relative">
          <div className="lg:w-[60%] relative overflow-hidden group flex items-stretch cursor-pointer" onClick={() => setActiveVideo('kO0qD9Ms-6M')}>
            <div className="w-full h-full relative overflow-hidden">
               <img src="https://assets.albiononline.com/uploads/media/default/media/995c4292d2af208ef5201290794abb2b6596f803.jpeg" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="PureGold Castle Siege" />
               <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-40">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-indigo-600/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(79,70,229,0.7)] border border-white/20 group-hover:scale-110 transition-transform">
                <Play className="text-white fill-white w-12 h-12 md:w-16 md:h-16 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="px-5 py-2 bg-red-600 text-[10px] font-black text-white rounded-xl uppercase tracking-widest shadow-2xl flex items-center gap-2">
                  <Flame className="w-4 h-4 animate-pulse" /> CLASSIFIED VOD
                </span>
                <span className="px-5 py-2 bg-indigo-600 text-[10px] font-black text-white rounded-xl uppercase tracking-widest shadow-2xl flex items-center gap-2">
                  <Users className="w-4 h-4" /> 40 WARRIORS (2 PARTIES)
                </span>
              </div>
              <h3 className="text-white font-cinzel font-black text-3xl uppercase tracking-tighter italic">"THE IMPENETRABLE HOLD"</h3>
            </div>
          </div>

          <div className="lg:w-[40%] p-10 md:p-16 flex flex-col justify-center relative bg-[#0a0a0f] border-l border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <Crosshair className="text-indigo-400 w-5 h-5" />
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em]">Battle Analysis: PureGold</span>
            </div>
            
            <div className="mb-10 w-full pr-4">
              <h2 className="font-cinzel font-black uppercase tracking-tighter leading-[0.85] text-white">
                <span className="text-[10vw] sm:text-[8vw] md:text-5xl lg:text-6xl block">PUREGOLD</span>
                <span className="text-[8vw] sm:text-[6vw] md:text-4xl lg:text-5xl text-indigo-500 block mt-2">CLASH</span>
              </h2>
            </div>

            <div className="border-l-4 border-indigo-500 pl-8 mb-12 space-y-6">
               <p className="text-slate-400 text-lg leading-relaxed font-light italic">
                 Witness a masterclass in small-scale coordination. While our guild maintains <span className="text-white font-bold">150+ members</span>, this legendary hold was achieved by a lethal <span className="text-white font-bold underline decoration-indigo-500 decoration-2">40-man strike force</span>.
               </p>
               <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs font-black text-slate-500 uppercase tracking-widest">
                    <ShieldAlert className="w-4 h-4 text-indigo-400" /> DEFENDING: PUREGOLD CASTLE
                  </div>
                  <div className="flex items-center gap-3 text-xs font-black text-slate-500 uppercase tracking-widest">
                    <Target className="w-4 h-4 text-indigo-400" /> OUTCOME: IMPENETRABLE HOLD
                  </div>
               </div>
            </div>
            
            <button 
              onClick={() => setActiveVideo('kO0qD9Ms-6M')}
              className="w-full py-6 bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white rounded-[1.2rem] font-black text-lg flex items-center justify-center transition-all shadow-xl shadow-indigo-600/20 uppercase tracking-tighter gap-3 group"
            >
              <Youtube className="w-6 h-6 group-hover:text-indigo-600" /> ANALYZE THE SIEGE
            </button>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="max-w-7xl mx-auto px-6 reveal">
        <div className="mythic-gradient rounded-[4rem] p-20 md:p-32 text-center relative overflow-hidden shadow-2xl border border-white/10">
           <div className="absolute inset-0 bg-black/50"></div>
           <div className="relative z-10">
             <h2 className="text-7xl md:text-[10rem] font-cinzel font-black text-white mb-12 tracking-tighter uppercase leading-none text-glow">JOIN THE MYTH</h2>
             <p className="text-white/90 text-2xl md:text-4xl mb-20 max-w-4xl mx-auto font-light leading-relaxed">
               Ready to become legend? Join the 150+ strong vanguard and claim your place in the Outland core.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-10">
               <a href={discordLink} target="_blank" rel="noopener noreferrer" className="btn-glint px-16 py-8 bg-indigo-600 text-white rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-2xl uppercase tracking-tighter">
                 APPLY ON DISCORD
               </a>
               <Link to="/recruitment" className="px-16 py-8 border-4 border-white text-white rounded-full font-black text-2xl hover:bg-white hover:text-black transition-all shadow-2xl uppercase tracking-tighter">
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
