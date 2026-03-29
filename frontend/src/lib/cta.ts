/** Site-wide CTA links. Use NEXT_PUBLIC_* so they work in client and server components. */

export const CONTACT_SECTION_ID = "contact";
export const CONTACT_FORM_ANCHOR_ID = "contact-form";

/** Jordan (+962 7 9001 3031) — matches https://wa.me/962790013031 */
const DEFAULT_WHATSAPP_PHONE = "962790013031";
const DEFAULT_CONTACT_EMAIL = "hashemkhw1@gmail.com";

export const WHATSAPP_PREFILL =
  "Hi, I'm interested in your gym management software";

export function getWhatsAppUrl(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? DEFAULT_WHATSAPP_PHONE;
  const phone = raw.replace(/\D/g, "");
  const text = encodeURIComponent(WHATSAPP_PREFILL);
  return `https://wa.me/${phone}?text=${text}`;
}

export function getContactMailtoUrl(): string {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? DEFAULT_CONTACT_EMAIL;
  const subject = encodeURIComponent("FitStudio Ops — inquiry");
  return `mailto:${email}?subject=${subject}`;
}
