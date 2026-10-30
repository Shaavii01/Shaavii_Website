import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2, ArrowRight, Zap, Bot, Users, Layers,
  BarChart3, Sliders, ShieldCheck, RefreshCw, Cpu
} from 'lucide-react';

const solutionsList = [
  {
    title: 'Operations Automation',
    tagline: 'Streamline repetitive daily activities',
    description: 'Eliminate manual data entry, paper-based routines, and redundant approvals. Create connected workflows where everyday business actions happen automatically and accurately.',
    features: [
      'Automated routine task routing',
      'Approval workflows with zero bottlenecks',
      'Cross-department document handoffs',
      'Real-time status updates and audit logs'
    ],
    icon: Zap,
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200'
  },
  {
    title: 'Intelligent AI Workflows',
    tagline: 'Put smart technology to work in your processes',
    description: 'Harness the power of AI to analyze incoming documents, summarize performance data, trigger predictive alerts, and recommend next actions for teams.',
    features: [
      'AI-driven task and process assistance',
      'Automated customer communication & triage',
      'Smart anomaly and bottleneck detection',
      'Continuous process learning and optimization'
    ],
    icon: Bot,
    color: 'from-purple-500 to-indigo-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200'
  },
  {
    title: 'Workforce & Team Coordination',
    tagline: 'Connect departments and eliminate silos',
    description: 'Ensure sales, operations, finance, and customer service speak the same language. Centralize task assignments, transparent progress tracking, and shift coordination.',
    features: [
      'Centralized team accountability boards',
      'Cross-functional communication channels',
      'Onboarding and training task flows',
      'Automated workload balancing'
    ],
    icon: Users,
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200'
  },
  {
    title: 'Executive Business Intelligence',
    tagline: 'Complete visibility into performance and bottlenecks',
    description: 'Stop guessing what’s happening in your business. Access live operational dashboards that display process velocity, employee productivity, and turnaround times in real time.',
    features: [
      'Real-time executive summaries',
      'Custom KPI monitors and metric alerts',
      'Departmental efficiency scorecards',
      'Exportable reports for leadership teams'
    ],
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200'
  }
];

export default function Solutions() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-4">
            Shaavii Solutions
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight mb-4">
            Transforming Complexity into Connected Growth.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Explore how Shaavii unites automation, artificial intelligence, and team workflows to solve operational challenges for modern organizations.
          </p>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {solutionsList.map((sol, index) => {
            const Icon = sol.icon;
            const isReversed = index % 2 === 1;
            return (
              <div
                key={sol.title}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12 p-8 sm:p-10 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex-1 space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sol.color} text-white flex items-center justify-center shadow-sm`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                    {sol.tagline}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
                    {sol.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {sol.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {sol.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                    >
                      Request a demonstration <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="w-full lg:w-1/3 flex items-center justify-center">
                  <div className={`w-full max-w-sm aspect-square rounded-2xl ${sol.bg} border ${sol.border} flex flex-col items-center justify-center p-8 text-center`}>
                    <Icon size={64} className="text-indigo-600 mb-4 opacity-80" />
                    <span className="text-base font-bold text-gray-900 mb-1">{sol.title}</span>
                    <span className="text-xs text-gray-500">Intelligent Platform Module</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 mb-3">
            Ready to streamline your business?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Get in touch with our team to see how Shaavii can be customized for your exact operations.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-md cursor-pointer"
          >
            Book a Free Demo <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

