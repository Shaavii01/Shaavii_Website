import React from 'react';
import { Link } from 'react-router-dom';
import NeuralBrainBackground from '../../components/NeuralBrainBackground';
import {
  ArrowRight, CheckCircle2, AlertTriangle, Zap, Bot,
  Layers, Users, BarChart3, GitFork, UserCheck, Bell,
  Sparkles, Cpu, ShieldCheck, TrendingUp, Sliders, Eye,
  Building2, Factory, Briefcase, Rocket, Store
} from 'lucide-react';

const problemCards = [
  {
    title: 'Repetitive Manual Tasks',
    description: 'Hours wasted on routine data entry, copying spreadsheets, and manual status updates.',
  },
  {
    title: 'Disconnected Teams & Silos',
    description: 'Communication gaps between departments causing friction and misaligned priorities.',
  },
  {
    title: 'Delayed Approvals',
    description: 'Bottlenecks in sign-offs and missed follow-ups slowing down business momentum.',
  },
  {
    title: 'Coordination Challenges',
    description: 'Friction in employee delegation, shift tracking, and daily accountability.',
  },
  {
    title: 'Limited Operational Visibility',
    description: 'Blind spots in performance metrics with no unified real-time dashboard.',
  },
  {
    title: 'Wasted Operating Hours',
    description: 'Valuable talent trapped in repetitive busywork instead of driving strategic growth.',
  },
];

const solutionCards = [
  {
    title: 'Automate Repetitive Activities',
    description: 'Replace routine chores with automated triggers that run 24/7 without error.',
  },
  {
    title: 'Simplify Business Workflows',
    description: 'Transform tangled multi-step procedures into clear, frictionless processes.',
  },
  {
    title: 'Connect Departments & Teams',
    description: 'Unify sales, operations, finance, and support on a single shared source of truth.',
  },
  {
    title: 'Real-Time Operational Visibility',
    description: 'Gain instant transparency into every workflow, turnaround time, and team metric.',
  },
  {
    title: 'Reduce Manual Coordination',
    description: 'Automated handoffs, reminders, and alerts ensure tasks never fall through the cracks.',
  },
  {
    title: 'Informed Business Decisions',
    description: 'Turn operational data into clear, actionable intelligence for executive leadership.',
  },
];

const coreFeatures = [
  {
    icon: GitFork,
    title: 'Workflow Automation',
    description: 'Transform repetitive processes into automated workflows that save time and improve consistency.',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Bot,
    title: 'AI-Powered Assistance',
    description: 'Use intelligent AI capabilities to support daily tasks, business processes, and decision-making.',
    color: 'from-purple-500 to-indigo-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    icon: Layers,
    title: 'Task Management',
    description: 'Organize work, assign responsibilities, monitor progress, and keep everyone accountable.',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: Users,
    title: 'Employee Management',
    description: 'Simplify employee onboarding, attendance, training, and workforce coordination.',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Turn business information into actionable insights with centralized dashboards and reporting.',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: Sliders,
    title: 'Process Management',
    description: 'Standardize operations, reduce bottlenecks, and create smoother business processes.',
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: UserCheck,
    title: 'Customer Management',
    description: 'Organize customer information, track interactions, and improve customer experiences.',
    color: 'from-indigo-500 to-violet-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Keep teams informed with automated reminders, alerts, and important updates.',
    color: 'from-teal-500 to-emerald-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
];

const aiCapabilities = [
  { title: 'AI-Powered Task Assistance', desc: 'Context-aware guidance for daily team actions.' },
  { title: 'Automated Data Processing', desc: 'Instant extraction, parsing, and data routing.' },
  { title: 'Intelligent Workflow Management', desc: 'Adaptive routing based on priorities and workload.' },
  { title: 'Smart Business Insights', desc: 'Predictive analytics and automated executive digests.' },
  { title: 'Automated Customer Communication', desc: 'Fast, consistent, and personalized touchpoints.' },
  { title: 'Process Optimization', desc: 'Continuous bottleneck detection and suggested improvements.' },
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

const targetAudiences = [
  {
    icon: Rocket,
    title: 'Startups',
    tag: 'Agile & Fast',
    description: 'Build efficient operations from day one without unnecessary complexity or bloated tech stacks.',
  },
  {
    icon: Store,
    title: 'Small & Medium Businesses',
    tag: 'Lean Operations',
    description: 'Reduce manual workloads and streamline everyday business management with zero overhead.',
  },
  {
    icon: Building2,
    title: 'Growing Enterprises',
    tag: 'Scale & Governance',
    description: 'Connect departments, standardize processes, and maintain strict operational control across branches.',
  },
  {
    icon: Briefcase,
    title: 'Service Businesses',
    tag: 'Client Delivery',
    description: 'Automate customer interactions, internal service handoffs, and project delivery pipelines.',
  },
  {
    icon: Factory,
    title: 'Manufacturing Businesses',
    tag: 'Shopfloor to Dispatch',
    description: 'Improve coordination, process visibility, and operational efficiency across teams.',
  },
];

const whyUsPillars = [
  {
    title: 'Simplicity',
    description: 'Powerful capabilities through an intuitive experience that teams actually adopt and love.',
    icon: Sparkles,
  },
  {
    title: 'Efficiency',
    description: 'Drastically reduce repetitive tasks and eliminate unnecessary manual coordination.',
    icon: Zap,
  },
  {
    title: 'Intelligence',
    description: 'Bring AI and intelligent automation into everyday workflows and executive decisions.',
    icon: Cpu,
  },
  {
    title: 'Flexibility',
    description: 'Build and customize workflows around your exact business requirements, not rigid templates.',
    icon: Sliders,
  },
  {
    title: 'Visibility',
    description: 'Understand exactly what’s happening across your operations in real time with live metrics.',
    icon: Eye,
  },
  {
    title: 'Scalability',
    description: 'Create dependable digital systems that expand smoothly as your customer base multiplies.',
    icon: TrendingUp,
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
            <span>Automate Your Business. Accelerate Your Growth.</span>
          </div>

          {/* Value Proposition */}
          <div className="max-w-2xl mx-auto space-y-3 mb-10">
            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
              Your business deserves more than manual processes, disconnected tools, and endless follow-ups.
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              <strong className="text-slate-900 font-semibold">Shaavii</strong> helps businesses automate everyday operations, streamline workflows, connect teams, and make smarter decisions with intelligent technology.
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
              href="#solutions"
              onClick={(e) => scrollTo(e, 'solutions')}
              className="w-full sm:w-auto h-12 px-8 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-200 hover:border-slate-300 transition-all text-sm sm:text-base shadow-sm flex items-center justify-center text-center hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Solutions
            </a>
          </div>

          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold tracking-wide">
            Less Manual Work. More Intelligent Growth.
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-20 sm:py-24 bg-slate-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/60 text-xs font-bold uppercase tracking-wider mb-3">
              <AlertTriangle size={14} /> The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-3">
              Growing a Business Shouldn’t Mean Growing Complexity.
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              As businesses scale, operational friction slows everything down.
            </p>
          </div>

          {/* Cards Grid: Left-aligned content for readability */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-12">
            {problemCards.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle size={18} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Message */}
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-white border border-indigo-100 shadow-sm text-center space-y-1.5">
            <p className="text-sm sm:text-base text-slate-700 font-medium">
              Your team deserves to focus on meaningful work, not repetitive operations.
            </p>
            <p className="text-base sm:text-lg font-bold text-indigo-700">
              It’s time to make business management simpler.
            </p>
          </div>

        </div>
      </section>

      {/* 3. OUR SOLUTION */}
      <section className="py-20 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={14} /> Our Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
              Meet Shaavii. Your Business, Working Smarter.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-2">
              Shaavii transforms how businesses operate by bringing automation, intelligent workflows, and centralized management together.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              From everyday tasks to complex business processes, create a connected environment where work moves faster and teams operate more efficiently.
            </p>
          </div>

          {/* Solution Grid: Clean left-aligned cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-12">
            {solutionCards.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-emerald-50/40 via-white to-indigo-50/30 border border-emerald-100/80 shadow-sm hover:shadow-md transition-all text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 size={20} />
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
            ))}
          </div>

          {/* Solution Banner */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-50/80 border border-indigo-200/70 text-indigo-900 font-bold text-sm sm:text-base shadow-sm">
              One Platform. Smarter Operations. Endless Possibilities.
            </div>
          </div>

        </div>
      </section>

      {/* 4. CORE FEATURES */}
      <section className="py-20 sm:py-24 bg-slate-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Everything Your Business Needs. All in One Place.
            </h2>
          </div>

          {/* 8 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between text-left"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center text-white mb-5 shadow-sm`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="#features"
              onClick={(e) => scrollTo(e, 'features')}
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
            >
              Explore all features in detail <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 5. AI AUTOMATION */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
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

          {/* AI Capability Grid: Left-aligned for high contrast and readability */}
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

      {/* 6. HOW IT WORKS */}
      <section className="py-20 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
              Step-by-Step
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              From Complexity to Simplicity in Four Steps.
            </h2>
          </div>

          {/* 4 Steps: Left-aligned content with prominent numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.number}
                  className="relative p-6 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:shadow-lg transition-all text-left"
                >
                  <span className="text-3xl font-black text-indigo-200 block mb-3 font-mono">
                    {st.number}
                  </span>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={18} className="text-indigo-600" />
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

      {/* 7. WHO WE SERVE */}
      <section className="py-20 sm:py-24 bg-slate-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
              Industries & Segments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Built for Businesses That Want to Move Forward.
            </h2>
          </div>

          {/* Cards: Left-aligned content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {targetAudiences.map((aud) => {
              const Icon = aud.icon;
              return (
                <div
                  key={aud.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all text-left space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {aud.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {aud.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {aud.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="#industries"
              onClick={(e) => scrollTo(e, 'industries')}
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
            >
              Learn how Shaavii serves your industry <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* 8. WHY SHAAVII? */}
      <section className="py-20 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
              Why Shaavii?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Technology That Works Around Your Business.
            </h2>
          </div>

          {/* 6 Pillars: Left-aligned content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyUsPillars.map((item) => {
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

      {/* 9. FINAL CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest">
            SHAAVII
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
              onClick={(e) => scrollTo(e, 'contact')}
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
