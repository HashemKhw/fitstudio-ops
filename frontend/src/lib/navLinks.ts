import { CONTACT_SECTION_ID } from "@/lib/cta";

/** In-page header navigation (desktop + compact scroll row). */
export const HEADER_NAV_LINKS = [
  { href: "#problem", label: "Why us" },
  { href: "#features", label: "Features" },
  { href: "#preview", label: "Product" },
  { href: "#pricing", label: "Pricing" },
  { href: `#${CONTACT_SECTION_ID}`, label: "Contact" },
] as const;
