"use client";

import { useState } from "react";

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

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
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
  );
}
