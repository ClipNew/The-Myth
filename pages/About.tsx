
import React from 'react';
import { Target, Heart, Award, History, Crown, Zap, Video, Flame } from 'lucide-react';

const Milestone = ({ date, title, text, icon: Icon }: { date: string, title: string, text: string, icon?: any }) => (
  <div className="relative pl-16 pb-16 border-l border-indigo-500/30 last:border-0 last:pb-0">
    <div className="absolute left-[-12px] top-0 w-6 h-6 rounded-full mythic-gradient border-4 border-[#050507] flex items-center justify-center">
      {Icon && <Icon className="w-3 h-3 text-white" />}
    </div>
    <span className="text-indigo-400 font-black text-xs tracking-[0.3em] mb-3 block uppercase">{date}</span>
    <h3 className="text-2xl font-cinzel font-black text-white mb-4 uppercase tracking-tighter">{title}</h3>
    <p className="text-slate-400 leading-relaxed max-w-2xl text-lg font-light">{text}</p>
  </div>
);

const About = () => {
  return (
    <div className="py-32 px-6 max-w-7xl mx-auto space-y-40">
      {/* Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card border-indigo-500/30 text-indigo-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
            Established 2022
          </div>
          <h1 className="text-6xl md:text-8xl font-cinzel font-black text-white mb-10 leading-none uppercase tracking-tighter">OUR <br/><span className="text-indigo-500">SPIRIT</span></h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10 italic border-l-4 border-indigo-500 pl-8 font-light">
            "In the Outlands, gear is temporary. Loot is fleeting. But the story we write together is eternal."
          </p>
          <p className="text-slate-400 leading-relaxed mb-12 text-lg font-light">
            The Myth was founded on the idea that Albion is a sandbox for more than just fighting. It's a place for creators to build brands, for friends to bond over shared victories, and for leaders to emerge from the chaos. We value <span className="text-white font-bold">teamwork over taxes</span> and <span className="text-white font-bold">community over competition</span>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl border-l-4 border-indigo-500 group hover:bg-white/5 transition-all">
              <h4 className="text-white font-black mb-3 flex items-center tracking-widest uppercase text-sm"><Heart className="w-5 h-5 mr-3 text-indigo-500" /> BONDING</h4>
              <p className="text-slate-500 text-sm leading-relaxed">We focus on the people behind the keyboards. We grow as a singular, lethal entity.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border-l-4 border-indigo-500 group hover:bg-white/5 transition-all">
              <h4 className="text-white font-black mb-3 flex items-center tracking-widest uppercase text-sm"><Zap className="w-5 h-5 mr-3 text-indigo-500" /> CREATIVITY</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Supporting the next generation of Albion content creators with high-octane footage.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 relative group">
            {/* UPDATED: High-impact battle scene photo */}
            <img src="https://assets.albiononline.com/uploads/media/default/media/d51bd4ee4b6540491eaf0e41e90dc1951888453d.jpeg" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt="Guild Brotherhood" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent"></div>
          </div>
          <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-3xl shadow-2xl border-2 border-indigo-500/30 hidden md:block backdrop-blur-2xl">
            <div className="text-5xl font-black text-white mb-2 tracking-tighter text-glow">0% TAX</div>
            <div className="text-indigo-400 font-black tracking-[0.3em] text-[10px] uppercase">Always & Forever</div>
          </div>
        </div>
      </div>

      {/* Leadership & Opportunity */}
      <section>
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-cinzel font-black text-white mb-6 uppercase tracking-tighter">LEAD THE <span className="text-indigo-500">GUILD</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Power is earned on the battlefield. We are always looking for the next generation of commanders, organizers, and creators.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Crown, title: "Shotcallers", text: "Master the ZvZ battlefield. We provide full T8 packages for our leading voices.", perks: ["Lead ZvZ Squads", "Castle Strategy", "Mentor Warriors"] },
            { icon: Target, title: "Organizers", text: "The glue of the guild. Handle the logistics of raids, caravans, and bonding nights.", perks: ["World Events", "Loot Splits", "Social Nights"] },
            { icon: Video, title: "Media Leads", text: "Show the world our glory. Help members grow their channels and edit montages.", perks: ["Edit Montages", "Social Promos", "Creator Support"] }
          ].map((item, idx) => (
            <div key={idx} className="p-10 border border-white/5 rounded-[2.5rem] bg-white/5 hover:bg-white/10 hover:border-indigo-500/30 transition-all group">
              <item.icon className="w-12 h-12 text-indigo-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              <h3 className="text-2xl font-cinzel font-black text-white mb-4 uppercase tracking-widest">{item.title}</h3>
              <p className="text-slate-400 text-base mb-8 font-light leading-relaxed">{item.text}</p>
              <ul className="space-y-3">
                {item.perks.map((perk, pIdx) => (
                  <li key={pIdx} className="text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"></span> {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section>
        <div className="flex items-center gap-6 mb-20">
          <History className="w-12 h-12 text-indigo-500" />
          <h2 className="text-4xl md:text-6xl font-cinzel font-black text-white uppercase tracking-tighter leading-none">THE TIMELINE</h2>
        </div>
        <div className="ml-6 space-y-4">
          <Milestone 
            date="MAY 2022" 
            title="THE SPARK" 
            text="The Myth was founded with a single goal: to prove that a guild could dominate without oppressive taxes or ego." 
          />
          <Milestone 
            date="FEB 2023" 
            title="MEDIA AWAKENING" 
            text="Recognizing the power of content, we established the Creator Hub to immortalize our battles in 4K." 
          />
          <Milestone 
            date="JAN 2024" 
            title="PUREGOLD SIEGE" 
            text="The legendary defense of PureGold Castle. A defining moment where The Myth held the line against overwhelming odds, captured in one of our most iconic VODs." 
            icon={Flame}
          />
          <Milestone 
            date="PRESENT" 
            title="A GLOBAL POWER" 
            text="Now a thriving alliance force, massing 120+ daily and leading the charge into the heart of the Outlands." 
            icon={Crown}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
