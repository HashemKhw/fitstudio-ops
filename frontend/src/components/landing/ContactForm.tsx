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
        className="scroll-mt-28 rounded-2xl border border-[#ffd709]/60 bg-[#001717] px-6 py-10 text-center shadow-lg shadow-[#7D26CD]/40 sm:px-8"
      >
        <p className="text-lg font-semibold text-slate-50 uppercase tracking-wide">Message sent</p>
        <p className="mt-2 text-sm text-[#9cfbfa]">
          Thanks for reaching out—we&apos;ll get back to you as soon as we can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-[#ffd709] underline decoration-[#ff7cba] underline-offset-4 hover:text-[#ff7cba]"
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
      className="space-y-4 rounded-2xl border border-[#cb98ff]/40 bg-[#001717] p-5 shadow-sm transition-[box-shadow,border-color] duration-500 ease-out focus-within:border-[#ffd709]/70 focus-within:shadow-xl focus-within:shadow-[#7D26CD]/60 sm:space-y-5 sm:p-8"
      noValidate
    >
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-100">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className="mt-1.5 w-full rounded-lg border border-[#2a3548] bg-[#001111] px-3 py-3 text-base text-slate-50 shadow-sm outline-none ring-[#2a3548] placeholder:text-slate-500 focus:border-[#cb98ff] focus:ring-2 focus:ring-[#cb98ff]/40"
          placeholder="Your name"
        />
        {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-100">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className="mt-1.5 w-full rounded-lg border border-[#2a3548] bg-[#001111] px-3 py-3 text-base text-slate-50 shadow-sm outline-none ring-[#2a3548] placeholder:text-slate-500 focus:border-[#cb98ff] focus:ring-2 focus:ring-[#cb98ff]/40"
          placeholder="you@yourgym.com"
        />
        {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-100">
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1.5 w-full rounded-lg border border-[#2a3548] bg-[#001111] px-3 py-3 text-base text-slate-50 shadow-sm outline-none ring-[#2a3548] placeholder:text-slate-500 focus:border-[#cb98ff] focus:ring-2 focus:ring-[#cb98ff]/40"
          placeholder="+1 (555) 000-0000"
        />
        {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone}</p> : null}
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-100">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="mt-1.5 w-full resize-y rounded-lg border border-[#2a3548] bg-[#001111] px-3 py-3 text-base text-slate-50 shadow-sm outline-none ring-[#2a3548] placeholder:text-slate-500 focus:border-[#cb98ff] focus:ring-2 focus:ring-[#cb98ff]/40"
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
        className="min-h-12 w-full touch-manipulation rounded-none border-2 border-[#ffd709] bg-[#7D26CD] px-4 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#ffd709] hover:text-[#001111] disabled:opacity-60 sm:w-auto sm:min-w-[200px] sm:text-sm uppercase tracking-[0.2em]"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
