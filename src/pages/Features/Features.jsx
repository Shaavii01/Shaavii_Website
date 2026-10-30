import React from 'react';
import { Link } from 'react-router-dom';
import {
  GitFork, Bot, Layers, Users, BarChart3, Sliders,
  UserCheck, Bell, CheckCircle2, ArrowRight
} from 'lucide-react';

const featureList = [
  {
    icon: GitFork,
    title: 'Workflow Automation',
    subtitle: 'Save time and eliminate human error',
    description: 'Transform repetitive processes into automated workflows that save time and improve consistency. Trigger actions across platforms whenever events occur.',
    details: [
      'Visual drag-and-drop workflow designer',
      'Multi-step approval triggers',
      'Conditional branching and error handling',
      'Third-party software and webhook integrations'
    ],
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200'
  },
  {
    icon: Bot,
    title: 'AI-Powered Assistance',
    subtitle: 'Intelligent decision support',
    description: 'Use intelligent AI capabilities to support daily tasks, business processes, and decision-making. Generate summaries, extract data from documents, and draft responses.',
    details: [
      'Natural language task dispatching',
      'Automated document data extraction',
      'Smart suggestion engine for managers',
      'Predictive trend and churn alerts'
    ],
    color: 'from-purple-500 to-indigo-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200'
  },
  {
    icon: Layers,
    title: 'Task Management',
    subtitle: 'Clarity and accountability for every team',
    description: 'Organize work, assign responsibilities, monitor progress, and keep everyone accountable. Never let an important deliverable fall through the cracks.',
    details: [
      'Kanban, list, and calendar views',
      'Subtask checklists and dependencies',
      'Priority tags and deadline tracking',
      'Real-time activity logs and comments'
    ],
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200'
  },
  {
    icon: Users,
    title: 'Employee Management',
    subtitle: 'Simplified workforce coordination',
    description: 'Simplify employee onboarding, attendance, training, and workforce coordination. Create a smooth experience from day one for every team member.',
    details: [
      'Automated onboarding checklists',
      'Attendance and leave request tracking',
      'Skill mapping and role assignments',
      'Centralized employee directory and docs'
    ],
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200'
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    subtitle: 'Actionable real-time insights',
    description: 'Turn business information into actionable insights with centralized dashboards and reporting. Uncover bottlenecks before they impact your bottom line.',
    details: [
      'Live operational velocity charts',
      'Department productivity metrics',
      'Custom filterable reporting suites',
      'Exportable executive summaries'
    ],
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200'
  },
  {
    icon: Sliders,
    title: 'Process Management',
    subtitle: 'Standardize operations for scale',
    description: 'Standardize operations, reduce bottlenecks, and create smoother business processes. Document your standard operating procedures right where work happens.',
    details: [
      'SOP templates and compliance checklists',
      'Bottleneck and turnaround time analytics',
      'Continuous process revision controls',
      'Audit trails for regulatory peace of mind'
    ],
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50',
    border: 'border-rose-200'
  },
  {
    icon: UserCheck,
    title: 'Customer Management',
    subtitle: 'Delightful customer journeys',
    description: 'Organize customer information, track interactions, and improve customer experiences. Keep every interaction contextual, fast, and personalized.',
    details: [
      'Consolidated customer interaction history',
      'Inquiry triage and follow-up reminders',
      'Service ticket assignment and resolution tracking',
      'Satisfaction feedback automation'
    ],
    color: 'from-indigo-500 to-violet-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    subtitle: 'Never miss what matters most',
    description: 'Keep teams informed with automated reminders, alerts, and important updates. Eliminate noisy spam while delivering critical alerts to the right person instantly.',
    details: [
      'Targeted role-based alerts',
      'Multi-channel delivery (App, Email, SMS)',
      'Escalation rules for unacknowledged tasks',
      'Customizable digest and quiet hours'
    ],
    color: 'from-teal-500 to-emerald-600',
    bg: 'bg-teal-50',
    border: 'border-teal-200'
  }
];

export default function Features() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white py-16 sm:py-20 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-4">
            Platform Capabilities
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight mb-4">
            Everything Your Business Needs. All in One Place.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Shaavii unifies everyday operations, team accountability, and intelligent automation into one seamless workspace.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureList.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} text-white flex items-center justify-center shadow-sm flex-shrink-0`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-950">{feat.title}</h3>
                      <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{feat.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {feat.description}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-gray-100">
                    {feat.details.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
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
            Want to see these features in action?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Schedule a personalized walkthrough and discover how Shaavii can be customized for your workflows.
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

