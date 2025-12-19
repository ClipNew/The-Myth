
import React from 'react';
import { Shield, Sword, Star, User, TrendingUp, Zap, Target } from 'lucide-react';

const MemberRow = ({ name, role, pvpFame, totalFame, level }: { name: string, role: string, pvpFame: string, totalFame: string, level: string }) => (
  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
    <td className="py-4 px-6">
      <div className="flex items-center">
        <div className="w-10 h-10 myth-gradient rounded-full flex items-center justify-center mr-4 text-white font-bold border border-white/10 shadow-lg">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-white font-bold group-hover:text-indigo-400 transition-colors flex items-center gap-2">
            {name}
            {level === 'Officer' && <Shield className="w-3 h-3 text-indigo-400" />}
          </div>
          <div className="text-slate-500 text-[10px] uppercase tracking-widest font-black">{level}</div>
        </div>
      </div>
    </td>
    <td className="py-4 px-6 text-slate-300 font-medium text-sm uppercase tracking-tighter">{role}</td>
    <td className="py-4 px-6">
      <div className="flex flex-col">
        <span className="text-red-400 font-black text-sm tracking-tighter">{pvpFame}</span>
        <span className="text-[8px] text-slate-600 uppercase font-black">Kill Fame</span>
      </div>
    </td>
    <td className="py-4 px-6">
      <div className="flex flex-col">
        <span className="text-indigo-400 font-black text-sm tracking-tighter">{totalFame}</span>
        <span className="text-[8px] text-slate-600 uppercase font-black">Total Fame</span>
      </div>
    </td>
    <td className="py-4 px-6 text-right">
       <a href={`https://east.albiondb.net/player/${name}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
         <TrendingUp className="w-5 h-5" />
       </a>
    </td>
  </tr>
);

const Roster = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-600/10 border border-indigo-500/20 rounded-full mb-6">
          <Zap className="w-4 h-4 text-indigo-400" />
          <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Vanguard Roster</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-cinzel font-black text-white mb-6 uppercase tracking-tighter">THE <span className="text-indigo-500">LEGION</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">The core warriors of Albion East [JOKER]. Power quantified through the blood of our enemies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="glass-card p-10 rounded-3xl border border-indigo-500/30 text-center relative overflow-hidden group">
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 opacity-5 group-hover:scale-110 transition-transform">
            <Shield className="w-48 h-48" />
          </div>
          <Shield className="w-16 h-16 text-indigo-500 mx-auto mb-6 group-hover:rotate-6 transition-transform" />
          <h2 className="text-3xl font-cinzel font-black text-white mb-2 uppercase tracking-tighter">Myth_General</h2>
          <p className="text-indigo-400 font-black tracking-[0.3em] text-[10px] uppercase mb-4">Founder / Guild Master</p>
          <p className="text-slate-400 text-sm leading-relaxed italic">"Steering the vanguard through the East Continent's chaos."</p>
        </div>
        <div className="glass-card p-10 rounded-3xl border border-indigo-500/30 text-center relative overflow-hidden group">
           <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 opacity-5 group-hover:scale-110 transition-transform">
            <Sword className="w-48 h-48" />
          </div>
          <Sword className="w-16 h-16 text-indigo-500 mx-auto mb-6 group-hover:rotate-6 transition-transform" />
          <h2 className="text-3xl font-cinzel font-black text-white mb-2 uppercase tracking-tighter">SteelBane</h2>
          <p className="text-indigo-400 font-black tracking-[0.3em] text-[10px] uppercase mb-4">Head Shotcaller</p>
          <p className="text-slate-400 text-sm leading-relaxed italic">"The voice of [JOKER] in the heart of the core battles."</p>
        </div>
        <div className="glass-card p-10 rounded-3xl border border-indigo-500/30 text-center relative overflow-hidden group">
           <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 opacity-5 group-hover:scale-110 transition-transform">
            <Star className="w-48 h-48" />
          </div>
          <Star className="w-16 h-16 text-indigo-500 mx-auto mb-6 group-hover:rotate-6 transition-transform" />
          <h2 className="text-3xl font-cinzel font-black text-white mb-2 uppercase tracking-tighter">LoreMaster</h2>
          <p className="text-indigo-400 font-black tracking-[0.3em] text-[10px] uppercase mb-4">Warden / Community</p>
          <p className="text-slate-400 text-sm leading-relaxed italic">"Guardian of the Mythic culture and brotherhood."</p>
        </div>
      </div>

      <div className="glass-card rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
        <div className="px-8 py-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
          <h3 className="text-2xl font-cinzel font-black text-white uppercase tracking-tighter">ELITE VETERAN REGISTRY</h3>
          <div className="hidden md:flex items-center gap-4">
             <div className="flex items-center gap-2 text-[10px] font-black text-red-500 uppercase tracking-widest">
                <Target className="w-3 h-3" /> PvP KILLFAME TRACKING
             </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/[0.04]">
                <th className="py-4 px-6 text-slate-500 text-[10px] uppercase tracking-widest font-black">Warrior Profile</th>
                <th className="py-4 px-6 text-slate-500 text-[10px] uppercase tracking-widest font-black">ZvZ Specialization</th>
                <th className="py-4 px-6 text-slate-500 text-[10px] uppercase tracking-widest font-black">Combat Record</th>
                <th className="py-4 px-6 text-slate-500 text-[10px] uppercase tracking-widest font-black">Lifetime Fame</th>
                <th className="py-4 px-6"></th>
              </tr>
            </thead>
            <tbody>
              <MemberRow name="Mythic_Berserker" role="Frontline Hammer" pvpFame="184M" totalFame="2.1B" level="Elder" />
              <MemberRow name="Valkyrie_East" role="Spirit Hunter" pvpFame="145M" totalFame="1.4B" level="Veteran" />
              <MemberRow name="Joker_Caster" role="Permafrost" pvpFame="92M" totalFame="940M" level="Veteran" />
              <MemberRow name="IronWall_Myth" role="Hand of Justice" pvpFame="110M" totalFame="1.2B" level="Officer" />
              <MemberRow name="Silent_Arrow" role="Wailing Bow" pvpFame="78M" totalFame="810M" level="Elite" />
              <MemberRow name="Outland_King" role="Broadsword" pvpFame="210M" totalFame="3.4B" level="Elder" />
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 bg-indigo-600/5 text-center">
           <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">Data synced with Albion Database East API</p>
        </div>
      </div>
    </div>
  );
};

export default Roster;
