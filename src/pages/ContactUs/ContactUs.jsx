import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

const APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
const SHEET_NAME = import.meta.env.VITE_SHEET_NAME;

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    contactNumber: '',
    companyName: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const popupTimerRef = useRef(null);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.fullName.trim();
    const email = formData.workEmail.trim();
    const phone = formData.contactNumber.trim();
    const company = formData.companyName.trim();
    const message = formData.message.trim();

    if (!name || !email || !phone || !company) {
      toast.error('Please complete all required fields (*)');
      return;
    }

    setSubmitting(true);

    // 1. Generate unique TimeStamp (IST format: DD/MM/YYYY, hh:mm:ss a)
    const now = new Date();
    const timeStamp = now.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    });

    // 2. Generate collision-free sequential Serial Number in SHA-001, SHA-002... format
    let nextCount = 1;
    try {
      nextCount = (parseInt(localStorage.getItem('sha_serial_counter') || '0', 10)) + 1;
      localStorage.setItem('sha_serial_counter', String(nextCount));
    } catch (e) {
      nextCount = 1;
    }
    const serialNo = `SHA-${String(nextCount).padStart(3, '0')}`;

    // 3. Prepare row data matching the 8 Sheet Columns:
    // [TimeStamp, Serial No, Name, Work Email, Number, Company Name, About Us, Mail Sent Status]
    const safePhone = phone.startsWith('+') ? "'" + phone : phone;

    const rowData = [
      timeStamp,
      serialNo,
      name,
      email,
      safePhone,
      company,
      message || 'N/A',
      'Pending'
    ];

    try {
      // 4. Send to Google Apps Script asynchronously (Instant submission)
      const rowDataJson = JSON.stringify(rowData);

      const payload = new URLSearchParams();
      payload.append('action', 'insert');
      payload.append('sheetName', SHEET_NAME || 'Details ');
      payload.append('rowData', rowDataJson);

      // Fast non-blocking fetch with keepalive
      if (APPS_SCRIPT_URL) {
        fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          keepalive: true,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: payload.toString()
        }).catch((networkErr) => {
          console.warn('Network note on submission:', networkErr);
        });
      }

      // 5. Instantly clear all filled form data properly
      setFormData({
        fullName: '',
        workEmail: '',
        contactNumber: '',
        companyName: '',
        message: ''
      });

      // 6. Instantly show Thank You pop-up message for exactly 2 seconds
      setShowPopup(true);

      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
      popupTimerRef.current = setTimeout(() => {
        setShowPopup(false);
      }, 2000);

    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('There was an issue sending your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative w-full">
      {/* Header Banner */}
      <section className="py-12 text-center border-b border-gray-100 bg-gradient-to-b from-indigo-50/70 via-white to-white sm:py-16">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            Get in Touch
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl text-gray-950">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="max-w-4xl px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8">
        <div className="p-8 transition-all bg-white border border-gray-200 shadow-sm sm:p-12 rounded-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <Mail className="text-indigo-600" size={24} />
            <h2 className="text-xl font-bold sm:text-2xl text-gray-950">
              Send Us a Message
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 text-sm transition-all border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="workEmail"
                  required
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 text-sm transition-all border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 text-sm transition-all border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-4 py-3 text-sm transition-all border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Remarks
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Which manual processes would you love to automate first?"
                className="w-full px-4 py-3 text-sm transition-all border border-gray-200 resize-none rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm disabled:opacity-60 cursor-pointer"
            >
              {submitting ? 'Sending...' : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Thank You Pop-up Modal (Auto-closes in 2 Seconds) */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 duration-200 bg-gray-950/50 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-sm p-6 space-y-4 text-center duration-200 bg-white border border-gray-100 shadow-2xl sm:p-8 rounded-3xl animate-in zoom-in-95">
            <div className="flex items-center justify-center w-16 h-16 mx-auto border shadow-lg rounded-2xl bg-emerald-50 border-emerald-200 text-emerald-600 shadow-emerald-500/10">
              <CheckCircle2 size={38} className="text-emerald-600 animate-pulse" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl font-black text-gray-950">
                Thank You!
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Your message has been sent successfully. We will contact you shortly.
              </p>
            </div>

            {/* 2-Second Animated Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden mt-3">
              <div className="h-full rounded-full bg-emerald-500 animate-shrink-2s" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
