import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getEnvString } from "@/lib/workerEnv";

/** Prefer env; in local `next dev`, default to the Express API if unset (see `.env.development`). */
function resolveBackendUrl(): string | undefined {
  const explicit = getEnvString("BACKEND_API_URL");
  if (explicit) return explicit;
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000";
  }
  return undefined;
}

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
  const key = getEnvString("RESEND_API_KEY");
  if (!key) return false;

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();
  const to = getEnvString("CONTACT_TO_EMAIL") || DEFAULT_TO;
  const from =
    getEnvString("RESEND_FROM") || "FitStudio Ops <onboarding@resend.dev>";

  const html = `
    <h2 style="font-family:sans-serif;font-size:18px;">New contact — FitStudio Ops</h2>
    <p style="font-family:sans-serif;font-size:14px;line-height:1.5;">
      <strong>Name:</strong> ${escapeHtml(name)}<br/>
      <strong>Email:</strong> ${escapeHtml(email)}<br/>
      <strong>Phone:</strong> ${escapeHtml(phone || "(not provided)")}<br/>
    </p>
    <p style="font-family:sans-serif;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(message)}</p>
  `;

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `[FitStudio Ops] Contact from ${name}`,
    html,
  });

  if (error) {
    console.error("Resend error", error);
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

  const backendUrl = resolveBackendUrl();
  if (backendUrl) {
    try {
      const res = await fetch(`${backendUrl.replace(/\/$/, "")}/api/leads/contact`, {
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

  if (getEnvString("RESEND_API_KEY")) {
    const ok = await sendViaResend(b);
    if (!ok) {
      return NextResponse.json({ error: "Could not send email. Check RESEND_API_KEY and sender domain." }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    {
      error:
        "Contact form is not configured. Add RESEND_API_KEY as an encrypted secret (or BACKEND_API_URL to your API). Cloudflare: Workers → fitstudio-opss → Settings → Variables and secrets → Add → Secret. Redeploy after saving. Locally: set RESEND_API_KEY or BACKEND_API_URL in frontend/.env.local (see .env.example).",
    },
    { status: 503 },
  );
}
