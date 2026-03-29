import { CONTACT_FORM_ANCHOR_ID, CONTACT_SECTION_ID, getWhatsAppUrl } from "@/lib/cta";

type Variant = "light" | "dark";

const lightPrimary =
  "inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

const lightSecondary =
  "inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-200 transition-colors hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400";

const lightWhatsApp =
  "inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600";

const darkPrimary =
  "inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const darkSecondary =
  "inline-flex items-center justify-center rounded-lg border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const darkWhatsApp =
  "inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300";

type CtaButtonGroupProps = {
  variant?: Variant;
  /** Tighter padding for the navigation bar */
  compact?: boolean;
  className?: string;
};

const compactMod = " !px-3 !py-2 !text-xs sm:!text-sm";

export function CtaButtonGroup({ variant = "light", compact = false, className = "" }: CtaButtonGroupProps) {
  const wa = getWhatsAppUrl();
  const [p, s, w] =
    variant === "dark" ? [darkPrimary, darkSecondary, darkWhatsApp] : [lightPrimary, lightSecondary, lightWhatsApp];
  const cm = compact ? compactMod : "";

  return (
    <div
      className={`flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 ${className}`}
    >
      <a href={`#${CONTACT_SECTION_ID}`} className={`${p}${cm}`}>
        Contact Us
      </a>
      <a href={`#${CONTACT_FORM_ANCHOR_ID}`} className={`${s}${cm}`}>
        Book a Demo
      </a>
      <a href={wa} target="_blank" rel="noopener noreferrer" className={`${w}${cm}`}>
        Message on WhatsApp
      </a>
    </div>
  );
}
