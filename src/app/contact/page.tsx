"use client";

import { useState } from "react";
import type { Metadata } from "next";

const SERVICES = [
  "Window Tinting",
  "Vinyl Wrap — Full",
  "Vinyl Wrap — Partial",
  "Car Detailing — Interior",
  "Car Detailing — Exterior",
  "Car Detailing — Full",
  "Paint Protection Film (PPF)",
  "Commercial Print / Signage",
  "Fleet Wrap / Branding",
  "Tires — Mount & Balance",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-[3px] text-[#22d65f] mb-3">
            Book Your Service
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Get In <span className="text-[#22d65f]">Touch</span>
          </h1>
          <p className="mt-4 text-[#888] max-w-lg mx-auto">
            Tell us what you need and we&apos;ll get back to you fast. Or just call — we pick up.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card-gradient rounded-xl p-12 text-center">
                <div className="text-4xl mb-4">&#10003;</div>
                <h3 className="text-xl font-bold">Request Received</h3>
                <p className="mt-3 text-[#888]">
                  We&apos;ll get back to you within a few hours. If it&apos;s urgent, call us at 780.818.9904.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="card-gradient rounded-xl p-8 sm:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors"
                      placeholder="780-000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                    Service Needed *
                  </label>
                  <select
                    required
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose a service...
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                      Vehicle (Year / Make / Model)
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors"
                      placeholder="e.g. 2024 Ford F-150"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                    Tell Us More
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors resize-none"
                    placeholder="Any details about what you're looking for..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-center text-base">
                  Send Request
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-gradient rounded-xl p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-4">Call Us</h3>
              <a href="tel:7808189904" className="text-2xl font-black text-white hover:text-[#22d65f] transition-colors">
                780.818.9904
              </a>
              <p className="mt-2 text-sm text-[#888]">We pick up. If we miss you, we&apos;ll call right back.</p>
            </div>

            <div className="card-gradient rounded-xl p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-4">Location</h3>
              <p className="text-white font-medium">Stony Plain, Alberta</p>
              <p className="mt-2 text-sm text-[#888]">
                Serving Stony Plain, Spruce Grove, Parkland County, Acheson, and Edmonton West.
              </p>
            </div>

            <div className="card-gradient rounded-xl p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#22d65f] mb-4">Follow Us</h3>
              <div className="space-y-3">
                <a
                  href="https://www.facebook.com/HFDC780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#888] hover:text-white transition-colors"
                >
                  <span>Facebook</span>
                  <span className="text-[#22d65f]">&rarr;</span>
                </a>
                <a
                  href="https://www.instagram.com/accurate_autoworks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#888] hover:text-white transition-colors"
                >
                  <span>Instagram</span>
                  <span className="text-[#22d65f]">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
