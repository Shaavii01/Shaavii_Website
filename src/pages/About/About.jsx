import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, Zap, Cpu, Sliders, Eye, TrendingUp,
  Target, ShieldCheck, Heart, ArrowRight
} from 'lucide-react';
import companyLogo from '../../Assets/Logo.png';

const pillars = [
  {
    title: 'Simplicity',
    description: 'Powerful capabilities through an intuitive experience that teams actually enjoy using.',
    icon: Sparkles
  },
  {
    title: 'Efficiency',
    description: 'Reduce repetitive tasks and eliminate unnecessary manual work across every department.',
    icon: Zap
  },
  {
    title: 'Intelligence',
    description: 'Bring AI and intelligent automation into everyday business operations and decision-making.',
    icon: Cpu
  },
  {
    title: 'Flexibility',
    description: 'Build and tailor workflows around your exact business requirements, not rigid templates.',
    icon: Sliders
  },
  {
    title: 'Visibility',
    description: 'Understand exactly what’s happening across your operations in real time with live metrics.',
    icon: Eye
  },
  {
    title: 'Scalability',
    description: 'Create dependable digital systems that expand seamlessly as your customer base multiplies.',
    icon: TrendingUp
  },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white py-16 sm:py-20 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-4">
            About Shaavii
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight mb-4">
            Work Smarter. Automate Better. Grow Faster.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Shaavii empowers modern businesses to automate everyday operations, streamline workflows, connect teams, and make smarter decisions with intelligent technology.
          </p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Growing a Business Shouldn’t Mean Growing Complexity.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We started Shaavii because we observed a common struggle in growing businesses: teams buried in repetitive manual tasks, departments operating in silos, missed follow-ups, and limited operational visibility.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
                <img src={companyLogo} alt="Shaavii" className="w-full h-full object-contain" />
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

      {/* Why Shaavii Pillars */}
      <section className="py-16 sm:py-20 bg-gray-50/70 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2 block">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Technology That Works Around Your Business.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 mb-3">
            Start Your Journey with Shaavii
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Discover how easy it is to bring automated simplicity to your entire company.
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
