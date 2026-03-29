"use client";

import { useEffect, useState } from "react";
import { CONTACT_SECTION_ID } from "@/lib/cta";

const links = [
  { href: "#problem", label: "Why us" },
  { href: "#features", label: "Features" },
  { href: "#preview", label: "Product" },
  { href: "#pricing", label: "Pricing" },
  { href: `#${CONTACT_SECTION_ID}`, label: "Contact" },
] as const;

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-transparent text-zinc-700 transition-colors hover:border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-zinc-900/50 backdrop-blur-[2px] md:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav-panel"
            className="fixed inset-y-0 right-0 z-[70] flex w-[min(100vw-3rem,18rem)] flex-col gap-1 border-l border-zinc-200 bg-white px-4 pb-8 pt-[calc(0.75rem+env(safe-area-inset-top))] shadow-2xl md:hidden"
            style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}
          >
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">Menu</p>
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-base font-medium text-zinc-800 transition-colors hover:bg-brand-50 hover:text-brand-800 active:bg-brand-100"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </>
      ) : null}
    </>
  );
}
