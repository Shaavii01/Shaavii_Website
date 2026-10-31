import React from 'react';
import {
  CheckCircle2, Server, Database, Cloud, Palette, Smartphone,
  Bot, Sparkles, Sliders, RefreshCw,
  GitFork, TrendingUp, Zap, Users, BarChart3, ArrowRight, Cpu
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
    title: 'Connect',
    description: 'Bring your business processes, teams, and information together on one unified platform.',
    icon: GitFork,
  },
  {
    number: '02',
    title: 'Configure',
    description: 'Set up custom workflows and business rules tailored to your unique operational requirements.',
    icon: Sliders,
  },
  {
    number: '03',
    title: 'Automate',
    description: 'Let intelligent automation handle repetitive tasks, routine handoffs, and approvals.',
    icon: Zap,
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Monitor real-time performance, uncover efficiency opportunities, and continuously improve.',
    icon: TrendingUp,
  },
];

const circleRadius = 260;

const techStack = [
  {
    name: 'Frontend',
    tools: 'React, Next.js, Tailwind CSS, TypeScript',
    toolList: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
    icon: Palette,
    gradient: 'from-blue-500 to-cyan-500',
    color: '#06b6d4',
    borderColor: 'hover:border-blue-300',
    angle: -90, // Top
    x: 0,
    y: -260,
  },
  {
    name: 'Backend',
    tools: 'Node.js, Express, Python, Java',
    toolList: ['Node.js', 'Express', 'Python', 'Java'],
    icon: Server,
    gradient: 'from-indigo-600 to-purple-600',
    color: '#818cf8',
    borderColor: 'hover:border-indigo-300',
    angle: -18, // Top-Right
    x: 247,
    y: -80,
  },
  {
    name: 'Mobile',
    tools: 'React Native, Flutter, Kotlin, Swift',
    toolList: ['React Native', 'Flutter', 'Kotlin', 'Swift'],
    icon: Smartphone,
    gradient: 'from-emerald-500 to-teal-600',
    color: '#10b981',
    borderColor: 'hover:border-emerald-300',
    angle: 54, // Bottom-Right
    x: 153,
    y: 210,
  },
  {
    name: 'Database',
    tools: 'PostgreSQL, MongoDB, Firebase, Redis',
    toolList: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
    icon: Database,
    gradient: 'from-amber-500 to-orange-500',
    color: '#f59e0b',
    borderColor: 'hover:border-amber-300',
    angle: 126, // Bottom-Left
    x: -153,
    y: 210,
  },
  {
    name: 'Cloud & DevOps',
    tools: 'AWS, GCP, Docker, CI/CD',
    toolList: ['AWS', 'GCP', 'Docker', 'CI/CD'],
    icon: Cloud,
    gradient: 'from-sky-500 to-indigo-500',
    color: '#38bdf8',
    borderColor: 'hover:border-sky-300',
    angle: 198, // Top-Left
    x: -247,
    y: -80,
  },
];

// Precomputed 5 curved circular flow arcs connecting one div to the next
const arcConnections = [
  { fromIdx: 0, toIdx: 1, startAngle: -68, endAngle: -40, color: '#6366f1' },
  { fromIdx: 1, toIdx: 2, startAngle: 4, endAngle: 32, color: '#8b5cf6' },
  { fromIdx: 2, toIdx: 3, startAngle: 76, endAngle: 104, color: '#10b981' },
  { fromIdx: 3, toIdx: 4, startAngle: 148, endAngle: 176, color: '#f59e0b' },
  { fromIdx: 4, toIdx: 0, startAngle: 220, endAngle: 248, color: '#0ea5e9' },
].map((arc) => {
  const rad1 = (arc.startAngle * Math.PI) / 180;
  const rad2 = (arc.endAngle * Math.PI) / 180;
  const x1 = Math.round(circleRadius * Math.cos(rad1));
  const y1 = Math.round(circleRadius * Math.sin(rad1));
  const x2 = Math.round(circleRadius * Math.cos(rad2));
  const y2 = Math.round(circleRadius * Math.sin(rad2));
  return {
    ...arc,
    path: `M ${x1} ${y1} A ${circleRadius} ${circleRadius} 0 0 1 ${x2} ${y2}`,
    arrowX: x2,
    arrowY: y2,
  };
});

export default function Services() {
  return (
    <div className="w-full text-slate-800">

      {/* 1. BUSINESS AUTOMATION SOLUTIONS */}
      <section className="relative overflow-hidden pt-10 sm:pt-14 pb-20 sm:pb-28 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border-b border-gray-100">
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
      <section className="py-20 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <Sparkles size={14} className="text-indigo-600" />
              <span>Implementation Methodology</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              From Complexity to Simplicity in Four Steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.number}
                  className="p-6 sm:p-7 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-lg transition-all text-left"
                >
                  <span className="text-3xl font-black text-indigo-400 block mb-4">
                    {st.number}
                  </span>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Icon size={19} className="text-indigo-600" />
                    <h3 className="text-lg font-bold text-slate-900">{st.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. TECHNOLOGY ARCHITECTURE - CIRCULAR CONNECTION UI */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/70 border-t border-gray-200 text-center">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-14 sm:mb-20 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 mb-3.5 text-xs font-bold tracking-wider text-indigo-700 uppercase border border-indigo-200/80 rounded-full bg-indigo-50 shadow-sm">
              <Cpu size={14} className="text-indigo-600" />
              <span>Technology Architecture</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 mb-4">
              Our Modern Tech Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              An interconnected, high-performance architecture powering continuous business automation and scale.
            </p>
          </div>

          {/* Desktop Circular Moving Orbit Constellation (Visible on lg screens) */}
          <div className="hidden lg:block relative max-w-5xl mx-auto h-[740px] select-none orbit-container my-2">
            
            {/* 1. Stationary Central Platform Core Hub (Centered at Container Center, Z-Index 30) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer">
              {/* Outer Pulsing Halo */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500/25 via-purple-500/25 to-cyan-500/25 blur-lg animate-pulse pointer-events-none" />
              
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-900 text-white flex flex-col items-center justify-center border-4 border-indigo-400/40 shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/80 border border-indigo-400/40 flex items-center justify-center mb-1.5 shadow-inner">
                  <Cpu size={24} className="text-indigo-200" />
                </div>
                <span className="text-xs font-black tracking-tight text-white leading-tight">
                  Our Modern
                </span>
                <span className="text-xs font-black tracking-tight text-indigo-300 leading-tight mt-0.5">
                  Tech Stack
                </span>
              </div>
            </div>

            {/* 2. Orbiting Stage: Zero-size center anchor at (top:50%, left:50%) rotating 360° continuously */}
            <div className="absolute top-1/2 left-1/2 w-0 h-0 z-20 pointer-events-none animate-orbit-cw origin-center">
              
              {/* SVG Connecting Curved Flow Arcs & Directional Arrowheads centered on (0, 0) */}
              <svg
                className="absolute -top-[370px] -left-[370px] w-[740px] h-[740px] pointer-events-none overflow-visible"
                viewBox="-370 -370 740 740"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Arrowheads for each colored flow path */}
                  {arcConnections.map((arc, idx) => (
                    <marker
                      key={idx}
                      id={`flowArrow-${idx}`}
                      viewBox="0 0 10 10"
                      refX="7"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={arc.color} />
                    </marker>
                  ))}
                  
                  <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Concentric Circular Orbit Tracks */}
                <circle cx="0" cy="0" r={circleRadius} stroke="url(#orbitGlow)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.45" />
                <circle cx="0" cy="0" r="140" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" opacity="0.45" />

                {/* Spokes from Center (0, 0) to each Node */}
                {techStack.map((t, idx) => (
                  <line
                    key={idx}
                    x1="0"
                    y1="0"
                    x2={t.x}
                    y2={t.y}
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.35"
                  />
                ))}

                {/* Curved Flow Arrows pointing directly from one div to the next div around the circle */}
                {arcConnections.map((arc, idx) => (
                  <g key={idx}>
                    <path
                      d={arc.path}
                      stroke={arc.color}
                      strokeWidth="2.5"
                      fill="none"
                      strokeDasharray="5 5"
                      markerEnd={`url(#flowArrow-${idx})`}
                    />
                    {/* Pulsing signal packet flowing along the circle from div to div */}
                    <circle r="4" fill={arc.color} className="shadow-md">
                      <animateMotion
                        path={arc.path}
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                ))}
              </svg>

              {/* 3. The 5 Divs Moving Along the Circular Track */}
              {techStack.map((t) => (
                <div
                  key={t.name}
                  className="absolute pointer-events-auto"
                  style={{
                    left: `${t.x}px`,
                    top: `${t.y}px`,
                  }}
                >
                  {/* Counter-orbit keeps each card 100% upright and level while revolving */}
                  <div className="animate-orbit-counter origin-center">
                    <div
                      className={`w-48 sm:w-52 p-4 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center flex flex-col items-center ${t.borderColor} cursor-pointer`}
                    >
                      {/* Circular Node Icon */}
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} text-white flex items-center justify-center shadow-md mb-2 border-2 border-white`}>
                        <t.icon size={22} />
                      </div>
                      
                      <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                        {t.name}
                      </h3>

                      {/* Tool Badges */}
                      <div className="flex flex-wrap gap-1 justify-center">
                        {t.toolList.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200/60"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Interactive Flow Badge Indicator */}
          <div className="hidden lg:flex items-center justify-center gap-2 mt-4 mb-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-semibold text-indigo-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span>Continuous Circular Architecture • Hover over any card to pause flow</span>
            </span>
          </div>

          {/* Mobile & Tablet Connected View (Clean fallback for < lg screens) */}
          <div className="lg:hidden max-w-xl mx-auto space-y-4">
            
            {/* Center Node on Mobile */}
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-950 to-slate-900 text-white shadow-xl border border-indigo-500/40">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                  <Cpu size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black">Our Modern Tech Stack</div>
                  <div className="text-[10px] text-indigo-300">Interconnected Architecture</div>
                </div>
              </div>
            </div>

            {/* Circular Nodes List on Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {techStack.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.name}
                    className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3.5 text-left"
                  >
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} text-white flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        {t.name}
                      </h3>
                      <p className="text-xs text-slate-500 leading-snug">
                        {t.tools}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
