
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Youtube, 
  Heart, 
  Star, 
  ExternalLink, 
  Users, 
  Crown, 
  X, 
  AlertCircle,
  TrendingUp,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const VideoModal = ({ videoId, onClose }: { videoId: string | null, onClose: () => void }) => {
  if (!videoId) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-[#050507]/90 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-6xl aspect-video glass-card rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(79,70,229,0.3)] border border-indigo-500/20 scale-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 bg-black/40 hover:bg-red-600 text-white rounded-full transition-all border border-white/10"
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

const CreatorHub = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const creators = [
    { 
      name: 'DelRosario Justine L', 
      role: 'Alliance Content Lead', 
      desc: 'The strategic eye of the Outlands. Documenting our massive 150+ warrior sieges and daily massing.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200', 
      link: 'https://www.youtube.com/@DelRosarioJustineL' 
    },
    { 
      name: 'TheMyth-Ragnark', 
      role: 'Elite DPS Creator', 
      desc: 'Pure DPS carnage. High-tier Group Dungeons and small-scale legends.',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200', 
      link: 'https://www.youtube.com/@TheMyth-Regnar' 
    },
    { 
      name: 'CodeAdam Adventure', 
      role: 'Adventure Vlogger', 
      desc: 'Epic journeys across the royal and outland continents. Finding the hidden gems of Albion.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', 
      link: 'https://www.youtube.com/@CodeAdamAdventure' 
    }
  ];

  const showcaseItems = [
    { id: 'kO0qD9Ms-6M', title: 'Legendary Siege: 150+ Defensive Hold', creator: 'The Myth Official', category: 'War', desc: "Our legendary stand against overwhelming odds in the core." },
    { id: 'uA-Lyj-IxZY', title: 'Outland Conquest: The 150+ Mass', creator: 'DelRosario', category: 'War', desc: "Witness the sheer scale of The Myth's daily operations." },
    { id: 'moUY9ZkX__Y', title: 'Strategic Core Battle: Tactical Ops', creator: 'The Myth Official', category: 'War', desc: "High-level shotcalling and tactical coordination." },
    { id: 'w6jDxeLplnQ', title: 'Elite Dungeon Raid: Ragnark POV', creator: 'Ragnark', category: 'Community', desc: "Maximizing DPS for high-tier guild operations." },
    { id: 'XG7H5-N6M4E', title: 'CodeAdam: Royal Continent Quest', creator: 'CodeAdam', category: 'Adventure', desc: "Unlocking secrets in the heart of the royal cities." },
    { id: 'gM1qLT1rIUM', title: 'The Push: Alliance Vanguard', creator: 'DelRosario', category: 'War', desc: "Cinematic push into enemy territory." },
    { id: 'stP0x35j-VA', title: 'Dungeon Run: Life in the Myth', creator: 'The Myth Official', category: 'Community', desc: "Behind the scenes of our daily guild life." },
    { id: '5IPIJwsuIOc', title: 'Black Market: High-Stakes Run', creator: 'The Myth Official', category: 'Economy', desc: "Executing a 500M+ silver transport to Caerleon." },
  ];

  const filters = ['All', 'War', 'Adventure', 'Community', 'Economy'];

  return (
    <div className="py-32 px-6 max-w-7xl mx-auto space-y-32">
      <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />

      {/* Header precisely styled for fit */}
      <section className="text-center pt-20">
        <div className="flex justify-center mb-10">
           <div className="p-4 bg-indigo-600/10 rounded-3xl border border-indigo-500/20 shadow-2xl shadow-indigo-500/10">
             <Crown className="w-12 h-12 text-indigo-500" />
           </div>
        </div>
        <div className="max-w-4xl mx-auto overflow-hidden">
          <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-cinzel font-black text-white mb-0 tracking-tighter uppercase leading-[0.85] text-glow">CREATOR</h1>
          <h1 className="text-6xl sm:text-7xl md:text-[9rem] font-cinzel font-black text-indigo-500 mb-12 tracking-tighter uppercase leading-[0.85]">HUB</h1>
        </div>
        <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed font-light mt-10">
          Witness the power of <span className="text-white font-bold">150+ Warriors</span>. Immortalized by our elite creators.
        </p>
      </section>

      {/* Featured Creators Section */}
      <section>
        <div className="flex items-center gap-6 mb-16 px-4">
          <div className="w-12 h-12 glass-card rounded-xl border border-indigo-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.2)]">
            <Star className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-4xl font-cinzel font-black text-white uppercase tracking-tighter leading-none">The Vanguard Creators</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
           {creators.map((c, idx) => (
             <div key={idx} className="glass-card p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center group hover:border-indigo-500/30 transition-all shadow-2xl relative overflow-hidden bg-[#0c0c12]">
                <div className="relative mb-8">
                   <div className="w-32 h-32 rounded-full p-1 border-2 border-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-500">
                     <img src={c.avatar} className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all shadow-2xl" alt={c.name} />
                   </div>
                   <div className="absolute bottom-1 right-1 bg-red-600 w-8 h-8 rounded-full shadow-lg flex items-center justify-center border-2 border-[#050507]">
                      <Youtube className="w-4 h-4 text-white fill-white" />
                   </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter font-cinzel leading-tight">{c.name}</h4>
                  <p className="text-indigo-400 text-[9px] font-black uppercase tracking-[0.3em] mb-4">{c.role}</p>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed italic font-light">"{c.desc}"</p>
                  <a 
                    href={c.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex py-4 px-8 bg-indigo-600 text-white rounded-xl font-black text-xs items-center gap-3 transition-all hover:scale-[1.03] active:scale-95 shadow-[0_15px_30px_rgba(79,70,229,0.3)] uppercase tracking-widest"
                  >
                     <Youtube className="w-4 h-4 fill-white" /> SUBSCRIBE
                  </a>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* The Archive Section precisely as requested */}
      <section className="relative pt-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 px-4 border-l-4 border-indigo-500 pl-8">
           <div className="max-w-xl text-left">
             <h2 className="text-5xl md:text-7xl font-cinzel font-black text-white uppercase tracking-tighter leading-none text-glow">THE <span className="text-indigo-500">ARCHIVE</span></h2>
             <p className="text-slate-500 mt-6 font-medium text-lg leading-relaxed italic">"Proof of our power. Every video is a testament to the 150+ warrior mass."</p>
           </div>
           <div className="flex flex-wrap justify-center gap-3">
             {filters.map(filter => (
               <button 
                 key={filter}
                 onClick={() => setActiveFilter(filter)}
                 className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                   activeFilter === filter 
                     ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_0_25px_rgba(79,70,229,0.4)] scale-105' 
                     : 'bg-white/5 border-white/5 text-slate-500 hover:text-white hover:border-white/10'
                 }`}
               >
                 {filter}
               </button>
             ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {showcaseItems.filter(i => activeFilter === 'All' || i.category === activeFilter).map((item) => (
            <button 
              key={item.id} 
              onClick={() => setActiveVideo(item.id)}
              className="group glass-card rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-indigo-500/40 transition-all flex flex-col shadow-2xl text-left bg-[#0c0c12] relative"
            >
              <div className="aspect-video relative overflow-hidden bg-[#1a1a24]">
                <img 
                  src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-indigo-600/50 transition-all">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-indigo-600/90 backdrop-blur-md text-[9px] font-black text-white rounded-[0.5rem] uppercase tracking-widest shadow-xl">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between bg-gradient-to-b from-[#0a0a0c] to-black">
                <div className="space-y-4">
                  <h3 className="text-xl font-cinzel font-black text-indigo-400 group-hover:text-white mb-2 leading-tight uppercase tracking-tighter transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 italic font-light leading-relaxed line-clamp-2">"{item.desc}"</p>
                </div>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-indigo-500 text-[9px] font-black tracking-[0.3em] uppercase">
                     <TrendingUp className="w-3 h-3" /> MISSION LOG
                   </div>
                   <span className="text-slate-600 text-[10px] font-bold tracking-tight uppercase">{item.creator}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600/5 rounded-[3rem] p-16 md:p-24 border border-indigo-500/20 text-center relative overflow-hidden shadow-2xl mx-4">
         <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-cinzel font-black text-white mb-8 uppercase tracking-tighter text-glow">BECOME A <span className="text-indigo-500">LEGEND</span></h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed font-light">
              Join the 150+ strong vanguard. Help us write the next chapter of the Outland core. Your seat in the mass is waiting.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <Link to="/recruitment" className="flex items-center gap-3 px-10 py-5 bg-indigo-600 rounded-full text-white font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all group">
                  ENLIST NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
               </Link>
               <a href="https://discord.gg/AaXfdzb4Xx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-10 py-5 glass-card border-white/10 rounded-full text-white font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                  WAR ROOM
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default CreatorHub;
