import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce SaaS Platform',
    category: 'SaaS Solution',
    description: 'A multi-tenant e-commerce platform with subscription billing, analytics dashboard, and API integrations serving 100+ businesses.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    color: 'from-violet-500 to-purple-600',
    bgLight: 'bg-violet-50',
    borderColor: 'border-violet-200',
  },
  {
    title: 'FinTech Mobile App',
    category: 'Mobile Development',
    description: 'Cross-platform mobile banking application with biometric auth, real-time transactions, and investment tracking.',
    tags: ['React Native', 'Firebase', 'Stripe', 'iOS & Android'],
    color: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  {
    title: 'Healthcare Management System',
    category: 'Web Application',
    description: 'Comprehensive hospital management web app with patient records, appointment scheduling, and telemedicine integration.',
    tags: ['Next.js', 'MongoDB', 'WebRTC', 'Docker'],
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    title: 'Real Estate CRM',
    category: 'Consulting & SaaS',
    description: 'Custom CRM with lead management, call tracking, automated follow-ups, and performance analytics for real estate teams.',
    tags: ['React', 'Express', 'Firebase', 'Tailwind CSS'],
    color: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  {
    title: 'Food Delivery Android App',
    category: 'Android Development',
    description: 'Native Android app with real-time order tracking, push notifications, payment gateway, and restaurant management panel.',
    tags: ['Kotlin', 'Jetpack Compose', 'Google Maps', 'Razorpay'],
    color: 'from-green-500 to-lime-500',
    bgLight: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    title: 'Fitness & Wellness iOS App',
    category: 'iOS Development',
    description: 'Premium iOS fitness app with workout plans, progress tracking, HealthKit integration, and in-app subscriptions.',
    tags: ['Swift', 'SwiftUI', 'HealthKit', 'CloudKit'],
    color: 'from-sky-500 to-indigo-500',
    bgLight: 'bg-sky-50',
    borderColor: 'border-sky-200',
  },
];

export default function Portfolio() {
  return (
    <div className="h-full min-h-0 overflow-y-auto">
      <div className="space-y-0">

        {/* Page Header */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 rounded-2xl mx-2 sm:mx-4 mt-2 sm:mt-4 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">Our Portfolio</h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              A showcase of projects we've delivered across consulting, SaaS, web, and mobile — each built to make an impact.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((p) => (
              <div key={p.title} className={`group rounded-2xl border ${p.borderColor} ${p.bgLight} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col`}>
                {/* Category badge */}
                <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 shadow-md`}>
                  <span className="text-white/90 text-sm font-semibold">{p.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white border border-gray-200 text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-2 sm:mx-4 mb-4 sm:mb-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl px-6 sm:px-10 lg:px-16 py-10 sm:py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
            Want to See Your Idea Here?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-lg mx-auto">
            Let's turn your vision into the next success story in our portfolio.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg text-sm sm:text-base">
            Start Your Project <ArrowRight size={18} />
          </a>
        </section>

      </div>
    </div>
  );
}

