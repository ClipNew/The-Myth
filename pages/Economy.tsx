
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Coins, 
  ShieldCheck, 
  PieChart, 
  CheckCircle2, 
  Hammer, 
  X, 
  Map, 
  Zap, 
  Trophy, 
  Shield,
  Truck,
  Pickaxe,
  TrendingUp,
  Gem,
  ArrowRight,
  Target,
  Sword,
  Play
} from 'lucide-react';

const VideoModal = ({ videoId, onClose }: { videoId: string | null, onClose: () => void }) => {
  if (!videoId) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-[#050507]/95 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-6xl aspect-video glass-card rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(79,70,229,0.4)] border border-white/10 scale-in duration-300">
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

const Economy = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto space-y-32">
      <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      
      <div className="text-center pt-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-indigo-600/10 rounded-full border border-indigo-500/20 mb-6">
           <Coins className="w-5 h-5 text-indigo-400" />
           <span className="text-xs font-black text-white uppercase tracking-[0.4em]">Zero Tax Economy</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-cinzel font-black text-white mb-8 uppercase tracking-tighter leading-none">THE <span className="text-indigo-500 text-glow">REVENUE</span> ENGINE</h1>
        <p className="text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed font-light">
          We don't just fight for land; we fight for silver. The Myth provides the escort, the assets, and the logistics to turn your effort into a fortune.
        </p>
      </div>

      {/* Primary Perks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="glass-card p-12 rounded-[3rem] border border-white/5 text-center group hover:border-indigo-500/30 transition-all bg-gradient-to-br from-white/[0.03] to-transparent shadow-2xl">
          <Trophy className="w-16 h-16 text-[#fbbf24] mx-auto mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-cinzel font-black text-white mb-6 uppercase tracking-tighter">200M GALA</h3>
          <p className="text-slate-400 text-lg leading-relaxed font-light italic">Massive seasonal giveaways. We return 200M+ silver to the warriors who make it happen.</p>
        </div>
        <div className="glass-card p-12 rounded-[3rem] border border-white/5 text-center group hover:border-indigo-500/30 transition-all bg-gradient-to-br from-white/[0.03] to-transparent shadow-2xl">
          <Shield className="w-16 h-16 text-indigo-400 mx-auto mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-cinzel font-black text-white mb-6 uppercase tracking-tighter">T9-T11 REGEAR</h3>
          <p className="text-slate-400 text-lg leading-relaxed font-light italic">Don't sweat the deaths. Our bank covers your high-tier meta sets for all guild-mandated content.</p>
        </div>
        <div className="glass-card p-12 rounded-[3rem] border border-white/5 text-center group hover:border-indigo-500/30 transition-all bg-gradient-to-br from-white/[0.03] to-transparent shadow-2xl">
          <Target className="w-16 h-16 text-emerald-500 mx-auto mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-cinzel font-black text-white mb-6 uppercase tracking-tighter">0% GUILD TAX</h3>
          <p className="text-slate-400 text-lg leading-relaxed font-light italic">You keep 100% of your silver. We fund the guild through strategic assets and alliance territory.</p>
        </div>
      </div>

      {/* BLACK MARKET FEATURE SECTION */}
      <section className="relative glass-card rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 border border-indigo-500/20 overflow-hidden shadow-2xl shadow-indigo-500/5">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
          <Hammer className="w-80 h-80 text-white" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 md:space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-indigo-600/20 rounded-xl border border-indigo-500/30">
               <Sword className="w-5 h-5 text-indigo-400" />
               <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Caerleon Elite Operations</span>
            </div>
            {/* FIXED: Responsive Typography for "DOMINATION" word */}
            <h2 className="text-[clamp(2.2rem,10vw,4.5rem)] md:text-7xl font-cinzel font-black text-white uppercase tracking-tighter leading-[0.9]">
              BLACK MARKET <br/>
              <span className="text-indigo-500 block mt-1">DOMINATION</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed italic border-l-4 border-indigo-500 pl-6 md:pl-8">
              "The most profitable NPC in Albion. We master the supply chain from Royal City crafting to Caerleon's underbelly."
            </p>
            <div className="space-y-6">
              {[
                { title: "Craft & Transport", desc: "Refine materials in Royal Cities, craft meta gear, and execute escorted high-stakes runs to Caerleon." },
                { title: "Escorted Caerleon Runs", desc: "Twice-daily 150+ warrior convoys to Caerleon. Zero-risk transport through the red zone." },
                { title: "Black Market Profits", desc: "Earn massive silver by selling directly to the Black Market, bypassing player-market fees." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600/10 rounded-2xl border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xs md:text-sm uppercase tracking-widest mb-1 md:mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => setActiveVideo('5IPIJwsuIOc')}>
              <img src="https://img.youtube.com/vi/5IPIJwsuIOc/maxresdefault.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" alt="Black Market Operations Video" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-600/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-white/20">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 md:gap-10">
               <div className="text-center">
                 <div className="text-2xl md:text-3xl font-black text-white tracking-tighter">50M+</div>
                 <div className="text-[9px] md:text-[10px] text-indigo-400 font-bold uppercase tracking-widest">PROFIT / RUN</div>
               </div>
               <div className="w-[1px] h-8 md:h-10 bg-white/10"></div>
               <div className="text-center">
                 <div className="text-2xl md:text-3xl font-black text-white tracking-tighter">ZERO</div>
                 <div className="text-[9px] md:text-[10px] text-indigo-400 font-bold uppercase tracking-widest">LOSS RECORD</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL PROFIT ENGINES */}
      <section className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-cinzel font-black text-white uppercase tracking-tighter mb-4">DIVERSIFIED <span className="text-indigo-500 text-glow">REVENUE</span></h2>
          <p className="text-slate-500 text-lg md:text-xl font-light">"More ways to fill your war chest than any other guild."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Royal City Transport */}
          <div className="glass-card rounded-[3rem] p-10 border border-white/5 flex flex-col group hover:border-indigo-500/40 transition-all shadow-xl bg-[#0a0a0c] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Truck className="w-24 h-24 text-white" />
            </div>
            <div className="mb-8">
              <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Truck className="w-8 h-8" />
              </div>
            </div>
            <h4 className="text-2xl font-cinzel font-black text-white mb-4 uppercase tracking-tighter">ROYAL CITY TRANSPORTS</h4>
            <p className="text-slate-400 text-sm mb-10 italic font-light leading-relaxed">"Transporting refined bars between Royal Cities to exploit biome-specific bonuses. We provide the armored oxes and scouts."</p>
            <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2 text-[9px] font-black text-indigo-400 uppercase tracking-[0.3em]">
              <Map className="w-3 h-3" /> ROYAL ARBITRAGE
            </div>
          </div>

          {/* T8 Gathering */}
          <div className="glass-card rounded-[3rem] p-10 border border-white/5 flex flex-col group hover:border-indigo-500/40 transition-all shadow-xl bg-[#0a0a0c] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Pickaxe className="w-24 h-24 text-white" />
            </div>
            <div className="mb-8">
              <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Pickaxe className="w-8 h-8" />
              </div>
            </div>
            <h4 className="text-2xl font-cinzel font-black text-white mb-4 uppercase tracking-tighter">T8 ALLIANCE GATHERING</h4>
            <p className="text-slate-400 text-sm mb-10 italic font-light leading-relaxed">"Gathering in the world's most valuable T8 maps. Protected by the 150+ vanguard in Alliance territories."</p>
            <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2 text-[9px] font-black text-indigo-400 uppercase tracking-[0.3em]">
              <Gem className="w-3 h-3" /> ELITE RESOURCE ACCESS
            </div>
          </div>

          {/* World Bosses */}
          <div className="glass-card rounded-[3rem] p-10 border border-white/5 flex flex-col group hover:border-indigo-500/40 transition-all shadow-xl bg-[#0a0a0c] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap className="w-24 h-24 text-white" />
            </div>
            <div className="mb-8">
              <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Zap className="w-8 h-8" />
              </div>
            </div>
            <h4 className="text-2xl font-cinzel font-black text-white mb-4 uppercase tracking-tighter">CORE BOSS SPLITS</h4>
            <p className="text-slate-400 text-sm mb-10 italic font-light leading-relaxed">"Daily alliance-wide world boss raids. Huge fame, massive artifact loot, and 100% transparent silver distribution for all participants."</p>
            <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2 text-[9px] font-black text-indigo-400 uppercase tracking-[0.3em]">
              <ShieldCheck className="w-3 h-3" /> ALLIANCE WORLD BOSSES
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE SPLIT & TRANSPARENCY */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
        <div className="glass-card p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 relative overflow-hidden flex flex-col justify-between shadow-2xl">
          <div>
            <h2 className="text-3xl md:text-4xl font-cinzel font-black text-white mb-8 md:mb-10 flex items-center uppercase tracking-tighter text-glow">
              <PieChart className="w-8 h-8 md:w-10 md:h-10 text-indigo-500 mr-4 md:mr-5" /> LOOT DISTRIBUTION
            </h2>
            <p className="text-slate-400 mb-8 md:mb-10 text-lg md:text-xl leading-relaxed font-light italic">
              "We run on 100% transparency. Every silver gained in a guild operation is tracked and shared."
            </p>
            <div className="space-y-6 md:space-y-8">
              <div className="flex justify-between items-center p-5 md:p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-indigo-500/20 transition-all">
                <span className="text-slate-300 font-bold text-lg md:text-xl uppercase tracking-widest">Warriors</span>
                <span className="text-emerald-400 font-black text-3xl md:text-4xl tracking-tighter">80%</span>
              </div>
              <div className="flex justify-between items-center p-5 md:p-6 bg-white/5 rounded-2xl border border-indigo-500/20 group hover:scale-[1.02] transition-transform">
                <span className="text-slate-300 font-bold text-lg md:text-xl uppercase tracking-widest">Regears</span>
                <span className="text-indigo-400 font-black text-3xl md:text-4xl tracking-tighter">15%</span>
              </div>
              <div className="flex justify-between items-center p-5 md:p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-indigo-500/20 transition-all">
                <span className="text-slate-300 font-bold text-lg md:text-xl uppercase tracking-widest">Logistics</span>
                <span className="text-purple-400 font-black text-3xl md:text-4xl tracking-tighter">5%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-indigo-500/20 relative overflow-hidden bg-gradient-to-br from-indigo-500/[0.05] to-transparent shadow-2xl flex flex-col justify-center text-center">
            <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-indigo-500 mx-auto mb-8 md:mb-10 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-cinzel font-black text-white mb-6 uppercase tracking-tighter">ZERO FINANCIAL RISK</h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light italic mb-10 md:mb-12">
              "In The Myth, you never pay to play. No mandatory taxes, no donation quotas. We provide the tools; you provide the skill."
            </p>
            <Link to="/recruitment" className="inline-flex items-center justify-center gap-3 md:gap-4 py-5 md:py-6 px-8 md:px-12 bg-indigo-600 text-white rounded-full font-black text-lg md:text-xl uppercase tracking-tighter shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all group">
               ENLIST IN THE VANGUARD <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Economy;
