
// Fix: Standardize react-router-dom import to resolve "no exported member" errors.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Fix: Added missing MessageSquare import to resolve "Cannot find name 'MessageSquare'" error.
import { Play, Video, Share2, Youtube, TrendingUp, Heart, Award, Star, ExternalLink, Shield, Sword, Hammer, Users, ArrowUpRight, Crown, X, ThumbsUp, Bell, MessageSquare, AlertCircle } from 'lucide-react';

const VideoModal = ({ videoId, onClose }: { videoId: string | null, onClose: () => void }) => {
  if (!videoId) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-[#050507]/90 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-6xl aspect-video glass-card rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(79,70,229,0.3)] border border-white/10 scale-in duration-300">
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
      desc: 'The strategic eye of the Outlands. High-stakes ZvZ and Castle Sieges.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200', 
      link: 'https://www.youtube.com/@DelRosarioJustineL' 
    },
    { 
      name: 'TheMyth-Ragnark', 
      role: 'Elite Banger DPS', 
      desc: 'Pure DPS power. High-tier Group Dungeons and small-scale murder.',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200', 
      link: 'https://www.youtube.com/@TheMyth-Regnar' 
    },
    { 
      name: 'The Myth Archive', 
      role: 'Official Guild Records', 
      desc: 'The source of truth for all historical guild milestones and VODs.',
      avatar: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=200', 
      link: 'https://discord.gg/AaXfdzb4Xx' 
    },
  ];

  const showcaseItems = [
    { id: 'kO0qD9Ms-6M', title: 'PureGold Castle Fight: Siege Defense', creator: 'The Myth Official', category: 'War', hallOfFame: true, desc: "A legendary stand against overwhelming alliance odds." },
    { id: 'uA-Lyj-IxZY', title: 'Alliance vs VoidBounds: Grand Mass', creator: 'DelRosario', category: 'War', desc: "Witness 120+ warriors massing for the core of the Outlands." },
    { id: 'moUY9ZkX__Y', title: 'Strategic Field Battle: Tactical Ops', creator: 'The Myth Official', category: 'War', desc: "Tactical positioning and shotcalling in the open world." },
    { id: 'gM1qLT1rIUM', title: 'The Push: Alliance Vanguard Part 1', creator: 'DelRosario', category: 'War', desc: "First-person perspective of the Outland push." },
    { id: 'wpQwGWvhvXI', title: 'JOKER Alliance: 150+ Warrior Mass', creator: 'The Myth Official', category: 'War', desc: "Evidence of our daily [JOKER] Alliance presence." },
    { id: 'w6jDxeLplnQ', title: 'Elite ZvZ Clash: Ragnark POV', creator: 'Ragnark', category: 'War', desc: "High-octane ZvZ combat and tactical positioning in the Outland core." },
    { id: 'stP0x35j-VA', title: 'Dungeon Run: Life in the Myth', creator: 'The Myth Official', category: 'Community', desc: "Behind the scenes of our daily guild life." },
    { id: 'xVlnzVwTzZ4', title: 'Official Recruitment: Join The Myth', creator: 'The Myth Official', category: 'Community', desc: "The call to arms. See what we offer." },
    { id: '5IPIJwsuIOc', title: 'Master Crafting: Funding the War', creator: 'The Myth Official', category: 'Economy', desc: "How we fund our max-tier regear bank." },
  ];

  const filters = ['All', 'War', 'Community', 'Economy'];

  return (
    <div className="py-32 px-6 max-w-7xl mx-auto space-y-32">
      <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />

      {/* Hero Header */}
      <section className="text-center pt-20">
        <div className="flex justify-center mb-8">
           <div className="p-4 bg-indigo-600/10 rounded-3xl border border-indigo-500/20">
             <AlertCircle className="w-12 h-12 text-indigo-500" />
           </div>
        </div>
        <h1 className="text-5xl md:text-8xl font-cinzel font-black text-white mb-8 tracking-tighter uppercase leading-none text-glow">BATTLE <br/><span className="text-indigo-500">ARCHIVES</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed font-light">
          Context is everything. Witness the 150+ warrior massing through the eyes of <span className="text-white font-bold">DelRosario</span> and <span className="text-white font-bold">Ragnark</span>.
        </p>
      </section>

      {/* SUPPORT THE TEAM */}
      <section>
        <div className="flex items-center gap-6 mb-16">
          <div className="w-12 h-12 glass-card rounded-xl border border-indigo-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.2)]">
            <Star className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-4xl font-cinzel font-black text-white uppercase tracking-tighter leading-none">Support the Team</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {creators.map((c, idx) => (
             <div key={idx} className="glass-card p-12 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center group hover:border-indigo-500/30 transition-all shadow-2xl relative overflow-hidden bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                   <Youtube className="w-12 h-12 text-white" />
                </div>
                <div className="relative mb-8">
                   <div className="w-36 h-36 rounded-full p-1 border-2 border-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-500">
                     <img src={c.avatar} className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all shadow-2xl" alt={c.name} />
                   </div>
                   <div className="absolute bottom-2 right-2 bg-red-600 w-8 h-8 rounded-full shadow-lg flex items-center justify-center border-2 border-[#050507]">
                      <Youtube className="w-4 h-4 text-white fill-white" />
                   </div>
                </div>
                <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter font-cinzel leading-tight">{c.name}</h4>
                <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">{c.role}</p>
                <p className="text-slate-400 text-base mb-10 leading-relaxed italic font-light px-2">"{c.desc}"</p>
                <a 
                  href={c.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-5 myth-gradient text-white rounded-2xl font-black text-xs flex items-center justify-center gap-3 transition-all hover:scale-[1.03] active:scale-95 shadow-[0_15px_30px_rgba(79,70,229,0.3)] uppercase tracking-widest"
                >
                   <Heart className="w-4 h-4 fill-white" /> SUPPORT CHANNEL
                </a>
             </div>
           ))}
        </div>
      </section>

      {/* BATTLEFIELD FEED - FIXED PADDING & CLIPPING */}
      <section className="relative pt-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 px-2 border-l-4 border-indigo-500 pl-8">
           <div className="max-w-xl">
             <h2 className="text-5xl md:text-7xl font-cinzel font-black text-white uppercase tracking-tighter leading-none text-glow">BATTLEFIELD <span className="text-indigo-500">FEED</span></h2>
             <p className="text-slate-500 mt-6 font-medium text-lg leading-relaxed italic">"Witness the 150+ warrior alliance in action. Real VODs. Real context."</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {showcaseItems.filter(i => !i.hallOfFame && (activeFilter === 'All' || i.category === activeFilter)).map((item) => (
            <button 
              key={item.id} 
              onClick={() => setActiveVideo(item.id)}
              className="group glass-card rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col shadow-xl text-left"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Play className="w-16 h-16 text-white fill-white" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-indigo-600/80 backdrop-blur-md text-[10px] font-black text-white rounded uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between bg-[#0a0a0c]">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors leading-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2 italic font-light">"{item.desc}"</p>
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Youtube className="w-3 h-3 text-red-500" /> {item.creator}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                   <span className="text-indigo-400 text-[10px] font-black tracking-widest uppercase">VIEW MISSION</span>
                   <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* FOOTER SUPPORT CTA */}
      <section className="bg-indigo-600/5 rounded-[3rem] p-16 md:p-24 border border-indigo-500/20 text-center relative overflow-hidden shadow-2xl">
         <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-cinzel font-black text-white mb-8 uppercase tracking-tighter text-glow">REPAIR THE <span className="text-indigo-500">ERROR</span></h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Our VODs provide the context of our power. Every video is proof of our daily 120+ alliance massing. Join the war room and finish what you were doing.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <Link to="/recruitment" className="flex items-center gap-3 px-8 py-4 myth-gradient rounded-full text-white font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                  <Users className="w-5 h-5" /> ENLIST NOW
               </Link>
               <a href="https://discord.gg/AaXfdzb4Xx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 glass-card border-white/10 rounded-full text-white font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                  <MessageSquare className="w-5 h-5" /> WAR ROOM
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default CreatorHub;
