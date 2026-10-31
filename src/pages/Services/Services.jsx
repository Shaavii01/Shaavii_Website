import React from 'react';
import {
  CheckCircle2, Server, Database, Cloud, Palette, Smartphone,
  Bot, Sparkles, Sliders, RefreshCw,
  GitFork, TrendingUp, Zap, Users, BarChart3, ArrowRight
} from 'lucide-react';

const solutionCards = [
  {
    icon: Zap,
    title: 'Automate Repetitive Activities',
    description: 'Replace routine chores with automated triggers that run 24/7 without error.',
    tag: 'Automated Triggers',
  },
  {
    icon: Sliders,
    title: 'Simplify Business Workflows',
    description: 'Transform tangled multi-step procedures into clear, frictionless processes.',
    tag: 'Frictionless Steps',
  },
  {
    icon: Users,
    title: 'Connect Departments & Teams',
    description: 'Unify sales, operations, finance, and support on a single shared source of truth.',
    tag: 'Shared Context',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Operational Visibility',
    description: 'Gain instant transparency into every workflow, turnaround time, and team metric.',
    tag: 'Live Transparency',
  },
  {
    icon: RefreshCw,
    title: 'Reduce Manual Coordination',
    description: 'Automated handoffs, reminders, and alerts ensure tasks never fall through the cracks.',
    tag: 'Seamless Handoffs',
  },
  {
    icon: TrendingUp,
    title: 'Informed Business Decisions',
    description: 'Turn operational data into clear, actionable intelligence for executive leadership.',
    tag: 'Actionable Intelligence',
  },
];

const aiCapabilities = [
  { title: 'AI-Powered Task Assistance', desc: 'Context-aware guidance and suggestions for daily team actions.' },
  { title: 'Automated Data Processing', desc: 'Instant extraction, document parsing, and automated data routing.' },
  { title: 'Intelligent Workflow Management', desc: 'Adaptive routing based on real-time priorities and team workload.' },
  { title: 'Smart Business Insights', desc: 'Predictive analytics, automated alerts, and executive digests.' },
  { title: 'Automated Customer Communication', desc: 'Fast, consistent, and personalized omni-channel touchpoints.' },
  { title: 'Process Optimization', desc: 'Continuous bottleneck detection and suggested procedural improvements.' },
];

const steps = [
  {
    number: '01',
    phase: 'Phase 01',
    title: 'Connect',
    description: 'Bring your business processes, teams, and information together on one unified platform.',
    icon: GitFork,
    color: 'from-blue-600 to-indigo-600',
    lightBg: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    shadowColor: 'shadow-indigo-500/20',
  },
  {
    number: '02',
    phase: 'Phase 02',
    title: 'Configure',
    description: 'Set up custom workflows and business rules tailored to your unique operational requirements.',
    icon: Sliders,
    color: 'from-indigo-600 to-violet-600',
    lightBg: 'bg-violet-50',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    shadowColor: 'shadow-violet-500/20',
  },
  {
    number: '03',
    phase: 'Phase 03',
    title: 'Automate',
    description: 'Let intelligent automation handle repetitive tasks, routine handoffs, and approvals.',
    icon: Zap,
    color: 'from-violet-600 to-purple-600',
    lightBg: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    shadowColor: 'shadow-purple-500/20',
  },
  {
    number: '04',
    phase: 'Phase 04',
    title: 'Optimize',
    description: 'Monitor real-time performance, uncover efficiency opportunities, and continuously improve.',
    icon: TrendingUp,
    color: 'from-purple-600 to-emerald-600',
    lightBg: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    shadowColor: 'shadow-emerald-500/20',
  },
];

const techStack = [
  { name: 'Frontend', tools: 'React, Next.js, Tailwind CSS, TypeScript', icon: Palette },
  { name: 'Backend', tools: 'Node.js, Express, Python, Java', icon: Server },
  { name: 'Mobile', tools: 'React Native, Flutter, Kotlin, Swift', icon: Smartphone },
  { name: 'Database', tools: 'PostgreSQL, MongoDB, Firebase, Redis', icon: Database },
  { name: 'Cloud & DevOps', tools: 'AWS, GCP, Docker, CI/CD', icon: Cloud },
];

export default function Services() {
  return (
    <div className="w-full text-slate-800">

      {/* 1. BUSINESS AUTOMATION SOLUTIONS */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border-b border-gray-100">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles size={14} className="text-emerald-600" />
              <span>Workflow Solutions &amp; Automation</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
              Smarter Business Management.{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">
                Zero Friction.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Transform everyday tasks into connected operations where work moves faster with zero manual friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {solutionCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden text-left"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500 transition-all duration-500" />
                  
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950 tracking-tight mb-2 group-hover:text-emerald-700 transition-colors">
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

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-50/90 border border-indigo-200/80 text-indigo-950 font-bold text-sm sm:text-base shadow-sm">
              One Platform. Smarter Operations. Endless Possibilities.
            </div>
          </div>

        </div>
      </section>

      {/* 4. AI AUTOMATION SUITE */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Bot size={14} /> AI Automation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Let AI Handle the Repetitive.{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Let People Drive the Growth.
              </span>
            </h2>
            <p className="text-base text-slate-300 mb-2">
              Imagine having intelligent assistance across your business operations.
            </p>
            <p className="text-sm font-medium text-indigo-300">
              Shaavii helps businesses bring AI into everyday workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
            {aiCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all text-left"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-600/80 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles size={16} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg font-bold text-yellow-300 tracking-tight">
              Your business doesn’t need more manual effort. It needs smarter systems.
            </p>
          </div>

        </div>
      </section>

      {/* 5. 4-STEP IMPLEMENTATION METHODOLOGY */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/80 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles size={14} className="text-indigo-600" />
              <span>Implementation Methodology</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
              From Complexity to Simplicity in{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Four Connected Steps.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A continuous, frictionless operational pipeline engineered to transition your business from manual chaos to autonomous clarity.
            </p>
          </div>

          {/* Connected Flow Pipeline Container */}
          <div className="relative max-w-6xl mx-auto">
            
            {/* Horizontal Connecting Flow Line behind the step nodes (Desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full z-0 opacity-30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {steps.map((st, idx) => {
                const Icon = st.icon;
                return (
                  <div
                    key={st.number}
                    className="group relative p-7 rounded-3xl border border-slate-200/90 bg-white hover:border-indigo-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 text-left flex flex-col justify-between"
                  >
                    {/* Directional Flow Arrow to next step (Desktop) */}
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-3.5 top-10 z-20 w-7 h-7 rounded-full bg-white border-2 border-indigo-500 text-indigo-600 items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                        <ArrowRight size={13} className="stroke-[2.5]" />
                      </div>
                    )}

                    <div>
                      {/* Step Number Node + Icon Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${st.color} text-white font-black text-base flex items-center justify-center shadow-lg ${st.shadowColor} group-hover:scale-105 transition-transform duration-300`}>
                          {st.number}
                        </div>
                        <div className={`w-10 h-10 rounded-xl ${st.lightBg} ${st.textColor} flex items-center justify-center`}>
                          <Icon size={20} />
                        </div>
                      </div>

                      {/* Phase Tag & Step Title */}
                      <div className="mb-2">
                        <span className={`text-[11px] font-bold ${st.textColor} uppercase tracking-wider block mb-1`}>
                          {st.phase}
                        </span>
                        <h3 className="text-xl font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                          {st.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {st.description}
                      </p>
                    </div>

                    {/* Step Flow Footer Indicator */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span className="font-semibold text-slate-500">Step {idx + 1} of 4</span>
                      <span className="inline-flex items-center gap-1 font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
                        Flow <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 6. TECH STACK */}
      <section className="py-16 bg-slate-50 border-t border-gray-200 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-indigo-600 uppercase border border-indigo-100 rounded-full bg-indigo-50">
              Technology Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">Our Modern Tech Stack</h2>
          </div>
          <div className="grid max-w-5xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-5">
            {techStack.map((t) => (
              <div key={t.name} className="p-5 text-center transition-shadow bg-white border border-gray-200 rounded-2xl hover:shadow-md">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 border border-indigo-100 rounded-lg bg-indigo-50">
                  <t.icon size={20} className="text-indigo-600" />
                </div>
                <h3 className="mb-1 text-sm font-bold text-slate-900">{t.name}</h3>
                <p className="text-xs text-slate-500">{t.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
