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

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          service,
          vehicle,
          preferred_date: preferredDate,
          message,
          page: typeof window !== "undefined" ? window.location.pathname : "/contact",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Submission failed");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="lg:col-span-3">
      {status === "success" ? (
        <div className="card-gradient rounded-xl p-12 text-center">
          <div className="text-4xl mb-4">&#10003;</div>
          <h3 className="text-xl font-bold">Request Received</h3>
          <p className="mt-3 text-[#888]">
            We&apos;ll get back to you within a few hours. If it&apos;s urgent, call us at 780.818.9904.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="card-gradient rounded-xl p-8 sm:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                Phone *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors"
                placeholder="780-000-0000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
              Service Needed *
            </label>
            <select
              id="service"
              name="service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors"
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
              <label htmlFor="vehicle" className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                Vehicle (Year / Make / Model)
              </label>
              <input
                id="vehicle"
                name="vehicle"
                type="text"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors"
                placeholder="e.g. 2024 Ford F-150"
              />
            </div>
            <div>
              <label htmlFor="preferred_date" className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                Preferred Date
              </label>
              <input
                id="preferred_date"
                name="preferred_date"
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
              Tell Us More
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#22d65f] focus:outline-none transition-colors resize-none"
              placeholder="Any details about what you're looking for..."
            />
          </div>

          {status === "error" && (
            <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {errorMsg || "Something went wrong."} Please call 780-818-9904 directly.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full text-center text-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Request"}
          </button>
        </form>
      )}
    </div>
  );
}
