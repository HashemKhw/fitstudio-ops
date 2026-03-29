import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_API_URL;

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const DEFAULT_TO = "hashemkhw1@gmail.com";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContact(b: ContactBody): string | null {
  const name = String(b.name ?? "").trim();
  const email = String(b.email ?? "").trim();
  const phone = String(b.phone ?? "").trim();
  const message = String(b.message ?? "").trim();
  if (name.length < 1) return "Name is required.";
  if (!email || !emailRe.test(email)) return "A valid email is required.";
  if (phone && phone.length < 6) return "If provided, use a complete phone number.";
  if (message.length < 10) return "Message must be at least 10 characters.";
  return null;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendViaResend(body: ContactBody): Promise<boolean> {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return false;

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO;
  const from =
    process.env.RESEND_FROM?.trim() || "FitStudio Ops <onboarding@resend.dev>";

  const html = `
    <h2 style="font-family:sans-serif;font-size:18px;">New contact — FitStudio Ops</h2>
    <p style="font-family:sans-serif;font-size:14px;line-height:1.5;">
      <strong>Name:</strong> ${escapeHtml(name)}<br/>
      <strong>Email:</strong> ${escapeHtml(email)}<br/>
      <strong>Phone:</strong> ${escapeHtml(phone || "(not provided)")}<br/>
    </p>
    <p style="font-family:sans-serif;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(message)}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[FitStudio Ops] Contact from ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Resend error", res.status, text);
    return false;
  }
  return true;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const b = body as ContactBody;
  const validationError = validateContact(b);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  if (BACKEND_URL?.trim()) {
    try {
      const res = await fetch(`${BACKEND_URL.replace(/\/$/, "")}/api/leads/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(b),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        return NextResponse.json(
          { error: typeof data.error === "string" ? data.error : "Upstream error" },
          { status: res.status >= 400 && res.status < 600 ? res.status : 502 },
        );
      }
    } catch {
      return NextResponse.json({ error: "Upstream unavailable" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  if (process.env.RESEND_API_KEY?.trim()) {
    const ok = await sendViaResend(b);
    if (!ok) {
      return NextResponse.json({ error: "Could not send email. Check RESEND_API_KEY and sender domain." }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    {
      error:
        "Contact form is not configured. Set BACKEND_API_URL (Express + SMTP) or RESEND_API_KEY on the server.",
    },
    { status: 503 },
  );
}
