"use client";

import { useState } from "react";

export function TrialForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gymName: data.get("gymName"),
          email: data.get("email"),
          phone: data.get("phone"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-lg bg-emerald-500/20 px-4 py-3 text-sm text-white ring-1 ring-emerald-400/30">
        Thanks—check your inbox for next steps to start your trial.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="trial-gym" className="block text-sm font-medium text-brand-100">
          Gym or studio name
        </label>
        <input
          id="trial-gym"
          name="gymName"
          required
          className="mt-1.5 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-white placeholder:text-brand-200/80 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
          placeholder="Northside Strength"
        />
      </div>
      <div>
        <label htmlFor="trial-email" className="block text-sm font-medium text-brand-100">
          Work email
        </label>
        <input
          id="trial-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-white placeholder:text-brand-200/80 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
          placeholder="you@yourgym.com"
        />
      </div>
      <div>
        <label htmlFor="trial-phone" className="block text-sm font-medium text-brand-100">
          Phone (optional)
        </label>
        <input
          id="trial-phone"
          name="phone"
          type="tel"
          className="mt-1.5 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-white placeholder:text-brand-200/80 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
          placeholder="+1 (555) 000-0000"
        />
      </div>
      {status === "error" ? (
        <p className="text-sm text-amber-200">Something went wrong. Please try again.</p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-brand-700 shadow hover:bg-brand-50 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Start my trial"}
      </button>
    </form>
  );
}
