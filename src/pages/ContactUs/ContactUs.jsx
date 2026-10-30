import React, { useState } from 'react';
import {
  Calendar, Mail, Phone, MapPin, Send, CheckCircle2,
  Clock, Sparkles, ArrowRight
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactUs() {
  const [demoForm, setDemoForm] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    teamSize: '1-10',
    primaryInterest: 'Workflow Automation',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setDemoForm({ ...demoForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!demoForm.fullName || !demoForm.workEmail || !demoForm.companyName) {
      toast.error('Please complete all required fields (*)');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success('Your Free Demo has been booked! Our team will contact you within 24 hours.');
      setDemoForm({
        fullName: '',
        workEmail: '',
        companyName: '',
        teamSize: '1-10',
        primaryInterest: 'Workflow Automation',
        message: ''
      });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-white py-16 sm:py-20 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-4">
            Get in Touch
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight mb-4">
            Book Your Free Demo
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Experience how Shaavii can automate your everyday business operations, eliminate busywork, and accelerate your growth.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2.5 mb-6">
              <Calendar className="text-indigo-600" size={22} />
              <h2 className="text-xl font-bold text-gray-950">
                Schedule a 1-on-1 Personalized Walkthrough
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={demoForm.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={demoForm.workEmail}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={demoForm.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Acme Corp"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Team Size
                  </label>
                  <select
                    name="teamSize"
                    value={demoForm.teamSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  >
                    <option value="1-10">1 – 10 Employees</option>
                    <option value="11-50">11 – 50 Employees</option>
                    <option value="51-200">51 – 200 Employees</option>
                    <option value="200+">200+ Employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Primary Area of Interest
                </label>
                <select
                  name="primaryInterest"
                  value={demoForm.primaryInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                >
                  <option value="Workflow Automation">Workflow & Routine Automation</option>
                  <option value="AI-Powered Assistance">AI-Powered Business Assistance</option>
                  <option value="Task Management">Team & Task Accountability</option>
                  <option value="Employee Management">Employee & Workforce Coordination</option>
                  <option value="Business Intelligence">Executive Dashboard & Reporting</option>
                  <option value="Full Suite">Complete Shaavii Platform</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Tell us about your biggest operational challenge (Optional)
                </label>
                <textarea
                  name="message"
                  value={demoForm.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Which manual processes would you love to automate first?"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm disabled:opacity-60"
              >
                {submitting ? 'Confirming...' : (
                  <>
                    Confirm Free Demo <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Side Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white space-y-4 shadow-md">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} className="text-yellow-300" /> What to Expect
              </span>
              <h3 className="text-xl font-black">In this 30-Minute Demo:</h3>
              <ul className="space-y-3 text-sm text-indigo-100">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>A live overview of Shaavii’s automation engine configured for your industry.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Identification of key manual bottlenecks in your current business processes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Practical recommendations on implementing AI-assisted workflows.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>No obligation, no high-pressure sales pitch — just intelligent solutions.</span>
                </li>
              </ul>
            </div>

            {/* Direct Contact info */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-gray-950">Direct Contact</h3>
              
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase">Email</p>
                  <a href="mailto:info@shaavii.com" className="font-medium text-gray-900 hover:text-indigo-600 transition-colors">
                    info@shaavii.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase">Phone</p>
                  <a href="tel:+919993621821" className="font-medium text-gray-900 hover:text-indigo-600 transition-colors">
                    +91 9993621821
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase">Hours</p>
                  <span className="font-medium text-gray-900">Monday – Saturday (10 AM – 6 PM IST)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
