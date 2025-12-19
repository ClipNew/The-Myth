
import React from 'react';
import { Zap } from 'lucide-react';

const EventImageCard = ({ title, tag, image, highlight }: { title: string, tag: string, image: string, highlight?: boolean }) => (
  <a 
    href="https://discord.gg/AaXfdzb4Xx" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`group relative aspect-[3/4] rounded-[3rem] overflow-hidden border transition-all duration-700 shadow-2xl ${highlight ? 'border-yellow-500/40 shadow-yellow-500/10' : 'border-white/5 hover:border-indigo-500/40'}`}
  >
    {/* Full Photo */}
    <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" alt={title} />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
    
    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-10">
      <span className={`inline-block px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest mb-4 self-start shadow-xl ${highlight ? 'bg-yellow-600 text-white' : 'bg-indigo-600 text-white'}`}>
        {tag}
      </span>
      <h3 className="text-3xl font-cinzel font-black text-white uppercase tracking-tighter leading-none group-hover:text-glow transition-all">
        {title}
      </h3>
      <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-slate-400 group-hover:text-white uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        Click to Join & Enlist
      </div>
    </div>
  </a>
);

const Activities = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto space-y-32">
      <div className="text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-indigo-600/10 rounded-full border border-indigo-500/20 mb-6">
           < Zap className="w-5 h-5 text-indigo-500 animate-pulse" />
           <span className="text-xs font-black text-white uppercase tracking-[0.4em]">Operational Pipeline</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-cinzel font-black text-white mb-8 uppercase tracking-tighter leading-none">GUILD <span className="text-indigo-500 text-glow">EVENTS</span></h1>
        <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
          Daily high-tier content. Click any photo below to join the **Discord War Room** and enlisting for today's mass.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <EventImageCard 
          title="Season Gala: 200M"
          tag="SEASONAL"
          image="https://assets.albiononline.com/uploads/media/default/media/d51bd4ee4b6540491eaf0e41e90dc1951888453d.jpeg"
          highlight={true}
        />
        <EventImageCard 
          title="Territory Massing"
          tag="WAR OPERATION"
          image="https://assets.albiononline.com/uploads/media/default/media/995c4292d2af208ef5201290794abb2b6596f803.jpeg"
        />
        <EventImageCard 
          title="Open World Fight"
          tag="BATTLE"
          image="https://assets.albiononline.com/uploads/media/default/media/7907b5e030c8dd81de15f1827c1082e07f141eb0.jpeg"
        />
        <EventImageCard 
          title="Gold Ava Raid"
          tag="ELITE PVE"
          image="https://assets.albiononline.com/uploads/media/default/media/c8f43725ef10bc1594f85d05bc2e8946488e1ece.jpeg"
        />
        <EventImageCard 
          title="Faction Warfare"
          tag="CITY WAR"
          image="https://assets.albiononline.com/uploads/media/default/media/d51bd4ee4b6540491eaf0e41e90dc1951888453d.jpeg"
        />
        <EventImageCard 
          title="Outland Exploration"
          tag="EXPLORATION"
          image="https://assets.albiononline.com/uploads/media/default/media/a16098b4e57317ad97d1cac2f270dcb52a051ceb.jpeg"
        />
      </div>

      <section className="glass-card p-16 md:p-32 rounded-[4rem] border border-white/5 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
           <h2 className="text-4xl md:text-7xl font-cinzel font-black text-white mb-10 uppercase tracking-tighter leading-none text-glow">HAVE A WILD IDEA?</h2>
           <p className="text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light text-xl italic font-cinzel">
             "Propose your own operations and get access to guild logistics."
           </p>
           <a href="https://discord.gg/AaXfdzb4Xx" target="_blank" rel="noopener noreferrer" className="px-16 py-7 bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white rounded-full font-black text-2xl uppercase tracking-tighter transition-all shadow-[0_0_50px_rgba(79,70,229,0.3)] hover:scale-105 active:scale-95 inline-block">
             PROPOSE ON DISCORD
           </a>
        </div>
      </section>
    </div>
  );
};

export default Activities;
