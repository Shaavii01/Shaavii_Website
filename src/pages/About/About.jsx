import React from 'react';
import {
  Sparkles, Zap, Cpu, Sliders, Eye, TrendingUp,
  ArrowRight
} from 'lucide-react';
import companyLogo from '../../Assets/Logo.png';

const pillars = [
  {
    title: 'Simplicity',
    description: 'Powerful capabilities through an intuitive experience that teams actually adopt and love.',
    icon: Sparkles
  },
  {
    title: 'Efficiency',
    description: 'Drastically reduce repetitive tasks and eliminate unnecessary manual coordination.',
    icon: Zap
  },
  {
    title: 'Intelligence',
    description: 'Bring AI and intelligent automation into everyday workflows and executive decisions.',
    icon: Cpu
  },
  {
    title: 'Flexibility',
    description: 'Build and customize workflows around your exact business requirements, not rigid templates.',
    icon: Sliders
  },
  {
    title: 'Visibility',
    description: 'Understand exactly what’s happening across your operations in real time with live metrics.',
    icon: Eye
  },
  {
    title: 'Scalability',
    description: 'Create dependable digital systems that expand smoothly as your customer base multiplies.',
    icon: TrendingUp
  },
];

export default function About() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full text-slate-800">
      
      {/* 1. HEADER BANNER */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white py-16 sm:py-20 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            About Shaavii
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Work Smarter. Automate Better. Grow Faster.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Shaavii empowers modern businesses to automate everyday operations, streamline workflows, connect teams, and make smarter decisions with intelligent technology.
          </p>
        </div>
      </section>

      {/* 2. STORY & MISSION */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-left">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Growing a Business Shouldn’t Mean Growing Complexity.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We started Shaavii because we observed a common struggle in growing businesses: teams buried in repetitive manual tasks, departments operating in silos, missed follow-ups, and limited operational visibility.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We believe your team deserves to focus on meaningful work, customer relationships, and strategic growth — not repetitive busywork. Shaavii brings automation, intelligent workflows, and centralized management together onto one intuitive platform.
            </p>
            <div className="pt-2">
              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-950 font-semibold text-sm">
                “Less Manual Work. More Intelligent Growth.”
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 text-white shadow-xl text-center space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-white p-3 mx-auto flex items-center justify-center shadow-md">
                <img src={companyLogo} alt="Shaavii – Powering Your Digital Future" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-black">SHAAVII</h3>
                <p className="text-xs font-semibold text-indigo-200 tracking-wide mt-1">
                  Powering Your Digital Future
                </p>
              </div>
              <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
                Transforming how businesses operate by unifying people, processes, and intelligent technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY SHAAVII? (6 PILLARS) */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              Why Shaavii?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Technology That Works Around Your Business.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-200 hover:shadow-md transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA BANNER */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-indigo-100 text-xs sm:text-sm font-semibold tracking-wide border border-white/15">
            Shaavii – Powering Your Digital Future
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your Next Stage of Growth Starts with Smarter Automation.
          </h2>

          <div className="space-y-2 text-sm sm:text-base text-indigo-100 max-w-xl mx-auto leading-relaxed">
            <p>Stop spending valuable time managing repetitive work.</p>
            <p>
              Start creating a business where processes flow, teams stay connected, and opportunities never get lost in operational complexity.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-base sm:text-lg font-extrabold text-yellow-300 tracking-tight mb-6">
              Work Smarter. Automate Better. Grow Faster.
            </p>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 h-12 px-9 bg-white hover:bg-slate-50 text-indigo-900 text-sm sm:text-base font-bold rounded-xl transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              Book Your Free Demo <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
