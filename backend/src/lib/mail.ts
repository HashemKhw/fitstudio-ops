import nodemailer from "nodemailer";

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function isSmtpConfigured(): boolean {
  return Boolean(process.env.SMTP_USER?.trim() && process.env.SMTP_PASS?.trim());
}

/** Default inbox for contact notifications (override with CONTACT_TO_EMAIL). */
const DEFAULT_CONTACT_TO = "hashemkhw1@gmail.com";

/**
 * Sends contact form submission via SMTP (e.g. Gmail app password).
 * Set SMTP_USER, SMTP_PASS; optional SMTP_HOST (default smtp.gmail.com), SMTP_PORT (587).
 */
export async function sendContactFormEmail(
  data: ContactPayload,
): Promise<{ ok: true } | { ok: false; reason: "not_configured" | "send_failed" }> {
  if (!isSmtpConfigured()) {
    return { ok: false, reason: "not_configured" };
  }

  const to = (process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_CONTACT_TO).trim();
  const user = process.env.SMTP_USER!.trim();
  const from = process.env.MAIL_FROM?.trim() || `FitStudio Ops <${user}>`;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST?.trim() || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user,
      pass: process.env.SMTP_PASS!.trim(),
    },
  });

  const phoneLine = data.phone?.trim() ? data.phone.trim() : "(not provided)";
  const text = [
    "New contact form submission — FitStudio Ops",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${phoneLine}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const html = `
    <h2 style="font-family:sans-serif;font-size:18px;">New contact — FitStudio Ops</h2>
    <p style="font-family:sans-serif;font-size:14px;line-height:1.5;">
      <strong>Name:</strong> ${escapeHtml(data.name)}<br/>
      <strong>Email:</strong> ${escapeHtml(data.email)}<br/>
      <strong>Phone:</strong> ${escapeHtml(phoneLine)}<br/>
    </p>
    <p style="font-family:sans-serif;font-size:14px;line-height:1.5;"><strong>Message</strong></p>
    <p style="font-family:sans-serif;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
  `;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject: `[FitStudio Ops] Contact from ${data.name}`,
      text,
      html,
    });
    return { ok: true };
  } catch (e) {
    console.error("sendContactFormEmail", e);
    return { ok: false, reason: "send_failed" };
  }
}
