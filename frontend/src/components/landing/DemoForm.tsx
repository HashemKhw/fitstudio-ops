"use client";

import { useState } from "react";

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          gymName: data.get("gymName"),
          message: data.get("message"),
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
        Thanks—we&apos;ll reach out within one business day to schedule your demo.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="demo-name" className="block text-sm font-medium text-brand-100">
          Your name
        </label>
        <input
          id="demo-name"
          name="name"
          required
          className="mt-1.5 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-white placeholder:text-brand-200/80 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>
      <div>
        <label htmlFor="demo-email" className="block text-sm font-medium text-brand-100">
          Work email
        </label>
        <input
          id="demo-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-white placeholder:text-brand-200/80 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>
      <div>
        <label htmlFor="demo-gym" className="block text-sm font-medium text-brand-100">
          Gym or studio name
        </label>
        <input
          id="demo-gym"
          name="gymName"
          required
          className="mt-1.5 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-white placeholder:text-brand-200/80 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>
      <div>
        <label htmlFor="demo-message" className="block text-sm font-medium text-brand-100">
          What do you want to see? (optional)
        </label>
        <textarea
          id="demo-message"
          name="message"
          rows={3}
          className="mt-1.5 w-full resize-none rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-white placeholder:text-brand-200/80 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>
      {status === "error" ? (
        <p className="text-sm text-amber-200">Something went wrong. Please try again.</p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg border border-white/40 bg-transparent px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Request demo"}
      </button>
    </form>
  );
}
