import { CONTACT_SECTION_ID } from "@/lib/cta";

type CtaButtonGroupProps = {
  /** Tighter padding for the navigation bar */
  compact?: boolean;
  className?: string;
};

const contactClass =
  "inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

const compactMod = " !px-3 !py-2 !text-xs sm:!text-sm";

/** Primary site CTA: scroll to the contact section (form + WhatsApp option there). */
export function CtaButtonGroup({ compact = false, className = "" }: CtaButtonGroupProps) {
  const cm = compact ? compactMod : "";

  return (
    <div className={`flex justify-center ${className}`}>
      <a href={`#${CONTACT_SECTION_ID}`} className={`${contactClass}${cm}`}>
        Contact Us
      </a>
    </div>
  );
}
