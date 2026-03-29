"use client";

import { useState } from "react";
import { CONTACT_FORM_ANCHOR_ID } from "@/lib/cta";

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

function validate(name: string, email: string, phone: string, message: string): FieldErrors {
  const e: FieldErrors = {};
  const n = name.trim();
  const em = email.trim();
  const ph = phone.trim();
  const msg = message.trim();

  if (n.length < 2) e.name = "Please enter your name.";
  if (!em) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) e.email = "Enter a valid email address.";
  if (ph && ph.length < 6) e.phone = "If provided, use a complete phone number.";
  if (msg.length < 10) e.message = "Please share a bit more detail (at least 10 characters).";

  return e;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    const nextErrors = validate(name, email, phone, message);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          message: message.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; ok?: boolean };
      if (!res.ok) {
        setServerError(typeof data.error === "string" ? data.error : "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
      setErrors({});
    } catch {
      setServerError("Network error. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        id={CONTACT_FORM_ANCHOR_ID}
        className="scroll-mt-28 rounded-2xl border border-emerald-200 bg-emerald-50/90 px-6 py-10 text-center sm:px-8"
      >
        <p className="text-lg font-semibold text-emerald-900">Message sent</p>
        <p className="mt-2 text-sm text-emerald-800">
          Thanks for reaching out—we&apos;ll get back to you as soon as we can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-2 hover:text-emerald-950"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      id={CONTACT_FORM_ANCHOR_ID}
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-[box-shadow,border-color] duration-500 ease-out focus-within:border-brand-200/60 focus-within:shadow-md sm:space-y-5 sm:p-8"
      noValidate
    >
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-700">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3 py-3 text-base text-zinc-900 shadow-sm outline-none ring-zinc-200 placeholder:text-zinc-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          placeholder="Your name"
        />
        {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-700">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3 py-3 text-base text-zinc-900 shadow-sm outline-none ring-zinc-200 placeholder:text-zinc-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          placeholder="you@yourgym.com"
        />
        {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-zinc-700">
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3 py-3 text-base text-zinc-900 shadow-sm outline-none ring-zinc-200 placeholder:text-zinc-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          placeholder="+1 (555) 000-0000"
        />
        {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone}</p> : null}
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-700">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="mt-1.5 w-full resize-y rounded-lg border border-zinc-200 bg-white px-3 py-3 text-base text-zinc-900 shadow-sm outline-none ring-zinc-200 placeholder:text-zinc-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          placeholder="Tell us about your gym or studio and what you’re looking for."
        />
        {errors.message ? <p className="mt-1 text-sm text-red-600">{errors.message}</p> : null}
      </div>
      {status === "error" ? (
        <p className="text-sm text-red-600">
          {serverError ??
            "Something went wrong. Please try again or use WhatsApp / email from this page."}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="min-h-12 w-full touch-manipulation rounded-lg bg-brand-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 disabled:opacity-60 sm:w-auto sm:min-w-[200px] sm:text-sm"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
