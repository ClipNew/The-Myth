
import React, { useState } from 'react';
import { Send, CheckCircle, Video, Heart, Shield, Crown, Play, Sword, Users, Star, ArrowRight, X, Loader2, Target, Zap, ShieldAlert } from 'lucide-react';

const Recruitment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay for polish
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const roles = [
    { id: "tank", label: "Frontline Tank", icon: ShieldAlert, color: "text-blue-400" },
    { id: "dps", label: "Melee/Ranged DPS", icon: Sword, color: "text-red-400" },
    { id: "support", label: "Healer/Support", icon: Heart, color: "text-emerald-400" }
  ];

  return (
    <div className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto space-y-20 md:space-y-32">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-indigo-500/30 text-indigo-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-xl">
          <Crown className="w-3 h-3 text-indigo-400 animate-pulse" /> Now Enlisting Veterans
        </div>
        <h1 className="text-4xl md:text-8xl lg:text-[10rem] font-cinzel font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
          ENLIST IN <br/>
          <span className="text-indigo-500 text-glow">THE MYTH</span>
        </h1>
        <p className="text-slate-400 max-w-3xl mx-auto text-base md:text-xl leading-relaxed font-light px-4">
          We are recruiting elite warriors for our daily <span className="text-white font-bold">150+ warrior massing</span>. Join the legend today.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
        <div className="lg:col-span-1 space-y-10 md:space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-cinzel font-black text-white mb-8 md:mb-10 uppercase tracking-tighter border-l-4 border-indigo-500 pl-6 text-glow">THE LEGENDARY ADVANTAGE</h2>
            <div className="space-y-8 md:space-y-10">
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2.5 md:p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Crown className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-tighter">150+ Strong</h4>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Experience the largest active guild presence in the Outland core.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2.5 md:p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Shield className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-tighter">Elite Regears</h4>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">T9-T11 coverage. Our war chest ensures you always have the best gear.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2.5 md:p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Users className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-tighter">0% Tax Forever</h4>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Keep 100% of your silver. We value your participation over your taxes.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600/5 p-8 md:p-10 rounded-[2rem] border border-indigo-500/30 shadow-2xl">
            <h3 className="text-base md:text-xl font-cinzel font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-widest text-center border-b border-indigo-500/20 pb-4">REQUIREMENTS</h3>
            <ul className="space-y-4 md:space-y-5">
              {[
                "Meta Proficiency",
                "Active Discord presence",
                "20M+ Combat Fame",
                "Commitment to War Mass"
              ].map((req, i) => (
                <li key={i} className="flex items-center text-slate-300 font-bold text-xs md:text-sm group cursor-default">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 mr-4 shrink-0" /> {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2">
          {submitted ? (
            <div className="glass-card p-12 md:p-20 rounded-[2.5rem] md:rounded-[3rem] text-center border border-indigo-500/30 bg-indigo-600/5 animate-in zoom-in duration-700 h-full flex flex-col justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10 border border-indigo-500/30">
                <Crown className="w-12 h-12 md:w-16 md:h-16 text-indigo-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-cinzel font-black text-white mb-6 uppercase tracking-tighter">APPLICATION SENT</h2>
              <p className="text-slate-400 mb-10 text-base md:text-xl font-light px-4">
                Our Officers will contact you via Discord shortly. Prepare for the mass.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-indigo-400 font-black uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2 text-xs md:text-sm">
                Submit Another Application <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 space-y-8 md:space-y-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Shield className="w-32 h-32 md:w-40 md:h-40 text-indigo-500" />
              </div>

              <div className="space-y-6">
                <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] pl-2">1. Select Your Battlefield Identity</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-6 rounded-2xl border transition-all flex flex-col items-center text-center gap-4 ${
                        selectedRole === role.id 
                        ? 'bg-indigo-600/20 border-indigo-500 shadow-lg scale-[1.02]' 
                        : 'bg-white/5 border-white/10 hover:border-indigo-500/30'
                      }`}
                    >
                      <role.icon className={`w-8 h-8 ${role.color}`} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">{role.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] pl-2">In-Game Name</label>
                  <input required type="text" placeholder="e.g. MythicWarden" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 text-sm md:text-base text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] pl-2">Discord ID</label>
                  <input required type="text" placeholder="e.g. myth_legend#1234" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 text-sm md:text-base text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] pl-2">Brief Combat Record</label>
                <textarea required rows={4} placeholder="Summarize your large-scale ZvZ experience." className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 text-sm md:text-base text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || !selectedRole}
                className="btn-glint w-full py-5 md:py-7 bg-indigo-600 text-white rounded-xl md:rounded-[1.5rem] font-black text-lg md:text-2xl shadow-2xl shadow-indigo-600/30 hover:bg-indigo-500 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center uppercase tracking-tighter disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>SUBMIT APPLICATION <Send className="ml-4 w-5 h-5 md:w-6 md:h-6" /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
