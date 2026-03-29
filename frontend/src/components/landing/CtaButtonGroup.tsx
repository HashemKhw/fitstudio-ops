import { CONTACT_SECTION_ID } from "@/lib/cta";

type CtaButtonGroupProps = {
  /** Tighter padding for the navigation bar */
  compact?: boolean;
  className?: string;
};

const contactClass =
  "inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/25 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

const compactMod = " !px-3 !py-2 !text-xs sm:!text-sm";

/** Primary site CTA: scroll to the contact section (form + WhatsApp option there). */
export function CtaButtonGroup({ compact = false, className = "" }: CtaButtonGroupProps) {
  const cm = compact ? compactMod : "";

  return (
    <div className={`flex justify-center ${className}`}>
      <a
        href={`#${CONTACT_SECTION_ID}`}
        className={`${contactClass} min-h-11 w-full max-w-full touch-manipulation sm:min-h-0 sm:w-auto sm:max-w-none${cm}`}
      >
        Contact Us
      </a>
    </div>
  );
}
