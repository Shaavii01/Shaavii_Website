import React from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket, Store, Building2, Briefcase, Factory,
  CheckCircle2, ArrowRight
} from 'lucide-react';

const industryList = [
  {
    icon: Rocket,
    title: 'Startups',
    tagline: 'Scale rapidly without operational chaos',
    description: 'Build efficient operations from day one without unnecessary complexity. Establish clean workflows early so you can focus your time on product development and customer acquisition.',
    benefits: [
      'Zero-bloat onboarding for new team members',
      'Automated customer support routing and triage',
      'Centralized tracking for investor updates and KPIs',
      'Agile process adaptivity that grows with your business'
    ],
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200'
  },
  {
    icon: Store,
    title: 'Small & Medium Businesses',
    tagline: 'Reduce overhead and manual workloads',
    description: 'Reduce manual workloads and streamline everyday business management. Free up business owners and senior leaders from time-draining administrative chores.',
    benefits: [
      'Eliminate endless email chains and missing files',
      'Standardized daily employee checklists',
      'Automated client quotes and follow-up notices',
      'Transparent cash flow and operations visibility'
    ],
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200'
  },
  {
    icon: Building2,
    title: 'Growing Enterprises',
    tagline: 'Connect departments and standardize operations',
    description: 'Connect departments, standardize processes, and improve operational control. Ensure consistency across regional branches, remote teams, and multi-tier hierarchies.',
    benefits: [
      'Multi-department approval workflows and governance',
      'Enterprise-grade security, roles, and audit trails',
      'Cross-functional resource allocation and bandwidth views',
      'Seamless connectivity with legacy enterprise backends'
    ],
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200'
  },
  {
    icon: Briefcase,
    title: 'Service Businesses',
    tagline: 'Faster turnaround, happier clients',
    description: 'Automate customer interactions, internal workflows, and service delivery. Ensure client requests are tracked from initial inquiry to final sign-off.',
    benefits: [
      'Automated client request intake and assignment',
      'Milestone tracking with automated client updates',
      'Staff utilization and billable task accounting',
      'Integrated satisfaction feedback loops'
    ],
    color: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200'
  },
  {
    icon: Factory,
    title: 'Manufacturing Businesses',
    tagline: 'Visibility from procurement to dispatch',
    description: 'Improve coordination, process visibility, and operational efficiency across the shop floor, inventory, quality control, and dispatch teams.',
    benefits: [
      'Standard Operating Procedure (SOP) digital checklists',
      'Automated equipment maintenance reminder workflows',
      'Vendor delivery handoffs and tracking',
      'Defect reporting and resolution tracking'
    ],
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50',
    border: 'border-rose-200'
  }
];

export default function Industries() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white py-16 sm:py-20 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-4">
            Who We Serve
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight mb-4">
            Built for Businesses That Want to Move Forward.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Whether you are a five-person startup or a multi-branch enterprise, Shaavii adapts to your industry’s operational structure.
          </p>
        </div>
      </section>

      {/* Industries List */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {industryList.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="p-8 sm:p-10 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between"
              >
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} text-white flex items-center justify-center shadow-sm flex-shrink-0`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-950">{ind.title}</h3>
                      <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{ind.tagline}</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="w-full lg:w-1/2 p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                    Key Advantages
                  </span>
                  {ind.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 mb-3">
            Don't see your specific industry listed?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Shaavii’s modular workflow engine can be configured to match almost any operational business process.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-md cursor-pointer"
          >
            Speak With an Automation Specialist <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

