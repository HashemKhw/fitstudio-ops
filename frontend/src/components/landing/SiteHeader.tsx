import Link from "next/link";
import { HEADER_NAV_LINKS } from "@/lib/navLinks";
import { Container } from "@/components/ui/Container";
import { CtaButtonGroup } from "@/components/landing/CtaButtonGroup";

const navLinkClass =
  "relative whitespace-nowrap transition-colors duration-300 ease-out text-slate-400 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-indigo-400 after:transition-transform after:duration-500 after:ease-out hover:text-slate-100 hover:after:scale-x-100";

const scrollLinkClass =
  "shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-slate-50 active:bg-slate-900";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 pt-[env(safe-area-inset-top)] backdrop-blur-xl shadow-2xl shadow-slate-950/60 transition-shadow duration-500 ease-out supports-[backdrop-filter]:bg-slate-950/70">
      <Container className="flex min-h-[3.25rem] items-center justify-between gap-2 py-2 sm:min-h-16 sm:gap-4 sm:py-0 lg:min-h-[4.25rem]">
        <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 font-semibold tracking-tight text-slate-100 transition-transform duration-500 ease-out hover:scale-[1.02]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500 text-sm text-white shadow-md shadow-indigo-500/40 transition-shadow duration-500 ease-out hover:shadow-lg hover:shadow-indigo-400/60 sm:h-8 sm:w-8">
              FS
            </span>
            <span className="hidden min-w-0 truncate text-sm text-slate-300 sm:inline sm:max-w-none sm:text-base">
              FitStudio Ops
            </span>
          </Link>
          <nav
            className="hidden items-center gap-6 text-sm font-medium text-slate-400 lg:flex xl:gap-8"
            aria-label="Primary"
          >
            {HEADER_NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className={navLinkClass}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <CtaButtonGroup compact />
        </div>
      </Container>

      {/* Below lg: same links as desktop, always present — swipe/scroll horizontally (no client JS). */}
      <div className="border-t border-slate-800 bg-slate-900/80 lg:hidden">
        <Container>
          <nav
            className="-mx-4 flex gap-1 overflow-x-auto overscroll-x-contain px-4 py-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:gap-2 sm:px-6"
            aria-label="Page sections"
          >
            {HEADER_NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className={scrollLinkClass}>
                {label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
