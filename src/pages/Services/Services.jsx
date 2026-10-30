import React from 'react';
import {
  Globe, Smartphone, Monitor, Code2, Lightbulb, Rocket,
  ArrowRight, CheckCircle2, Server, Database, Cloud, Palette
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Business Consulting',
    description: 'Strategic consulting to accelerate your business growth with data-driven insights and proven frameworks.',
    features: ['Digital Transformation Strategy', 'Market Research & Analysis', 'Process Optimization', 'Technology Roadmapping'],
    color: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600',
  },
  {
    icon: Rocket,
    title: 'SaaS Solutions',
    description: 'Scalable, cloud-native SaaS platforms tailored to your business needs with seamless integration.',
    features: ['Multi-Tenant Architecture', 'Subscription & Billing', 'Analytics Dashboard', 'API-First Design'],
    color: 'from-violet-500 to-purple-600',
    bgLight: 'bg-violet-50',
    borderColor: 'border-violet-200',
    textColor: 'text-violet-600',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance, responsive websites and web applications built with modern frameworks.',
    features: ['React / Next.js', 'E-Commerce Platforms', 'Progressive Web Apps', 'CMS & Admin Panels'],
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications that deliver native-quality experiences on every device.',
    features: ['React Native / Flutter', 'Offline-First Design', 'Push Notifications', 'App Store Deployment'],
    color: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600',
  },
  {
    icon: Monitor,
    title: 'Android Development',
    description: 'Native Android apps crafted with Kotlin and Jetpack Compose for smooth performance.',
    features: ['Material Design 3', 'Kotlin & Jetpack Compose', 'Google Play Optimization', 'Background Services & APIs'],
    color: 'from-green-500 to-lime-500',
    bgLight: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-600',
  },
  {
    icon: Code2,
    title: 'iOS Development',
    description: 'Premium iOS applications using Swift and SwiftUI, optimized for the entire Apple ecosystem.',
    features: ['SwiftUI & UIKit', 'App Store Guidelines', 'Apple Pay & In-App Purchases', 'Widgets & Extensions'],
    color: 'from-sky-500 to-indigo-500',
    bgLight: 'bg-sky-50',
    borderColor: 'border-sky-200',
    textColor: 'text-sky-600',
  },
];

const techStack = [
  { name: 'Frontend', tools: 'React, Next.js, Tailwind CSS, TypeScript', icon: Palette },
  { name: 'Backend', tools: 'Node.js, Express, Python, Java', icon: Server },
  { name: 'Mobile', tools: 'React Native, Flutter, Kotlin, Swift', icon: Smartphone },
  { name: 'Database', tools: 'PostgreSQL, MongoDB, Firebase, Redis', icon: Database },
  { name: 'Cloud & DevOps', tools: 'AWS, GCP, Docker, CI/CD', icon: Cloud },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We understand your business, goals, and target audience to define the project scope.' },
  { step: '02', title: 'Strategy & Design', desc: 'We create wireframes, prototypes, and a technical roadmap aligned with your vision.' },
  { step: '03', title: 'Development', desc: 'Agile sprints with continuous integration, testing, and transparent progress updates.' },
  { step: '04', title: 'Launch & Support', desc: 'We deploy, monitor, and provide ongoing support to ensure long-term success.' },
];

export default function Services() {
  return (
    <div className="h-full min-h-0 overflow-y-auto">
      <div className="space-y-0">

        {/* Page Header */}
        <section className="relative px-6 py-12 mx-2 mt-2 overflow-hidden text-center bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 rounded-2xl sm:mx-4 sm:mt-4 sm:px-10 lg:px-16 sm:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bg-white rounded-full top-10 left-10 w-72 h-72 blur-3xl" />
            <div className="absolute bg-purple-300 rounded-full bottom-10 right-10 w-96 h-96 blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <h1 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Our Services</h1>
            <p className="text-base leading-relaxed sm:text-lg text-white/80">
              Comprehensive digital solutions — from consulting and SaaS to custom web &amp; mobile development for Android and iOS.
            </p>
          </div>
        </section>

        {/* Services Detail Grid */}
        <section className="px-4 py-10 sm:px-6 lg:px-8 sm:py-14">
          <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className={`rounded-2xl border ${s.borderColor} ${s.bgLight} p-6 sm:p-8 hover:shadow-lg transition-all`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 shadow-md`}>
                  <s.icon size={24} className="text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{s.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={14} className={s.textColor} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Our Process */}
        <section className="px-6 py-10 mx-2 sm:mx-4 bg-gray-50 rounded-2xl sm:px-10 lg:px-16 sm:py-14">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-indigo-600 uppercase border border-indigo-100 rounded-full bg-indigo-50">
              How We Work
            </span>
            <h2 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">Our Process</h2>
          </div>
          <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="p-6 text-center transition-shadow bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md">
                <span className="block mb-2 text-3xl font-black text-indigo-200">{p.step}</span>
                <h3 className="mb-2 text-base font-bold text-gray-900">{p.title}</h3>
                <p className="text-xs leading-relaxed text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="px-4 py-10 sm:px-6 lg:px-8 sm:py-14">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-indigo-600 uppercase border border-indigo-100 rounded-full bg-indigo-50">
              Technology
            </span>
            <h2 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">Our Tech Stack</h2>
          </div>
          <div className="grid max-w-5xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-5">
            {techStack.map((t) => (
              <div key={t.name} className="p-5 text-center transition-shadow bg-white border border-gray-200 rounded-2xl hover:shadow-md">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 border border-indigo-100 rounded-lg bg-indigo-50">
                  <t.icon size={20} className="text-indigo-600" />
                </div>
                <h3 className="mb-1 text-sm font-bold text-gray-900">{t.name}</h3>
                <p className="text-xs text-gray-500">{t.tools}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-10 mx-2 mb-4 text-center sm:mx-4 sm:mb-6 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl sm:px-10 lg:px-16 sm:py-12">
          <h2 className="mb-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
            Need a Custom Solution?
          </h2>
          <p className="max-w-lg mx-auto mb-6 text-sm sm:text-base text-white/80">
            Tell us about your project and let's build something amazing together.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-lg text-sm sm:text-base">
            Start a Project <ArrowRight size={18} />
          </a>
        </section>

      </div>
    </div>
  );
}

