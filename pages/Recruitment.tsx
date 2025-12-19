
import React, { useState } from 'react';
import { Send, CheckCircle, Video, Heart, Shield, Crown, Play, Sword, Users, Star, ArrowRight, X, Loader2 } from 'lucide-react';

const Recruitment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay for polish
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="py-32 px-6 max-w-7xl mx-auto space-y-32">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-indigo-500/30 text-indigo-400 text-[10px] font-black tracking-[0.3em] uppercase mb-10 shadow-xl">
          <Crown className="w-3 h-3 text-indigo-400 animate-pulse" /> Now Enlisting Veterans
        </div>
        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-cinzel font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
          ENLIST IN <br/>
          <span className="text-indigo-500 text-glow">THE MYTH</span>
        </h1>
        <p className="text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed font-light">
          We are recruiting elite warriors for our daily <span className="text-white font-bold">150+ warrior massing</span>. Join the legend today.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1 space-y-12">
          <div>
            <h2 className="text-3xl font-cinzel font-black text-white mb-10 uppercase tracking-tighter border-l-4 border-indigo-500 pl-6 text-glow">THE LEGENDARY ADVANTAGE</h2>
            <div className="space-y-10">
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-indigo-500/10">
                    <Crown className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tighter">150+ Strong</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">Experience the largest active guild presence in the Outland core.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-indigo-500/10">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tighter">Elite Regears</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">T9-T11 coverage. Our war chest ensures you always have the best gear.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-indigo-500/10">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tighter">0% Tax Forever</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">Keep 100% of your silver. We value your participation over your taxes.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600/5 p-10 rounded-[2.5rem] border border-indigo-500/30 shadow-2xl">
            <h3 className="text-xl font-cinzel font-black text-indigo-400 mb-8 uppercase tracking-widest text-center border-b border-indigo-500/20 pb-4">REQUIREMENTS</h3>
            <ul className="space-y-5">
              <li className="flex items-center text-slate-300 font-bold text-sm group cursor-default">
                <CheckCircle className="w-5 h-5 text-indigo-400 mr-4 shrink-0 group-hover:scale-110 transition-transform" /> Meta Proficiency
              </li>
              <li className="flex items-center text-slate-300 font-bold text-sm group cursor-default">
                <CheckCircle className="w-5 h-5 text-indigo-400 mr-4 shrink-0 group-hover:scale-110 transition-transform" /> Active Discord presence
              </li>
              <li className="flex items-center text-slate-300 font-bold text-sm group cursor-default">
                <CheckCircle className="w-5 h-5 text-indigo-400 mr-4 shrink-0 group-hover:scale-110 transition-transform" /> 20M+ Combat Fame
              </li>
              <li className="flex items-center text-slate-300 font-bold text-sm group cursor-default">
                <CheckCircle className="w-5 h-5 text-indigo-400 mr-4 shrink-0 group-hover:scale-110 transition-transform" /> Commitment to War Mass
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2">
          {submitted ? (
            <div className="glass-card p-20 rounded-[3rem] text-center border border-indigo-500/30 bg-indigo-600/5 animate-in zoom-in duration-700 h-full flex flex-col justify-center">
              <div className="w-32 h-32 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-indigo-500/30">
                <Crown className="w-16 h-16 text-indigo-500" />
              </div>
              <h2 className="text-5xl font-cinzel font-black text-white mb-6 uppercase tracking-tighter">APPLICATION SENT</h2>
              <p className="text-slate-400 mb-10 text-xl font-light">
                Our Officers will contact you via Discord shortly. Prepare for the mass.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-indigo-400 font-black uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2">
                Submit Another Application <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-12 md:p-16 rounded-[3.5rem] border border-white/5 space-y-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Shield className="w-40 h-40 text-indigo-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] pl-2">In-Game Name</label>
                  <input required type="text" placeholder="e.g. MythicWarden" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] pl-2">Primary Role</label>
                  <select required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                    <option value="" disabled className="bg-[#0a0a0f]">Select Role...</option>
                    <option value="tank" className="bg-[#0a0a0f]">Tank</option>
                    <option value="dps" className="bg-[#0a0a0f]">DPS</option>
                    <option value="healer" className="bg-[#0a0a0f]">Healer / Support</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] pl-2">Discord ID</label>
                <input required type="text" placeholder="e.g. myth_legend#1234" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] pl-2">Experience</label>
                <textarea required rows={5} placeholder="Describe your experience in large-scale ZvZ." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-glint w-full py-7 bg-indigo-600 text-white rounded-[1.5rem] font-black text-2xl shadow-2xl shadow-indigo-600/30 hover:bg-indigo-500 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center uppercase tracking-tighter disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>SUBMIT APPLICATION <Send className="ml-4 w-6 h-6" /></>
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
