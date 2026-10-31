import React from 'react';
import NeuralBrainBackground from '../../components/NeuralBrainBackground';
import {
  ArrowRight, AlertCircle, FileSpreadsheet, Unplug,
  Clock, Shuffle, EyeOff, TrendingDown
} from 'lucide-react';

const problemCards = [
  {
    title: 'Manual Busywork & Data Entry',
    description: 'Hours lost copying spreadsheets, re-entering identical data across siloed tools, and chasing endless routine updates.',
    icon: FileSpreadsheet,
    tag: 'Time Drain',
    stat: '3.5+ Hours Lost Daily',
  },
  {
    title: 'Disconnected Teams & Silos',
    description: 'Critical context slips through the cracks between sales, ops, and fulfillment—leading to dropped balls and stalled handoffs.',
    icon: Unplug,
    tag: 'Team Friction',
    stat: '40% Execution Drag',
  },
  {
    title: 'Stalled Approvals & Bottlenecks',
    description: 'Important customer decisions and purchase orders get held hostage in buried inboxes and missing manager sign-offs.',
    icon: Clock,
    tag: 'Momentum Loss',
    stat: 'Days Wasted Waiting',
  },
  {
    title: 'Scattered Coordination & Chaos',
    description: 'Messy chat threads, phone calls, and missed shifts make holding staff accountable feel like an uphill battle.',
    icon: Shuffle,
    tag: 'Accountability Gap',
    stat: 'Frequent Task Overlap',
  },
  {
    title: 'Zero Real-Time Visibility',
    description: 'Flying blind without live operational metrics, revenue velocity, or bottleneck tracking until month-end reports arrive.',
    icon: EyeOff,
    tag: 'Blind Spots',
    stat: 'No Real-Time Clarity',
  },
  {
    title: 'High Payroll on Low-Value Work',
    description: 'Your highest-paid talent spends their workday managing clerical friction instead of driving revenue and strategic growth.',
    icon: TrendingDown,
    tag: 'Talent Drain',
    stat: 'Burnt-Out Capacity',
  },
];

export default function Home() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full text-slate-800">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-white pt-10 sm:pt-14 md:pt-20 lg:pt-28 pb-14 sm:pb-20 lg:pb-28 border-b border-gray-100">
        {/* Neuralink-style Brain Background */}
        <NeuralBrainBackground />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Title on Top */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-4 sm:mb-5 mt-1 sm:mt-0">
            Run Your Business Smarter.{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent block sm:inline">
              Not Harder.
            </span>
          </h1>

          {/* Tagline Badge Below Title */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 rounded-full bg-indigo-50/90 border border-indigo-200/80 text-indigo-700 text-xs sm:text-sm font-semibold tracking-wide shadow-sm mb-5 sm:mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>Shaavii – Powering Your Digital Future</span>
          </div>

          {/* Value Proposition */}
          <div className="max-w-2xl mx-auto space-y-3 mb-10">
            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
              Your business deserves more than manual processes, disconnected tools, and endless follow-ups.
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              <strong className="text-slate-900 font-semibold">Shaavii</strong> powers your digital future by helping businesses automate everyday operations, streamline workflows, connect teams, and make smarter decisions with intelligent technology.
            </p>
            <p className="text-sm sm:text-base font-semibold text-indigo-950">
              Bring your people, processes, and business operations together on one powerful platform.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="w-full sm:w-auto h-12 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-indigo-500/25 flex items-center justify-center gap-2 text-sm sm:text-base hover:-translate-y-0.5 cursor-pointer"
            >
              Get Started <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              onClick={(e) => scrollTo(e, 'services')}
              className="w-full sm:w-auto h-12 px-8 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-200 hover:border-slate-300 transition-all text-sm sm:text-base shadow-sm flex items-center justify-center text-center hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Services
            </a>
          </div>

          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold tracking-wide">
            Powering Your Digital Future • Less Manual Work. More Intelligent Growth.
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="relative pt-16 sm:pt-24 pb-10 sm:pb-12 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border-b border-gray-100 overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200/70 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <AlertCircle size={15} className="text-rose-600" />
              <span>The Operational Bottlenecks</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
              Growing a Business Shouldn’t Mean{' '}
              <span className="bg-gradient-to-r from-rose-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                Growing Complexity.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              As modern businesses scale, routine chores, department silos, and manual procedures silently drain productivity and stifle momentum.
            </p>
          </div>

          {/* Cards Grid: Elevated modern UI with custom icons & stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
            {problemCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-rose-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden text-left"
                >
                  {/* Subtle Hover Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-500/0 to-transparent group-hover:via-rose-500 transition-all duration-500" />

                  <div>
                    {/* Icon + Tag Header */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/70">
                        {item.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-slate-950 tracking-tight mb-2 group-hover:text-rose-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Operational Impact Footer */}
                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-400">Business Impact</span>
                    <span className="font-semibold text-xs text-rose-700 bg-rose-50/80 border border-rose-200/70 px-2.5 py-1 rounded-md">
                      {item.stat}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Resolution Transition Banner: Full width (max-w-6xl) matching cards grid, button removed */}
          <div className="relative max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-950 to-indigo-950 text-white p-8 sm:p-12 shadow-xl overflow-hidden border border-indigo-900/40 text-center">
            {/* Ambient Background Glow */}
            <div className="absolute -right-16 -top-16 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-indigo-200 text-xs font-bold uppercase tracking-widest border border-white/10 backdrop-blur-sm">
                The Antidote
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug lg:whitespace-nowrap">
                Your team deserves meaningful work, not repetitive busywork.
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-indigo-200/90 leading-relaxed max-w-4xl mx-auto lg:whitespace-nowrap">
                Shaavii replaces these 6 operational bottlenecks with unified cloud workflows, intelligent AI automation, and real-time clarity.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
