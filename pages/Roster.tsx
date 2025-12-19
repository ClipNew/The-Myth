
import React from 'react';
import { Shield, Sword, Star, User } from 'lucide-react';

const MemberRow = ({ name, role, fame, level }: { name: string, role: string, fame: string, level: string }) => (
  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
    <td className="py-4 px-6">
      <div className="flex items-center">
        <div className="w-10 h-10 myth-gradient rounded-full flex items-center justify-center mr-4 text-white font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-white font-bold group-hover:text-indigo-400 transition-colors">{name}</div>
          <div className="text-slate-500 text-xs uppercase tracking-tighter font-bold">{level}</div>
        </div>
      </div>
    </td>
    <td className="py-4 px-6 text-slate-300 font-medium">{role}</td>
    <td className="py-4 px-6 text-indigo-400 font-bold">{fame}</td>
    <td className="py-4 px-6 text-right">
       <button className="text-slate-500 hover:text-white transition-colors"><User className="w-5 h-5" /></button>
    </td>
  </tr>
);

const Roster = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-cinzel font-bold text-white mb-4">THE LEGIONS</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">Meet the leadership and veterans steering the guild toward greatness.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="glass-card p-10 rounded-3xl border border-indigo-500/30 text-center relative overflow-hidden">
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 opacity-5">
            <Shield className="w-48 h-48" />
          </div>
          <Shield className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
          <h2 className="text-3xl font-cinzel font-bold text-white mb-2">Myth_General</h2>
          <p className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4">Guild Master</p>
          <p className="text-slate-400 text-sm leading-relaxed">The visionary and strategist behind The Myth's expansion.</p>
        </div>
        <div className="glass-card p-10 rounded-3xl border border-indigo-500/30 text-center relative overflow-hidden">
           <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 opacity-5">
            <Sword className="w-48 h-48" />
          </div>
          <Sword className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
          <h2 className="text-3xl font-cinzel font-bold text-white mb-2">SteelBane</h2>
          <p className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4">Head Shotcaller</p>
          <p className="text-slate-400 text-sm leading-relaxed">The voice of command in the thickest of ZvZ battles.</p>
        </div>
        <div className="glass-card p-10 rounded-3xl border border-indigo-500/30 text-center relative overflow-hidden">
           <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 opacity-5">
            <Star className="w-48 h-48" />
          </div>
          <Star className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
          <h2 className="text-3xl font-cinzel font-bold text-white mb-2">LoreMaster</h2>
          <p className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4">Community Lead</p>
          <p className="text-slate-400 text-sm leading-relaxed">Ensuring our culture remains strong and welcoming.</p>
        </div>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
        <div className="px-8 py-6 bg-white/5 border-b border-white/5">
          <h3 className="text-xl font-cinzel font-bold text-white">ACTIVE VETERANS</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5">
                <th className="py-4 px-6 text-slate-500 text-xs uppercase tracking-widest font-bold">Player</th>
                <th className="py-4 px-6 text-slate-500 text-xs uppercase tracking-widest font-bold">Main Role</th>
                <th className="py-4 px-6 text-slate-500 text-xs uppercase tracking-widest font-bold">Total Fame</th>
                <th className="py-4 px-6"></th>
              </tr>
            </thead>
            <tbody>
              <MemberRow name="ValkyrieX" role="Melee DPS" fame="145M" level="Veteran" />
              <MemberRow name="HealBot9000" role="Healer" fame="92M" level="Veteran" />
              <MemberRow name="IronWall" role="Tank" fame="110M" level="Officer" />
              <MemberRow name="QuickFinger" role="Bow / Ranged" fame="78M" level="Elite" />
              <MemberRow name="ShadowStep" role="Dagger / Assassin" fame="56M" level="Member" />
              <MemberRow name="OreKing" role="Gatherer" fame="210M" level="Elder" />
              <MemberRow name="MagicMan" role="Frost Mage" fame="65M" level="Member" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Roster;
